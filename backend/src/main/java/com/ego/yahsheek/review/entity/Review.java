package com.ego.yahsheek.review.entity;

import com.ego.yahsheek.category.entity.Category;
import com.ego.yahsheek.common.exception.BusinessException;
import com.ego.yahsheek.common.exception.ExceptionCode;
import com.ego.yahsheek.team.entity.Team;
import com.ego.yahsheek.user.entity.User;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

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

    @Column(name = "likes_count")
    private int likesCount = 0;

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

    public void updateReview(String content, Integer rating, Category category) {
        this.content = content;
        this.rating = rating;
        this.category = category;
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

    public void addReviewTag(ReviewTag reviewTag) {
        reviewTags.add(reviewTag);
        reviewTag.setReview(this);
    }

    public void removeReviewTag(ReviewTag reviewTag) {
        reviewTags.remove(reviewTag);
        reviewTag.setReview(null);
    }

    public void addReviewMedia(ReviewMedia reviewMedia) {
        this.reviewMedia.add(reviewMedia);
        reviewMedia.setReview(this);
    }

    public void removeReviewMedia(ReviewMedia reviewMedia) {
        this.reviewMedia.remove(reviewMedia);
        reviewMedia.setReview(null);
    }

    /** 유저가 이미 좋아요 했는지 컬렉션에서 검사 */
    public boolean hasLikeByUserId(Long userId) {
        return reviewLikes.stream()
                .anyMatch(rl -> rl.getUser() != null && Objects.equals(rl.getUser().getId(), userId));
    }

    /** 좋아요 추가(중복 방지 + 양방향 세팅) */
    public void addLike(User user) {
        if (user == null) throw new IllegalArgumentException("user is null");
        if (hasLikeByUserId(user.getId())) return; // 이중 방어
        ReviewLike rl = ReviewLike.of(this, user);
        this.reviewLikes.add(rl);
    }

    /** 유저의 좋아요 제거(없으면 예외) */
    public void removeLikeByUserId(Long userId) {
        ReviewLike target = reviewLikes.stream()
                .filter(rl -> rl.getUser() != null && Objects.equals(rl.getUser().getId(), userId))
                .findFirst()
                .orElseThrow(() -> new BusinessException(ExceptionCode.LIKE_NOT_FOUND));

        reviewLikes.remove(target);   // orphanRemoval=true → delete
        target.detach();              // 양방향 참조 끊기(안전)
    }

    /** likesCount를 컬렉션 기반으로 동기화 */
    public void refreshLikesCount() {
        this.likesCount = reviewLikes != null ? reviewLikes.size() : 0;
    }

    // Review.java
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
