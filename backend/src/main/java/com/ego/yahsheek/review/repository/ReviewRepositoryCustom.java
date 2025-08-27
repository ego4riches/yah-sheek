package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.dto.ReviewSearchRequestDto;
import com.ego.yahsheek.review.entity.Review;

import java.util.List;

public interface ReviewRepositoryCustom {

    Long getNextSeq();

    List<Review> findReviews(ReviewSearchRequestDto request, Long userId);

}
