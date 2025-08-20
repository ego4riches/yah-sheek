import { CategoryMenuItemBox, type CategoryMenuItemT } from "@/features";

export const CategoryMenuItem = ({ label, isSelected, onClick }: CategoryMenuItemT) => {
    return (
            <CategoryMenuItemBox isSelected={isSelected} onClick={onClick}>
                {label}
            </CategoryMenuItemBox>
    );
};