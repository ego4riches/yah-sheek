package com.ego.yahsheek.review.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "리뷰 목록 조회")
public class ReviewSearchRequest {

    @Schema(description = "팀 ID", example = "1")
    private Long teamId;

    @Schema(description = "카테고리 ID", example = "3")
    private Long categoryId;

    @JsonProperty("isWithMedia")
    @Schema(description = "사진 있는 글만 보기", example = "false")
    private boolean isWithMedia = false;

    @JsonProperty("isMyReview")
    @Schema(description = "내가 작성한 글만 보기", example = "false")
    private boolean isMyReview = false;

    @Schema(description = "정렬 기준", example = "LATEST")
    private ReviewSort sort = ReviewSort.LATEST;

    @Schema(description = "이미 조회된 글 수 (건너뛸 글 수)", example = "0")
    private int offset = 0;

    @Schema(description = "조회할 글 수", example = "20")
    private int size = 20;

    @Schema(description = "검색어", example = "존맛")
    private String searchKeyword;

}
