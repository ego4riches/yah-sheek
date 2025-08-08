package com.ego.yahsheek.common.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 경로
                .allowedOrigins("http://localhost:5173")
                .allowedMethods("*") // GET, POST, PUT 등
                .allowedHeaders("*")
                .allowCredentials(true);
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        // favicon.ico 요청을 빈 리소스로 처리하거나 무시
        registry.addResourceHandler("/favicon.ico")
                .addResourceLocations("classpath:/static/") // 존재하지 않더라도 무시
                .resourceChain(false);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // favicon.ico 요청에 대해 404가 아닌 빈 응답 처리
        registry.addViewController("/favicon.ico").setStatusCode(org.springframework.http.HttpStatus.NO_CONTENT);
    }
}