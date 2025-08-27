package com.ego.yahsheek.common.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ExceptionCode {

    // ----------------------------------
    // 400 Bad Request 관련 예외
    // ----------------------------------
    INVALID_INPUT(HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),
    ALREADY_LIKED(HttpStatus.BAD_REQUEST, "이미 좋아요를 누른 사용자입니다."),
    LIKE_NOT_FOUND(HttpStatus.BAD_REQUEST, "좋아요 기록이 존재하지 않습니다."),

    // ----------------------------------
    // 404 Not Found 관련 예외
    // ----------------------------------
    ENTITY_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 데이터입니다."),

    // ----------------------------------
    // 500 Internal Server Error 관련 예외
    // ----------------------------------
    INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 오류입니다."),
    DATABASE_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "데이터 베이스 서버 오류입니다."),
    SUPABASE_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "🔒 유료 회원한테만 보이는 Response입니다.");

    private final HttpStatus status;
    private final String message;

    ExceptionCode(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }
}