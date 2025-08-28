package com.ego.yahsheek.review.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@Getter
@AllArgsConstructor
@Builder
public class ReviewLikeAndUnlikeResponse {

    private String reviewCode;

    private int likeCount;

}
