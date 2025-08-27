package com.ego.yahsheek.review.repository;

import com.ego.yahsheek.review.dto.ReviewSearchRequestDto;
import com.ego.yahsheek.review.entity.QReview;
import com.ego.yahsheek.review.entity.Review;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

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
        QReview review = QReview.review;

        JPAQuery<Review> query = factory.selectFrom(review);

        if (request.getTeamId() != null) {
            query.where(review.team.id.eq(request.getTeamId()));
        }
        if (request.getCategoryId() != null) {
            query.where(review.category.id.eq(request.getCategoryId()));
        }
        if (request.isWithMedia()) query.where(review.reviewMedia.isNotEmpty());
        if (request.isMyReview()) query.where(review.user.id.eq(userId));

        query.where(review.isActive.isTrue());

        switch (request.getSort()) {
            case POPULAR:
                query.orderBy(review.likesCount.desc(), review.id.desc());
                break;
            case VIEWS:
                query.orderBy(review.viewsCount.desc(), review.id.desc());
                break;
            case LATEST:
                query.orderBy(review.createdAt.desc(), review.id.desc());
            default:
                query.orderBy(review.id.desc());
                break;
        }

        return query
                .offset(request.getOffset())
                .limit(request.getSize())
                .fetch();
    }

}
