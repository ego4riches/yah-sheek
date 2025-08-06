package com.ego.yahsheek.domain.test;

import com.ego.yahsheek.global.exception.BusinessException;
import com.ego.yahsheek.global.exception.ExceptionCode;
import com.ego.yahsheek.global.response.BaseResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/exam")
public class TestController {

    @GetMapping("/ok")
    public BaseResponse<String> ok() {
        return BaseResponse.ok("hello!");
    }

    @GetMapping("/nok")
    public BaseResponse<?> nok() {
        throw new BusinessException(ExceptionCode.INTERNAL_ERROR);
    }
}