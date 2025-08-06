package com.ego.yahsheek.global.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum ExceptionCode {

    // ----------------------------------
    // 400 Bad Request 관련 예외
    // ----------------------------------
    INVALID_INPUT(HttpStatus.BAD_REQUEST, "잘못된 요청입니다."),

    // ----------------------------------
    // 404 Not Found 관련 예외
    // ----------------------------------
    ENTITY_NOT_FOUND(HttpStatus.NOT_FOUND, "존재하지 않는 데이터입니다."),

    // ----------------------------------
    // 500 Internal Server Error 관련 예외
    // ----------------------------------
    INTERNAL_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "서버 내부 오류입니다."),
    DATABASE_ERROR(HttpStatus.INTERNAL_SERVER_ERROR, "데이터 베이스 서버 오류입니다.");

    private final HttpStatus status;
    private final String message;

    ExceptionCode(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }
}