package com.ego.yahsheek.review.dto;

import com.ego.yahsheek.review.entity.Review;
import com.ego.yahsheek.review.entity.ReviewMedia;
import com.ego.yahsheek.review.entity.ReviewTag;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public class ReviewResponse {
//    private Long id;
//    private Long userId;
    private String id;
    private String userId;
    private String nickname;
    private Long teamId;
    private String teamKey;
    private Long categoryId;
    private String categoryName;
    private String content;
    private Integer rating;
    private Integer viewsCount;
    private Integer likesCount;
    private LocalDateTime createdAt;
    private List<String> tags;
    private List<MediaItem> media;

    @Getter
    @AllArgsConstructor
    public static class MediaItem {
        private ReviewMedia.MediaType mediaType;
        private String mediaUrl;
        private String thumbnailUrl;
        private Integer orderIndex;
    }

    public static ReviewResponse from(Review review) {
        return new ReviewResponse(
//                review.getId(),
//                review.getUser().getId(),
                review.getCode()
                , review.getUser().getCode()
                , review.getUser().getNickname()
                , review.getTeam().getId()
                , review.getTeam().getTeamKey()
                , review.getCategory().getId()
                , review.getCategory().getCategoryName()
                , review.getContent()
                , review.getRating()
                , review.getViewsCount()
                , review.getLikesCount()
                , review.getCreatedAt()
                , review.getReviewTags().stream().map(ReviewTag::getTagName).collect(Collectors.toList())
                , review.getReviewMedia().stream().map(m -> new MediaItem(m.getMediaType(), m.getMediaUrl(), m.getThumbnailUrl(), m.getOrderIndex())).collect(Collectors.toList())
        );
    }
}
