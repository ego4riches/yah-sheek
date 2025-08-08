package com.ego.yahsheek.review.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QReview is a Querydsl query type for Review
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QReview extends EntityPathBase<Review> {

    private static final long serialVersionUID = -245080969L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QReview review = new QReview("review");

    public final com.ego.yahsheek.category.entity.QCategory category;

    public final StringPath content = createString("content");

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final BooleanPath isActive = createBoolean("isActive");

    public final NumberPath<Integer> likesCount = createNumber("likesCount", Integer.class);

    public final NumberPath<Integer> rating = createNumber("rating", Integer.class);

    public final ListPath<ReviewLike, QReviewLike> reviewLikes = this.<ReviewLike, QReviewLike>createList("reviewLikes", ReviewLike.class, QReviewLike.class, PathInits.DIRECT2);

    public final ListPath<ReviewMedia, QReviewMedia> reviewMedia = this.<ReviewMedia, QReviewMedia>createList("reviewMedia", ReviewMedia.class, QReviewMedia.class, PathInits.DIRECT2);

    public final ListPath<ReviewTag, QReviewTag> reviewTags = this.<ReviewTag, QReviewTag>createList("reviewTags", ReviewTag.class, QReviewTag.class, PathInits.DIRECT2);

    public final com.ego.yahsheek.team.entity.QTeam team;

    public final DateTimePath<java.time.LocalDateTime> updatedAt = createDateTime("updatedAt", java.time.LocalDateTime.class);

    public final com.ego.yahsheek.user.entity.QUser user;

    public final NumberPath<Integer> viewsCount = createNumber("viewsCount", Integer.class);

    public QReview(String variable) {
        this(Review.class, forVariable(variable), INITS);
    }

    public QReview(Path<? extends Review> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QReview(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QReview(PathMetadata metadata, PathInits inits) {
        this(Review.class, metadata, inits);
    }

    public QReview(Class<? extends Review> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.category = inits.isInitialized("category") ? new com.ego.yahsheek.category.entity.QCategory(forProperty("category")) : null;
        this.team = inits.isInitialized("team") ? new com.ego.yahsheek.team.entity.QTeam(forProperty("team")) : null;
        this.user = inits.isInitialized("user") ? new com.ego.yahsheek.user.entity.QUser(forProperty("user")) : null;
    }

}

