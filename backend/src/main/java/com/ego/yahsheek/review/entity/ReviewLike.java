package com.ego.yahsheek.review.entity;

import com.ego.yahsheek.user.entity.User;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Entity
@Table(name = "review_likes")
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EntityListeners(AuditingEntityListener.class)
public class ReviewLike {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "review_id", nullable = false)
    private Review review;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @CreatedDate
    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Builder
    public ReviewLike(Review review, User user) {
        this.review = review;
        this.user = user;
    }

    protected ReviewLike() {}

    public static ReviewLike of(Review review, User user) {
        if (review == null || user == null) throw new IllegalArgumentException("null arg");
        return new ReviewLike(review, user);
    }

    public void detach() {
        this.review = null;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ReviewLike)) return false;
        ReviewLike that = (ReviewLike) o;
        return id != null && id.equals(that.id);
    }
    @Override
    public int hashCode() { return 31; }

    @Override
    public String toString() {
        return "ReviewLike{" +
                "id=" + id +
                ", reviewId=" + (review != null ? review.getId() : null) +
                ", userId=" + (user != null ? user.getId() : null) +
                ", createdAt=" + createdAt +
                '}';
    }
}
