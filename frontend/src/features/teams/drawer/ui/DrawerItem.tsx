import {DrawerItemBox, type DrawerItemT} from "@/features";


export const DrawerItem = ({path, label, active, onClick}: DrawerItemT) =>
        <DrawerItemBox key={path} to={path} active={active} onClick={onClick}>
            {label}
        </DrawerItemBox>