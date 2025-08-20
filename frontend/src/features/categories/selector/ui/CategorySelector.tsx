import {CategorySelectorButtonBox, DEFAULT_CATEGORY, useCategorySelectorStore} from "@/features";
import {CategoryDropdown, getDropdownStyle, useCategoryDropdownStore, useClickOutside} from "@/shared";
import {useRef} from "react";

export const CategorySelector = () => {
    const {category, setCategory, isOpen, setIsOpen} = useCategorySelectorStore();
    const {style, setStyle} = useCategoryDropdownStore();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const categoryRef = useClickOutside(() => {
        if (isOpen) setIsOpen(!isOpen);
    }, [isOpen]);

    const handleCategoryToggle = () => {
        // Dropdown 포탈 스타일 설정 (위치 업데이트)
        if (buttonRef.current) {
            const style = getDropdownStyle(buttonRef.current);
            setStyle(style);
        }
        setIsOpen(!isOpen);
    };

    const onCategorySelect = (id: number, key: string, name: string) => {
        setCategory(id, key, name);
        setIsOpen(false);
        setStyle(null);
    }

    return (
            <div ref={categoryRef}>
                <CategorySelectorButtonBox ref={buttonRef} isOpen={isOpen} onClick={handleCategoryToggle}>
                    {category.categoryName || DEFAULT_CATEGORY}
                </CategorySelectorButtonBox>
                <CategoryDropdown style={style} isOpen={isOpen} onCategorySelect={onCategorySelect}/>
            </div>

    );
};