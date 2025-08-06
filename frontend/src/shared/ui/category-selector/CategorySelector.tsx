import {
    CategoryDropdown,
    CategorySelectorButtonBox,
    CategorySelectorWrapper,
    DEFAULT_CATEGORY,
    getDropdownStyle,
    useDropdownStore
} from "@/shared";
import {useClickOutside} from "@/shared/lib/hooks/use-click-outside.ts";
import {useCategorySelectorStore} from "@/shared/ui/category-selector/category-selector.store.ts";
import {useRef} from "react";

export const CategorySelector = () => {
    const {category, setCategory, isOpen, setIsOpen} = useCategorySelectorStore();
    const {style, setStyle} = useDropdownStore();
    const buttonRef = useRef<HTMLButtonElement>(null);

    const handleCategoryToggle = () => {
        // Dropdown 포탈 스타일 설정 (위치 업데이트)
        if (buttonRef.current) {
            const style = getDropdownStyle(buttonRef.current);
            setStyle(style);
        }
        setIsOpen(!isOpen);
    };

    const handleCategorySelect = (selectedCategory: string) => {
        setCategory(selectedCategory);
        setIsOpen(false);
        setStyle(null);
    };

    const categoryRef = useClickOutside(() => {
        if (isOpen) {
            setIsOpen(!isOpen);
        }
    }, [isOpen]);

    return (
            <CategorySelectorWrapper ref={categoryRef}>
                <CategorySelectorButtonBox
                        ref={buttonRef}
                        isOpen={isOpen}
                        onClick={handleCategoryToggle}>
                    {category || DEFAULT_CATEGORY}
                </CategorySelectorButtonBox>
                <CategoryDropdown
                        style={style}
                        isOpen={isOpen}
                        onCategorySelect={handleCategorySelect}
                />
            </CategorySelectorWrapper>
    );
}; 