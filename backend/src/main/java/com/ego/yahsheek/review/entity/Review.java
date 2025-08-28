package com.ego.yahsheek.review.entity;

import com.ego.yahsheek.category.entity.Category;
import com.ego.yahsheek.team.entity.Team;
import com.ego.yahsheek.user.entity.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Formula;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "reviews")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "code", nullable = false)
    private String code;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id", nullable = false)
    private Team team;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id", nullable = false)
    private Category category;

    @Column(name = "content", nullable = false, columnDefinition = "TEXT")
    private String content;

    @Column(name = "rating")
    private int rating;

    @Column(name = "views_count")
    private int viewsCount = 0;

    @Formula("(select count(*) from review_likes likes where likes.review_id = id)")
    private int likesCount;

    @Column(name = "is_active")
    private boolean isActive = true;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "updated_at", nullable = false)
    private LocalDateTime updatedAt;

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReviewTag> reviewTags = new ArrayList<>();

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReviewMedia> reviewMedia = new ArrayList<>();

    @OneToMany(mappedBy = "review", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ReviewLike> reviewLikes = new ArrayList<>();

    @Builder
    public Review(String code, User user, Team team, Category category, String content, Integer rating) {
        this.code = code;
        this.user = user;
        this.team = team;
        this.category = category;
        this.content = content;
        this.rating = rating;
    }

    public void updateReview(String content, Integer rating, Category category, Team team) {
        this.content = content;
        this.rating = rating;
        this.category = category;
        this.team = team;
    }

    public void increaseViewsCount() {
        this.viewsCount++;
    }

    public void deactivate() {
        this.isActive = false;
    }

    public void activate() {
        this.isActive = true;
    }

    // = = = = = = = = = = Tag 도메인 메서드 = = = = = = = = = =
    public void clearTags() {
        this.reviewTags.clear();
    }

    public void addReviewTag(ReviewTag reviewTag) {
        reviewTags.add(reviewTag);
        reviewTag.setReview(this);
    }

    // = = = = = = = = = = Media 도메인 메서드 = = = = = = = = = =
    public void clearMedia() {
        reviewMedia.clear();
    }
    public void addReviewMedia(ReviewMedia reviewMedia) {
        this.reviewMedia.add(reviewMedia);
        reviewMedia.setReview(this);
    }

    // = = = = = = = = = = Like 도메인 메서드 = = = = = = = = = =
    public void addLike(ReviewLike like) {
        reviewLikes.add(like);
        like.setReview(this);
    }

    public void removeLike(ReviewLike like) {
        reviewLikes.remove(like);
        like.setReview(null);
    }

    @Override
    public String toString() {
        return "Review{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", userId=" + (user != null ? user.getId() : null) +
                ", teamId=" + (team != null ? team.getId() : null) +
                ", category=" + (category != null ? category : null) +
                ", content='" + content + '\'' +
                ", rating=" + rating +
                ", viewsCount=" + viewsCount +
                ", likesCount=" + likesCount +
                ", isActive=" + isActive +
                ", createdAt=" + createdAt +
                ", updatedAt=" + updatedAt +
                ", reviewTagsCount=" + (reviewTags != null ? reviewTags.size() : 0) +
                ", reviewMediaCount=" + (reviewMedia != null ? reviewMedia.size() : 0) +
                ", reviewLikesCount=" + (reviewLikes != null ? reviewLikes.size() : 0) +
                '}';
    }

}
