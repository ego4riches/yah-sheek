import {
    CategoryDropdownBox,
    CategoryOptionBox,
    type CategorySelectorDropdownT,
    Portal,
    REVIEW_CATEGORIES
} from "@/shared";

export const CategoryDropdown = ({isOpen, onCategorySelect, style}: CategorySelectorDropdownT) => {
    if (!style) return null;

    return (
            <Portal>
                <CategoryDropdownBox style={style} isOpen={isOpen}>
                    {REVIEW_CATEGORIES.map((item) => (
                            <CategoryOptionBox
                                    key={item.key}
                                    onClick={() => onCategorySelect(item.label)}
                            >
                                {item.label}
                            </CategoryOptionBox>
                    ))}
                </CategoryDropdownBox>
            </Portal>
    );
};