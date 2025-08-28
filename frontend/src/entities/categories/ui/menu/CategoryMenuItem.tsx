import { CategoryMenuItemBox, type CategoryMenuItemT, useTeamStore } from "@/entities";

export const CategoryMenuItem = ({ label, isSelected, onClick }: CategoryMenuItemT) => {
    const { team } = useTeamStore();

    return (
            <CategoryMenuItemBox isSelected={isSelected} teamKey={team?.teamKey} onClick={onClick}>
                {label}
            </CategoryMenuItemBox>
    );
};