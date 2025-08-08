package com.ego.yahsheek.common.exception;

import jakarta.persistence.PersistenceException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public ResponseEntity<ErrorResponse> handleBusinessException(BusinessException e) {
        log.info("✅ [Checked Error] 예외 발생: {}", e.getMessage());

        ExceptionCode code = e.getCode();
        return ResponseEntity
                .status(code.getStatus())
                .body(ErrorResponse.of(code));
    }

    @ExceptionHandler({DataIntegrityViolationException.class, PersistenceException.class})
    public ResponseEntity<ErrorResponse> handleDatabaseExceptions(Exception e) {
        log.error("‼️[DB Error] 예외 발생: {}", e.getClass().getSimpleName(), e);

        return ResponseEntity
                .status(ExceptionCode.INTERNAL_ERROR.getStatus())
                .body(ErrorResponse.of(ExceptionCode.DATABASE_ERROR));
    }

    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<Void> handleNoResourceFoundException(NoResourceFoundException e) {
        log.info("✅ [No Content Error] 예외 발생: {}", e.getMessage());

        return ResponseEntity.noContent().build();
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGeneralException(Exception e) {
        log.error("❌ [UnChecked Error] 확인되지 않은 예외 발생: {}", e.getClass().getSimpleName(), e);

        return ResponseEntity
                .status(ExceptionCode.INTERNAL_ERROR.getStatus())
                .body(ErrorResponse.of(ExceptionCode.INTERNAL_ERROR));
    }
}