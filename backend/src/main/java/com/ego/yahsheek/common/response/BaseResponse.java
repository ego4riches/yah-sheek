package com.ego.yahsheek.common.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BaseResponse<T> {
    private int status;
    private String message;
    private T data;

    public static <T> BaseResponse<T> ok(T data) {
        return new BaseResponse<>(200, "success", data);
    }

    public static <T> BaseResponse<T> of(int status, String message, T data) {
        return new BaseResponse<>(status, message, data);
    }
}