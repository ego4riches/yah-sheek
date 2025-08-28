package com.ego.yahsheek.review.service;

import com.ego.yahsheek.category.entity.Category;
import com.ego.yahsheek.category.repository.CategoryRepository;
import com.ego.yahsheek.common.exception.BusinessException;
import com.ego.yahsheek.common.exception.ExceptionCode;
import com.ego.yahsheek.review.dto.*;
import com.ego.yahsheek.review.entity.*;
import com.ego.yahsheek.review.repository.*;
import com.ego.yahsheek.team.entity.Team;
import com.ego.yahsheek.team.repository.TeamRepository;
import com.ego.yahsheek.user.entity.User;
import com.ego.yahsheek.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserRepository userRepository;
    private final TeamRepository teamRepository;
    private final CategoryRepository categoryRepository;
    private final ReviewLikeRepository reviewLikeRepository;


    /**
     * 리뷰 Entity 생성 및 저장
     * @param request 리뷰 생성 요청
     * @return 생성된 리뷰
     * @throws BusinessException 연관된 User, Team, Category 엔티티를 찾을 수 없는 경우
     */
    @Transactional
    public ReviewResponse create(ReviewCreateRequest request) {
        final User user = fetchUser(request.getUserId());
        final Team team = fetchTeam(request.getTeamId());
        final Category category = fetchCategory(request.getCategoryId());

        final Review review = Review.builder()
                .code(generateReviewCode())
                .user(user)
                .team(team)
                .category(category)
                .content(request.getContent())
                .rating(request.getRating())
                .build();

        addTagsToReview(review, request.getTags());
        addMediaToReview(review, request.getMediaList());

        Review saved = reviewRepository.save(review);
        return ReviewResponse.from(saved);
    }


    /**
     * 리뷰 목록 조회
     * @param request 조회 조건
     * @param userId 조회자
     * @return 조회된 리뷰 목록
     */
    @Transactional(readOnly = true)
    public List<ReviewResponse> getReviews(ReviewSearchRequest request, Long userId) {
        return reviewRepository.findReviews(request, userId)
                .stream()
                .map(ReviewResponse::from)
                .collect(Collectors.toList());
    }

    /**
     * 리뷰 단건 조회 및 조회수 증가
     * @param code  리뷰 코드
     * @param userId 조회자
     * @return 조회된 리뷰
     * @throws BusinessException 리뷰를 찾을 수 없거나, 삭제된 리뷰인 경우
     */
    @Transactional
    public ReviewResponse getReviewAndIncreaseView(String code, Long userId) {
        Review review = reviewRepository.findByCode(code)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        if (!review.isActive()) {
            log.info("[삭제된 글 열람 시도] reviewId={}, userId={}", review.getId(), userId);
            throw new BusinessException(ExceptionCode.ENTITY_NOT_FOUND);
        }

        review.increaseViewsCount(); // 낙관적 락(@Version) 권장
        return ReviewResponse.from(review);
    }

    /**
     * 리뷰 수정
     * @param reviewCode 리뷰 코드
     * @param request   수정 요청
     * @param userId    수정 요청자
     * @return 수정된 리뷰
     * @throws BusinessException 리뷰를 찾을 수 없거나, 삭제된 리뷰이거나, 소유자가 아닌 경우
     */
    @Transactional
    public ReviewResponse update(String reviewCode, ReviewCreateRequest request, Long userId) {
        Review review = fetchActiveOwnedReview(reviewCode, userId);

        final Team team = fetchTeam(request.getTeamId());
        final Category category = fetchCategory(request.getCategoryId());

        review.updateReview(request.getContent(), request.getRating(), category, team);

        // replace 정책: 기존 것 지우고 요청 값으로 재세팅
        review.clearTags();
        addTagsToReview(review, request.getTags());

        review.clearMedia();
        addMediaToReview(review, request.getMediaList());

        return ReviewResponse.from(review);
    }


    /**
     * 리뷰 삭제 (논리 삭제)
     * @param code 리뷰 코드
     * @param userId 삭제 요청자
     * @return 삭제된 리뷰
     * @throws BusinessException 리뷰를 찾을 수 없거나, 이미 삭제된 리뷰이거나, 소유자가 아닌 경우
     */
    @Transactional
    public ReviewResponse delete(String code, Long userId) {
        Review review = fetchActiveOwnedReview(code, userId);
        review.deactivate();
        return ReviewResponse.from(review);
    }

    /**
     * 리뷰 삭제 복구
     * @param code 리뷰 코드
     * @return 복구된 리뷰
     * @throws BusinessException 리뷰를 찾을 수 없거나, 삭제되지 않은 리뷰인 경우
     */
    @Transactional
    public ReviewResponse restore(String code /*, Long userId */) {
        Review review = reviewRepository.findByCodeAndIsActiveFalse(code)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        // TODO: 마이페이지 복구 기능 추가 시 소유자 검증 필요
        review.activate();
        return ReviewResponse.from(review);
    }

    /**
     * 리뷰 좋아요
     * @param reviewCode 리뷰 코드
     * @param userId 좋아요 요청자
     * @return 좋아요 결과 (리뷰 코드, 현재 좋아요 수)
     * @throws BusinessException 리뷰를 찾을 수 없는 경우, 이미 좋아요 한 경우
     */
    @Transactional
    public ReviewLikeAndUnlikeResponse like(String reviewCode, Long userId) {
        Review review = fetchReviewWithLikes(reviewCode);
        User user = fetchUser(userId);

        // 애플리케이션 레벨 선체크
        if (reviewLikeRepository.existsByReviewIdAndUserId(review.getId(), userId)) {
            throw new BusinessException(ExceptionCode.ALREADY_LIKED);
        }

        try {
            ReviewLike like = ReviewLike.of(review, user);
            review.addLike(like);
        } catch (DataIntegrityViolationException e) {
            // DB 유니크 제약( review_id + user_id ) 충돌 방어
            throw new BusinessException(ExceptionCode.ALREADY_LIKED);
        }

        log.debug("[like] reviewCode={}, likeCount={}", reviewCode, review.getReviewLikes().size());

        return ReviewLikeAndUnlikeResponse.builder()
                .reviewCode(reviewCode)
                .likeCount(review.getReviewLikes().size())
                .build();
    }

    /**
     * 리뷰 좋아요 취소
     * @param reviewCode 리뷰 코드
     * @param userId 좋아요 취소 요청자
     * @return 좋아요 취소 결과 (리뷰 코드, 현재 좋아요 수)
     * @throws BusinessException 리뷰를 찾을 수 없는 경우, 좋아요 기록이 없는 경우
     */
    @Transactional
    public ReviewLikeAndUnlikeResponse unlike(String reviewCode, Long userId) {
        Review review = fetchReviewWithLikes(reviewCode);

        ReviewLike like = reviewLikeRepository.findByReviewIdAndUserId(review.getId(), userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.LIKE_NOT_FOUND));

        review.removeLike(like);

        log.debug("[unlike] reviewCode={}, likeCount={}", reviewCode, review.getReviewLikes().size());

        return ReviewLikeAndUnlikeResponse.builder()
                .reviewCode(reviewCode)
                .likeCount(review.getReviewLikes().size())
                .build();
    }

    /* =========================
       Helpers (Entity fetch)
       ========================= */
    /**
     * User 조회 헬퍼
     * @param userId 조회할 User ID
     * @return 조회된 User
     * @throws BusinessException User를 찾을 수 없는 경우
     */
    private User fetchUser(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
    }

    /**
     * Team 조회 헬퍼
     * @param teamId 조회할 Team ID
     * @return 조회된 Team
     * @throws BusinessException Team을 찾을 수 없는 경우
     */
    private Team fetchTeam(Long teamId) {
        return teamRepository.findById(teamId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
    }

    /**
     * Category 조회 헬퍼
     * @param categoryId 조회할 Category ID
     * @return 조회된 Category
     * @throws BusinessException Category를 찾을 수 없는 경우
     */
    private Category fetchCategory(Long categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
    }

    /**
     * 활성 상태인 리뷰를 소유자 검증과 함께 조회하는 헬퍼
     * @param reviewCode 리뷰 코드
     * @param userId 요청자 (소유자 검증용)
     * @return 조회된 리뷰
     * @throws BusinessException 리뷰를 찾을 수 없거나, 삭제된 리뷰이거나, 소유자가 아닌 경우
     */
    private Review fetchActiveOwnedReview(String reviewCode, Long userId) {
        return reviewRepository.findByCodeAndUserIdAndIsActiveTrue(reviewCode, userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
    }

    /**
     * 리뷰를 좋아요 및 좋아요한 유저 정보와 함께 조회하는 헬퍼
     * @param reviewCode 리뷰 코드
     * @return 조회된 리뷰
     * @throws BusinessException 리뷰를 찾을 수 없는 경우
     */
    private Review fetchReviewWithLikes(String reviewCode) {
        return reviewRepository.findByCodeWithLikesAndUsers(reviewCode)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
    }

    /**
     * 리뷰 코드 생성 헬퍼
     * @return 생성된 리뷰 코드 (예: R00001)
     * @throws BusinessException 시퀀스 생성에 실패한 경우
     */
    private String generateReviewCode() {
        try {
            Long seq = reviewRepository.getNextSeq();
            return String.format("R%05d", seq);
        } catch (Exception e) {
            log.error("시퀀스 생성 실패", e);
            throw new BusinessException(ExceptionCode.INTERNAL_ERROR);
        }
    }

    /* =========================
       Helpers (Aggregate mutation)
       ========================= */
    /**
     * 리뷰에 태그 추가 헬퍼
     * @param review 리뷰 엔티티
     * @param tags   추가할 태그 목록
     */
    private void addTagsToReview(Review review, List<String> tags) {
        Optional.ofNullable(tags).orElseGet(Collections::emptyList)
                .stream()
                .filter(Objects::nonNull)
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .distinct() // 동일 태그 중복 방지
                .forEach(tagName -> review.addReviewTag(
                        ReviewTag.builder().tagName(tagName).build()
                ));
    }

    /**
     * 리뷰에 미디어 추가 헬퍼
     * @param review    리뷰 엔티티
     * @param mediaList 추가할 미디어 목록
     */
    private void addMediaToReview(Review review, List<ReviewMediaRequest> mediaList) {
        Optional.ofNullable(mediaList).orElseGet(Collections::emptyList)
                .stream()
                .map(mediaReq -> ReviewMedia.builder()
                        .mediaType(mediaReq.getMediaType())
                        .mediaUrl(mediaReq.getMediaUrl())
                        .thumbnailUrl(mediaReq.getThumbnailUrl())
                        .fileSize(mediaReq.getFileSize())
                        .mimeType(mediaReq.getMimeType())
                        .orderIndex(mediaReq.getOrderIndex())
                        .build())
                .forEach(review::addReviewMedia);
    }
}