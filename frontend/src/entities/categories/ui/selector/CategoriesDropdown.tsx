import { CategoriesDropdownBox, type CategoriesDropdownT, useCategoriesQuery } from "@/entities";
import { CategoryDropdownItem } from "@/entities/categories/ui/selector/CategoryDropdownItem";

import { AsyncBoundary, Portal } from "@/shared";
import type { AxiosError } from "axios";

export const CategoriesDropdown = ({ onCategorySelect, isOpen, style }: CategoriesDropdownT) => {
    const { data, status, error } = useCategoriesQuery();

    return (
            <Portal>
                <CategoriesDropdownBox style={style || { display: 'none' }} isOpen={isOpen}>
                    <AsyncBoundary
                            data={data}
                            status={status}
                            errorCode={(error as AxiosError)?.response?.status}
                    >
                        {(categories) =>
                                categories.map(({ id, categoryKey, categoryName }) =>
                                        <CategoryDropdownItem
                                                key={id}
                                                id={id}
                                                name={categoryName}
                                                onClick={() => onCategorySelect(id, categoryKey, categoryName)}
                                        />)}
                    </AsyncBoundary>
                </CategoriesDropdownBox>
            </Portal>
    );
};