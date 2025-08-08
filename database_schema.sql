-- 야구장 리뷰 플랫폼 데이터베이스 스키마
-- PostgreSQL 기준

-- 1. 사용자 테이블
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    nickname VARCHAR(50) NOT NULL,
    profile_image_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. 구단 테이블
CREATE TABLE teams (
    id BIGSERIAL PRIMARY KEY,
    team_key VARCHAR(50) UNIQUE NOT NULL,
    team_name VARCHAR(100) NOT NULL,
    ball_park VARCHAR(100) NOT NULL,
    logo_url VARCHAR(500),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 3. 카테고리 테이블
CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    category_key VARCHAR(50) UNIQUE NOT NULL,
    category_name VARCHAR(100) NOT NULL,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. 리뷰 테이블
CREATE TABLE reviews (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    team_id BIGINT NOT NULL REFERENCES teams(id) ON DELETE CASCADE,
    category_id BIGINT NOT NULL REFERENCES categories(id) ON DELETE RESTRICT,
    content TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    views_count INTEGER DEFAULT 0,
    likes_count INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. 리뷰 태그 테이블
CREATE TABLE review_tags (
    id BIGSERIAL PRIMARY KEY,
    review_id BIGINT NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    tag_name VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(review_id, tag_name)
);

-- 6. 리뷰 미디어 테이블
CREATE TABLE review_media (
    id BIGSERIAL PRIMARY KEY,
    review_id BIGINT NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    media_type VARCHAR(20) NOT NULL CHECK (media_type IN ('IMAGE', 'VIDEO')),
    media_url VARCHAR(500) NOT NULL,
    thumbnail_url VARCHAR(500),
    file_size BIGINT,
    mime_type VARCHAR(100),
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. 리뷰 좋아요 테이블
CREATE TABLE review_likes (
    id BIGSERIAL PRIMARY KEY,
    review_id BIGINT NOT NULL REFERENCES reviews(id) ON DELETE CASCADE,
    user_id BIGINT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(review_id, user_id)
);

-- 인덱스 생성
CREATE INDEX idx_reviews_user_id ON reviews(user_id);
CREATE INDEX idx_reviews_team_id ON reviews(team_id);
CREATE INDEX idx_reviews_category_id ON reviews(category_id);
CREATE INDEX idx_reviews_created_at ON reviews(created_at DESC);
CREATE INDEX idx_reviews_rating ON reviews(rating);
CREATE INDEX idx_reviews_views_count ON reviews(views_count DESC);
CREATE INDEX idx_reviews_likes_count ON reviews(likes_count DESC);

CREATE INDEX idx_review_tags_review_id ON review_tags(review_id);
CREATE INDEX idx_review_tags_tag_name ON review_tags(tag_name);

CREATE INDEX idx_review_media_review_id ON review_media(review_id);
CREATE INDEX idx_review_media_order_index ON review_media(order_index);

CREATE INDEX idx_review_likes_review_id ON review_likes(review_id);
CREATE INDEX idx_review_likes_user_id ON review_likes(user_id);

-- 업데이트 트리거 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 업데이트 트리거 생성
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON teams
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON reviews
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- 좋아요 카운트 업데이트 트리거 함수
CREATE OR REPLACE FUNCTION update_review_likes_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE reviews SET likes_count = likes_count + 1 WHERE id = NEW.review_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE reviews SET likes_count = likes_count - 1 WHERE id = OLD.review_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ language 'plpgsql';

-- 좋아요 카운트 트리거 생성
CREATE TRIGGER update_review_likes_count_trigger
    AFTER INSERT OR DELETE ON review_likes
    FOR EACH ROW EXECUTE FUNCTION update_review_likes_count();

-- 초기 데이터 삽입
-- 구단 데이터
INSERT INTO teams (team_key, team_name, ball_park) VALUES
('kia-tigers', '기아 타이거즈', '광주 챔피언스 필드'),
('doosan-bears', '두산 베어스', '서울 잠실 야구장'),
('lotte-giants', '롯데 자이언츠', '부산 사직 야구장'),
('samsung-lions', '삼성 라이온즈', '대구 라이온즈 파크'),
('ssg-landers', 'SSG 랜더스', '인천 랜더스 필드'),
('nc-dinos', 'NC 다이노스', '창원 NC 파크'),
('lg-twins', 'LG 트윈스', '서울 잠실 야구장'),
('kiwoom-heroes', '키움 히어로즈', '고척 스카이돔'),
('kt-wiz', 'KT 위즈', '수원 KT 위즈 파크'),
('hanhwa-eagles', '한화 이글스', '대전 한화생명 볼 파크');

-- 카테고리 데이터
INSERT INTO categories (category_key, category_name, display_order) VALUES
('food', '푸드', 1),
('snack', '스낵', 2),
('drink', '드링크', 3),
('alcohol', '알콜', 4);
