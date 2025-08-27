import { CategoryMenuItemBox, type CategoryMenuItemT } from "@/entities";

export const CategoryMenuItem = ({ label, isSelected, onClick }: CategoryMenuItemT) => {
    return (
            <CategoryMenuItemBox isSelected={isSelected} onClick={onClick}>
                {label}
            </CategoryMenuItemBox>
    );
};