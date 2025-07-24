import {DrawerItemBox, type DrawerItemP} from "@/shared";

export const DrawerItem = ({path, label, active, onClick}: DrawerItemP) =>
        <DrawerItemBox key={path} to={path} active={active} onClick={onClick}>
            {label}
        </DrawerItemBox>