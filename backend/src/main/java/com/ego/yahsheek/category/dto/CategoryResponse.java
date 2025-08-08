package com.ego.yahsheek.category.dto;

import com.ego.yahsheek.category.entity.Category;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CategoryResponse {
    private Long id;
    private String categoryKey;
    private String categoryName;
    private Integer displayOrder;

    public static CategoryResponse from(Category category) {
        return new CategoryResponse(
                category.getId(),
                category.getCategoryKey(),
                category.getCategoryName(),
                category.getDisplayOrder()
        );
    }
}
