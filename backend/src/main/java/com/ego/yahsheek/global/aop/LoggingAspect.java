package com.ego.yahsheek.global.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;

@Slf4j
@Aspect
@Component
public class LoggingAspect {

    // 서비스 계층의 모든 public 메서드 로깅
    @Pointcut("execution(public * com.ego.yahsheek.domain..*Service.*(..))")
    public void servicePublicMethods() {}

    @Before("servicePublicMethods()")
    public void logBefore(JoinPoint joinPoint) {
        log.info("➡️ [START] {}.{}()",
                joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName());
    }

    @AfterReturning(pointcut = "servicePublicMethods()", returning = "result")
    public void logAfter(JoinPoint joinPoint, Object result) {
        log.info("✅ [END] {}.{}() RETURN={}",
                joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(),
                result);
    }

    @AfterThrowing(pointcut = "servicePublicMethods()", throwing = "ex")
    public void logException(JoinPoint joinPoint, Throwable ex) {
        log.error("💥 [ERROR] {}.{}() EXCEPTION={}",
                joinPoint.getSignature().getDeclaringTypeName(),
                joinPoint.getSignature().getName(),
                ex.getMessage());
    }
}