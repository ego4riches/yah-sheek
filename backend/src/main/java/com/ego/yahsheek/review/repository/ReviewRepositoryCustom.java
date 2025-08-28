package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.dto.ReviewSearchRequest;
import com.ego.yahsheek.review.entity.Review;

import java.util.List;

public interface ReviewRepositoryCustom {

    Long getNextSeq();

    List<Review> findReviews(ReviewSearchRequest request, Long userId);

}
