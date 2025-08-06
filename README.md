## ⚾️ Yahsheek — 야구장 먹거리 커뮤니티

> **ego 팀의 사이드 프로젝트입니다.**
> ##### 실패 없는 도전을 위하여, 야구장 먹거리 후기를 공유하는 서비스입니다.

---

## 🛠️ 기술 스택

| 영역         | 기술                                                   |
|------------|------------------------------------------------------|
| Backend    | Java 21, Spring Boot 3.5.4, JPA, QueryDSL            |
| Frontend   | React, TypeScript, Vite, Axios                       |
| DB         | supabase - PostgreSQL (개발용)                          |
| API 문서     | SpringDoc OpenAPI (Swagger UI)                       |
| Build Tool | Backend: Gradle<br/>Frontend: yarn                   |
| Logging    | Backend: SLF4J + Logback<br/>Frontend: 브라우저 콘솔 기반 로깅 |

---

## 📁 프로젝트 구조

```plaintext
yah-sheek/
├── backend/                        # Spring Boot 백엔드
│   └── src/
│       └── main/
│           └── java/com.ego.yahsheek/
│               ├── domain          # 도메인 서비스/비즈니스 로직
│               ├── entity          # JPA 엔티티
│               ├── types           # Enum, DTO 등 타입 정의
│               ├── utils           # 공통 유틸 클래스
│               └── global          # 전역 설정 (Exception, Config 등)
│
├── frontend/                       # React 프론트엔드
│   └── src/
│       ├── components/
│       ├── pages/
│       └── ...
├── .env.exam                       # DB 접속정보 주입 (복사하여 .env 생성 필요)
├── .gitignore
├── README.md
└── ...
```

---

## 🔍 주요 기능

### 1. 리뷰 작성 시스템

- **카테고리 선택**: 음식 종류별 분류
- **평점 시스템**: 5점 만점 별점 평가
- **태그 관리**: 음식 특징 태그 추가
- **이미지 업로드**: 음식 사진 첨부
- **텍스트 리뷰**: 상세한 리뷰 내용 작성

### 2. 구단별 게시판

- 각 구단의 야구장별 독립적인 게시판
- 구단별 맞춤 디자인 및 정보 제공
- 야구장 정보 표시

### 3. 사용자 인증

- SNS 로그인 연동 (구현 예정)
- 로그인 상태 관리
- 권한별 기능 제한

### 4. 반응형 디자인

- 모바일/데스크톱 최적화
- 사용자 친화적 UI/UX

---

## 🚀 로컬 실행 방법

### 1. 의존성 설치

#### 1-1. 프론트엔드

```bash
cd frontend
yarn install                        # 의존성 최초 설치 (처음 한 번만)
cd ..
```

#### 1-2. 백엔드

> 백엔드 의존성은 Gradle이 자동 관리합니다.

---

### 2. 로컬 서버 실행 방법

#### 2-1. 프론트엔드

```bash
yarn start:frontend
```

#### 2-2. 백엔드

> 보안상 DB 접속 정보는 포함되어 있지 않습니다.<br>
> 루트 경로의 .env.exam 파일을 .env로 복사한 뒤, 필요한 DB 접속 정보를 입력해 주세요.<br>
> 개발자의 경우 공유받은 .env 파일을 루트 경로에 복사한 뒤 실행해 주세요.

```bash
yarn start:backend
```

#### 2-3. 프론트엔드와 백엔드 동시에 실행

```bash
yarn start:all
```

> .env 파일 생성 후 정상 실행 가능합니다.

---

## 📈 향후 계획

### 단기 목표

- [ ] SNS 로그인 구현 (Google, Kakao, Naver)
- [ ] 리뷰 목록 및 상세 페이지 구현
- [ ] 좋아요 기능 구현
- [ ] 댓글 시스템 추가

### 중기 목표

- [ ] 검색 및 필터링 기능
- [ ] 사용자 프로필 페이지
- [ ] 리뷰 통계 및 분석
- [ ] 모바일 앱 개발

### 장기 목표

- [ ] AI 기반 음식 추천 시스템
- [ ] 실시간 알림 기능
- [ ] 소셜 기능 강화
- [ ] 야구장 정보 API 연동

---

## 📚 API 문서

서버 실행 후 아래 주소에서 Swagger 문서를 확인할 수 있습니다:

[Swagger Link](http://localhost:8080/swagger-ui.html)

---

## 🙋 팀 정보

* 팀명: `ego4riches (ego for riches)`
* 프로젝트명: `yah-sheek`
* 백엔드 개발자: `nature`
* 프론트엔드 개발자: `thecheeziest`

---