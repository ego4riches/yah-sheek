import { CategoryMenuItemBox, type CategoryMenuItemT, useTeamStore } from "@/entities";
import { Link } from "react-router-dom";

export const CategoryMenuItem = ({ label, isSelected, onClick }: CategoryMenuItemT) => {
    const { team } = useTeamStore();

    return (
            <Link to={`/${team?.teamKey ?? ''}`}>
                <CategoryMenuItemBox isSelected={isSelected} teamKey={team?.teamKey} onClick={onClick}>
                    {label}
                </CategoryMenuItemBox>
            </Link>
    );
};