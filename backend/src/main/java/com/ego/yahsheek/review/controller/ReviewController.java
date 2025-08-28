package com.ego.yahsheek.review.controller;

import com.ego.yahsheek.review.dto.ReviewCreateRequest;
import com.ego.yahsheek.review.dto.ReviewLikeAndUnlikeResponse;
import com.ego.yahsheek.review.dto.ReviewResponse;
import com.ego.yahsheek.review.dto.ReviewSearchRequest;
import com.ego.yahsheek.review.service.ReviewService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springdoc.core.annotations.ParameterObject;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/reviews")
public class ReviewController {

    private final ReviewService reviewService;
    private final Long userId = 1L;

    @Operation(summary = "리뷰 작성", description = "리뷰를 작성합니다.")
    @PostMapping
    public ReviewResponse create(@Valid @RequestBody ReviewCreateRequest request) {

        return reviewService.create(request);
    }

    @Operation(summary = "리뷰 목록 조회", description = "조회/정렬 조건에 따라 리뷰 목록을 조회합니다.")
    @GetMapping
    public List<ReviewResponse> getReviews(@Valid @ParameterObject ReviewSearchRequest request) {

        return reviewService.getReviews(request, userId);
    }

    @Operation(summary = "리뷰 상세 조회", description = "리뷰 상세 내용을 조회합니다.")
    @GetMapping("/{id}")
    public ReviewResponse get(@PathVariable String id) {

        return reviewService.getReviewAndIncreaseView(id, userId);
    }

    @Operation(summary = "리뷰 수정", description = "리뷰를 수정합니다.")
    @PatchMapping("/{id}")
    public ReviewResponse update(@PathVariable String id, @Valid @RequestBody ReviewCreateRequest request) {

//        return reviewService.update(id, request, userId);
        return null;
    }

    @Operation(summary = "리뷰 삭제", description = "리뷰를 삭제합니다.")
    @DeleteMapping("/{id}")
    public ReviewResponse delete(@PathVariable String id) {

        return reviewService.delete(id, userId);
    }

    @Operation(summary = "리뷰 삭제 철회", description = "리뷰 삭제를 철회합니다.")
    @PatchMapping("/{id}/restore")
    public ReviewResponse restore(@PathVariable String id) {

        return reviewService.restore(id
//                , userId
        );
    }

    @Operation(summary = "좋아요", description = "해당 리뷰에 좋아요를 합니다. 이미 좋아요 한 유저라면 예외가 발생합니다.")
    @PostMapping("/{id}/like")
    public ReviewLikeAndUnlikeResponse like(@PathVariable String id) {

        return reviewService.like(id, userId);
    }

    @Operation(summary = "좋아요 취소", description = "해당 리뷰에 좋아요를 취소합니다. 좋아요 기록이 없다면 예외가 발생합니다.")
    @DeleteMapping("/{id}/like")
    public ReviewLikeAndUnlikeResponse unlike(@PathVariable String id) {

        return reviewService.unlike(id, userId);
    }
}
