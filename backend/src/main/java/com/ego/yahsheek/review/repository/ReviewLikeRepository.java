package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.entity.ReviewLike;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long> {
    boolean existsByReview_IdAndUser_Id(Long reviewId, Long userId);
    void deleteByReview_IdAndUser_Id(Long reviewId, Long userId);
}
