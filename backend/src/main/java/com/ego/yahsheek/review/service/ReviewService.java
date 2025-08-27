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

import java.util.List;
import java.util.Objects;
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

    @Transactional
    public ReviewResponse create(ReviewCreateRequest request) {
        User user = userRepository.findById(request.getUserId())
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        Team team = teamRepository.findById(request.getTeamId())
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        Long seq = reviewRepository.getNextSeq();

        Review review = Review.builder()
                .code(String.format("%s%05d", "R", seq))
                .user(user)
                .team(team)
                .category(category)
                .content(request.getContent())
                .rating(request.getRating())
                .build();

        // 태그
        if (request.getTags() != null) {
            request.getTags().stream()
                    .filter(Objects::nonNull)
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .forEach(tagName -> review.addReviewTag(ReviewTag.builder().tagName(tagName).build()));
        }

        // 미디어
        if (request.getMediaList() != null) {
            for (ReviewMediaRequest mediaReq : request.getMediaList()) {
                ReviewMedia media = ReviewMedia.builder()
                        .mediaType(mediaReq.getMediaType())
                        .mediaUrl(mediaReq.getMediaUrl())
                        .thumbnailUrl(mediaReq.getThumbnailUrl())
                        .fileSize(mediaReq.getFileSize())
                        .mimeType(mediaReq.getMimeType())
                        .orderIndex(mediaReq.getOrderIndex())
                        .build();
                review.addReviewMedia(media);
            }
        }

        Review saved = reviewRepository.save(review);
        return ReviewResponse.from(saved);
    }

    @Transactional(readOnly = true)
    public List<ReviewResponse> getReviews(ReviewSearchRequestDto request, Long userId) {
        return reviewRepository.findReviews(request, userId)
                .stream()
                .map(ReviewResponse::from)
                .collect(Collectors.toList());
    }

    @Transactional
    public ReviewResponse getReviewAndIncreaseView(String code) {
        Review review = reviewRepository.findByCode(code)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        review.increaseViewsCount();
        return ReviewResponse.from(review);
    }

    @Transactional
    public ReviewResponse delete(String code, Long userId) {
        Review review = reviewRepository.findByCodeAndUserId(code, userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        review.deactivate();

        return ReviewResponse.from(review);
    }

    @Transactional
    public ReviewResponse like(String reviewCode, Long userId) {
        // 1) Review + reviewLikes + user까지 fetch join으로 로드
        Review review = reviewRepository.findByCodeWithLikesAndUsers(reviewCode)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        // 2) User 로드(프록시로도 충분)
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        // 3) 중복 검사(in-memory)
        if (review.hasLikeByUserId(userId)) {
            throw new BusinessException(ExceptionCode.ALREADY_LIKED);
        }

        // 4) 추가(양방향 세팅)
        review.addLike(user);

        // 5) 카운트 동기화
        review.refreshLikesCount();

        // 6) flush 시 uk_review_user로 동시성 중복 방지
        try {
            // JPA는 트랜잭션 커밋 시 flush. 즉시 검증하려면 flush 호출 가능.
            // entityManager.flush(); // 필요 시 주석 해제
        } catch (DataIntegrityViolationException e) {
            // 유니크 제약 위반 → 이미 좋아요 처리
            throw new BusinessException(ExceptionCode.ALREADY_LIKED);
        }

        return ReviewResponse.from(review);
    }

    @Transactional
    public ReviewResponse unlike(String reviewCode, Long userId) {
        // 1) Review + reviewLikes + user까지 fetch join으로 로드
        Review review = reviewRepository.findByCodeWithLikesAndUsers(reviewCode)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        // 2) 없는 좋아요면 예외
        if (!review.hasLikeByUserId(userId)) {
            throw new BusinessException(ExceptionCode.LIKE_NOT_FOUND);
        }

        // 3) 제거(양방향 끊기 + orphanRemoval로 delete)
        review.removeLikeByUserId(userId);

        // 4) 카운트 동기화
        review.refreshLikesCount();

        return ReviewResponse.from(review);
    }
}
