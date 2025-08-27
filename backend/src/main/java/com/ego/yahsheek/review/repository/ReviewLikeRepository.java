package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.entity.Review;
import com.ego.yahsheek.review.entity.ReviewLike;
import com.ego.yahsheek.user.entity.User;
import jakarta.persistence.LockModeType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Lock;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ReviewLikeRepository extends JpaRepository<ReviewLike, Long> {

    boolean existsByReviewIdAndUserId(Long reviewId, Long userId);

    int deleteByReviewIdAndUserId(Long reviewId, Long userId);

    Optional<ReviewLike> findByReviewIdAndUserId(Long reviewId, Long userId);

    List<ReviewLike> user(User user);
}
