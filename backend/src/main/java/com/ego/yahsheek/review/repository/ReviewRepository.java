package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long>, ReviewRepositoryCustom {

    Optional<Review> findByCode(String code);

    Optional<Review> findByCodeAndUserIdAndIsActiveTrue(String code, Long userId);

    Optional<Review> findByCodeAndIsActiveFalse(String code);

    @Query("""
    select distinct r from Review r
    left join fetch r.reviewLikes rl
    left join fetch rl.user u
    where r.code = :code
    """)
    Optional<Review> findByCodeWithLikesAndUsers(@Param("code") String code);

}
