package com.ego.yahsheek.review.service;

import com.ego.yahsheek.category.entity.Category;
import com.ego.yahsheek.category.repository.CategoryRepository;
import com.ego.yahsheek.common.exception.BusinessException;
import com.ego.yahsheek.common.exception.ExceptionCode;
import com.ego.yahsheek.review.dto.ReviewCreateRequest;
import com.ego.yahsheek.review.dto.ReviewMediaRequest;
import com.ego.yahsheek.review.dto.ReviewResponse;
import com.ego.yahsheek.review.entity.*;
import com.ego.yahsheek.review.repository.*;
import com.ego.yahsheek.team.entity.Team;
import com.ego.yahsheek.team.repository.TeamRepository;
import com.ego.yahsheek.user.entity.User;
import com.ego.yahsheek.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;

@Service
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

        Review review = Review.builder()
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
    public Page<ReviewResponse> getReviews(Long teamId, Long categoryId, String sort, Pageable pageable) {
        Page<Review> page;
        boolean sortByLike = "likes".equalsIgnoreCase(sort);

        if (categoryId == null) {
            page = sortByLike
                    ? reviewRepository.findByTeam_IdOrderByLikesCountDescCreatedAtDesc(teamId, pageable)
                    : reviewRepository.findByTeam_IdOrderByCreatedAtDesc(teamId, pageable);
        } else {
            page = sortByLike
                    ? reviewRepository.findByTeam_IdAndCategory_IdOrderByLikesCountDescCreatedAtDesc(teamId, categoryId, pageable)
                    : reviewRepository.findByTeam_IdAndCategory_IdOrderByCreatedAtDesc(teamId, categoryId, pageable);
        }

        return page.map(ReviewResponse::from);
    }

    @Transactional
    public ReviewResponse getReviewAndIncreaseView(Long reviewId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        review.increaseViewsCount();
        return ReviewResponse.from(review);
    }

    @Transactional
    public void delete(Long reviewId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        reviewRepository.delete(review);
    }

    @Transactional
    public void like(Long reviewId, Long userId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));

        if (reviewLikeRepository.existsByReview_IdAndUser_Id(review.getId(), user.getId())) {
            return; // idempotent
        }
        review.addReviewLike(ReviewLike.builder().user(user).build());
    }

    @Transactional
    public void unlike(Long reviewId, Long userId) {
        Review review = reviewRepository.findById(reviewId)
                .orElseThrow(() -> new BusinessException(ExceptionCode.ENTITY_NOT_FOUND));
        reviewLikeRepository.deleteByReview_IdAndUser_Id(review.getId(), userId);
    }
}
