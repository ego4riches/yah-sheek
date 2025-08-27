import { CategoriesSelectorBox, DEFAULT_SELECTOR_CATEGORY, getDropdownStyle, useCategoriesDropdownStore, useCategoriesSelectorStore } from "@/entities";
import { CategoriesDropdown } from "@/entities/categories/ui/selector/CategoriesDropdown";
import { useClickOutside } from "@/shared";
import { useRef } from "react";

export const CategoriesSelector = () => {
    const { category, setCategory, isOpen, setIsOpen } = useCategoriesSelectorStore();
    const { style, setStyle } = useCategoriesDropdownStore();
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
                <CategoriesSelectorBox ref={buttonRef} isOpen={isOpen} onClick={handleCategoryToggle}>
                    {category.categoryName || DEFAULT_SELECTOR_CATEGORY}
                </CategoriesSelectorBox>
                <CategoriesDropdown style={style} isOpen={isOpen} onCategorySelect={onCategorySelect}/>
            </div>

    );
};