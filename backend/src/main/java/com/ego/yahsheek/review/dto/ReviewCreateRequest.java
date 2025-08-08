package com.ego.yahsheek.review.dto;

import jakarta.validation.constraints.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
public class ReviewCreateRequest {

    @NotNull
    private Long userId; // 인증 미구현: 임시 전달

    @NotNull
    private Long teamId;

    @NotNull
    private Long categoryId;

    @NotBlank
    private String content;

    @Min(1)
    @Max(5)
    private Integer rating;

    private List<String> tags;

    private List<ReviewMediaRequest> mediaList;
}
