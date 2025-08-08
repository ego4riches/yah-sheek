package com.ego.yahsheek.review.dto;

import com.ego.yahsheek.review.entity.ReviewMedia;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ReviewMediaRequest {

    @NotNull
    private ReviewMedia.MediaType mediaType;

    @NotBlank
    private String mediaUrl;

    private String thumbnailUrl;
    private Long fileSize;
    private String mimeType;
    private Integer orderIndex;

    @Builder
    public ReviewMediaRequest(ReviewMedia.MediaType mediaType, String mediaUrl, String thumbnailUrl,
                              Long fileSize, String mimeType, Integer orderIndex) {
        this.mediaType = mediaType;
        this.mediaUrl = mediaUrl;
        this.thumbnailUrl = thumbnailUrl;
        this.fileSize = fileSize;
        this.mimeType = mimeType;
        this.orderIndex = orderIndex;
    }
}
