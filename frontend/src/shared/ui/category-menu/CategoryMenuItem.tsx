import {CategoryMenuItemBox, type CategoryMenuItemT} from "@/shared";

export const CategoryMenuItem = ({label}: CategoryMenuItemT) => {
    return (
            <CategoryMenuItemBox>
                {label}
            </CategoryMenuItemBox>
    );
};