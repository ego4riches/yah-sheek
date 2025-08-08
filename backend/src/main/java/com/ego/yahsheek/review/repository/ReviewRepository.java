package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Page<Review> findByTeam_IdOrderByCreatedAtDesc(Long teamId, Pageable pageable);
    Page<Review> findByTeam_IdAndCategory_IdOrderByCreatedAtDesc(Long teamId, Long categoryId, Pageable pageable);

    Page<Review> findByTeam_IdOrderByLikesCountDescCreatedAtDesc(Long teamId, Pageable pageable);
    Page<Review> findByTeam_IdAndCategory_IdOrderByLikesCountDescCreatedAtDesc(Long teamId, Long categoryId, Pageable pageable);
}
