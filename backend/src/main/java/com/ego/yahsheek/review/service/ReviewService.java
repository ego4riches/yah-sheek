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
    public List<ReviewResponse> getReviews(ReviewSearchRequest request, Long userId) {
        return reviewRepository.findReviews(request, userId)
                .stream()
                .map(ReviewResponse::from)
                .collect(Collectors.toList());
    }

    @Transactional
    public ReviewResponse getReviewAndIncreaseView(String code, Long userId) {
        Review review = reviewRepository.findByCode(code)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        if (!review.isActive()) {
            log.info("[삭제된 글 열람 시도] reviewId: {}, userId: {}", review.getId(), userId);

            throw new BusinessException(ExceptionCode.ENTITY_NOT_FOUND);
        }

        review.increaseViewsCount();
        return ReviewResponse.from(review);
    }

    @Transactional
    public ReviewResponse delete(String code, Long userId) {
        Review review = reviewRepository.findByCodeAndUserIdAndIsActiveTrue(code, userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        review.deactivate();

        return ReviewResponse.from(review);
    }

    @Transactional
    public ReviewResponse restore(String code
//            , Long userId
    ) {
        Review review = reviewRepository.findByCodeAndIsActiveFalse(code)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        // todo: 추후 (마이페이지 내에서 삭제된 글 확인 - 복구) 기능 추가 시, userId 검증 로직 필요

        review.activate();

        return ReviewResponse.from(review);
    }

    @Transactional
    public ReviewLikeAndUnlikeResponse like(String reviewCode, Long userId) {
        Review review = reviewRepository.findByCodeWithLikesAndUsers(reviewCode)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        log.info("[like - before] review: {}", review);
        log.info("[like - before] review.getReviewLikes().size(): {}", review.getReviewLikes().size());

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        boolean exists = reviewLikeRepository.existsByReviewIdAndUserId(review.getId(), userId);
        if (exists) throw new BusinessException(ExceptionCode.ALREADY_LIKED);

        ReviewLike like = ReviewLike.of(review, user);
        review.addLike(like);

        log.info("[like - after] review: {}", review);
        log.info("[like - after] review.getReviewLikes().size(): {}", review.getReviewLikes().size());

        return ReviewLikeAndUnlikeResponse.builder()
                .reviewCode(reviewCode)
                .likeCount(review.getReviewLikes().size())
                .build();
    }

    @Transactional
    public ReviewLikeAndUnlikeResponse unlike(String reviewCode, Long userId) {
        // 1) Review + reviewLikes + user까지 fetch join으로 로드
        Review review = reviewRepository.findByCodeWithLikesAndUsers(reviewCode)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        log.info("[unlike - before] review: {}", review);
        log.info("[unlike - before] review.getReviewLikes().size(): {}", review.getReviewLikes().size());

        ReviewLike like = reviewLikeRepository.findByReviewIdAndUserId(review.getId(), userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.LIKE_NOT_FOUND));

        review.removeLike(like);

        log.info("[unlike - after] review: {}", review);
        log.info("[unlike - after] review.getReviewLikes().size(): {}", review.getReviewLikes().size());

        return ReviewLikeAndUnlikeResponse.builder()
                .reviewCode(reviewCode)
                .likeCount(review.getReviewLikes().size())
                .build();
    }
}
