package com.ego.yahsheek.review.controller;

import com.ego.yahsheek.review.dto.ReviewCreateRequest;
import com.ego.yahsheek.review.dto.ReviewResponse;
import com.ego.yahsheek.review.service.ReviewService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    @PostMapping
    public ReviewResponse create(@Valid @RequestBody ReviewCreateRequest request) {
        return reviewService.create(request);
    }

    @GetMapping
    public Page<ReviewResponse> getReviews(@RequestParam Long teamId,
                                           @RequestParam(required = false) Long categoryId,
                                           @RequestParam(required = false, defaultValue = "recent") String sort,
                                           Pageable pageable) {
        return reviewService.getReviews(teamId, categoryId, sort, pageable);
    }

    @GetMapping("/{reviewId}")
    public ReviewResponse get(@PathVariable Long reviewId) {
        return reviewService.getReviewAndIncreaseView(reviewId);
    }

    @DeleteMapping("/{reviewId}")
    public void delete(@PathVariable Long reviewId) {
        reviewService.delete(reviewId);
    }

    @PostMapping("/{reviewId}/like")
    public void like(@PathVariable Long reviewId, @RequestParam Long userId) {
        reviewService.like(reviewId, userId);
    }

    @DeleteMapping("/{reviewId}/like")
    public void unlike(@PathVariable Long reviewId, @RequestParam Long userId) {
        reviewService.unlike(reviewId, userId);
    }
}
