import { TeamsDrawerItemBox, type TeamsDrawerItemT } from "@/entities";

export const TeamsDrawerItem = ({ path, label, active, onClick }: TeamsDrawerItemT) =>
        <TeamsDrawerItemBox key={path} to={path} active={active} onClick={onClick}>
            {label}
        </TeamsDrawerItemBox>