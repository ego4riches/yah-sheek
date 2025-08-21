import { useCategoriesQuery } from "@/entities";
import { CategoryDropdownBox, type CategorySelectorDropdownT } from "@/features";
import { CategoryDropdownItem } from "@/features/categories/selector/ui/CategoryDropdownItem";
import { AsyncBoundary, Portal } from "@/shared";
import type { AxiosError } from "axios";

export const CategoryDropdown = ({ onCategorySelect, isOpen, style }: CategorySelectorDropdownT) => {
    const { data, status, error } = useCategoriesQuery();

    return (
            <Portal>
                <CategoryDropdownBox style={style || { display: 'none' }} isOpen={isOpen}>
                    <AsyncBoundary
                            data={data}
                            status={status}
                            errorCode={(error as AxiosError)?.response?.status}
                    >
                        {(categories) =>
                                categories.map(({ id, categoryKey, categoryName }) =>
                                        <CategoryDropdownItem
                                                id={id}
                                                name={categoryName}
                                                onClick={() => onCategorySelect(id, categoryKey, categoryName)}
                                        />)}
                    </AsyncBoundary>
                </CategoryDropdownBox>
            </Portal>
    );
};