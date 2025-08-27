package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.dto.ReviewSearchRequestDto;
import com.ego.yahsheek.review.entity.QReview;
import com.ego.yahsheek.review.entity.Review;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import java.util.List;

import static com.ego.yahsheek.review.entity.QReview.review;

@Repository
@RequiredArgsConstructor
public class ReviewRepositoryImpl implements ReviewRepositoryCustom {

    private final JPAQueryFactory factory;
    private final EntityManager em;


    @Override
    public Long getNextSeq() {
        return (Long) em.createNativeQuery("SELECT nextval('seq_review')").getSingleResult();
    }

    @Override
    public List<Review> findReviews(ReviewSearchRequestDto request, Long userId) {
        BooleanBuilder where = new BooleanBuilder().and(review.isActive.isTrue());

        if (request.getTeamId() != null) where.and(review.team.id.eq(request.getTeamId()));
        if (request.getCategoryId() != null) where.and(review.category.id.eq(request.getCategoryId()));
        if (StringUtils.hasText(request.getSearchKeyword())) where.and(review.content.contains(request.getSearchKeyword()));
        if (request.isWithMedia()) where.and(review.reviewMedia.isNotEmpty());
        if (request.isMyReview()) where.and(review.user.id.eq(userId));

        JPAQuery<Review> query = factory.selectFrom(review).where(where);

        switch (request.getSort()) {
            case POPULAR -> query.orderBy(review.likesCount.desc(), review.id.desc());
            case VIEWS   -> query.orderBy(review.viewsCount.desc(), review.id.desc());
            case LATEST  -> query.orderBy(review.createdAt.desc(), review.id.desc());
            default      -> query.orderBy(review.id.desc());
        }

        return query.offset(request.getOffset())
                .limit(request.getSize())
                .fetch();
    }

}
