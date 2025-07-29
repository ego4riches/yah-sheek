import {DrawerItemBox, type DrawerItemT} from "@/shared";

export const DrawerItem = ({path, label, active, onClick}: DrawerItemT) =>
        <DrawerItemBox key={path} to={path} active={active} onClick={onClick}>
            {label}
        </DrawerItemBox>