package com.ego.yahsheek.global.filter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Slf4j
@Component
public class LoggingFilter extends OncePerRequestFilter {

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain)
            throws ServletException, IOException {

        String method = request.getMethod();
        String uri = request.getRequestURI();
        String query = request.getQueryString();

        log.info("📥 [REQUEST] {} {}{}", method, uri, query != null ? "?" + query : "");

        filterChain.doFilter(request, response);

        log.info("📤 [RESPONSE] {} {}", method, uri);
    }
}