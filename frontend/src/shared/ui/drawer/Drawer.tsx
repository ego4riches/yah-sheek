import {DrawerBox, DrawerItem, drawerMenuItems, DrawerToggle, useDrawerStore} from "@/shared";
import {useLocation} from "react-router-dom";

export const Drawer = () => {
    const location = useLocation();
    const {isDrawerOpen, setDrawerOpen} = useDrawerStore();

    const isActive = (path: string) => location.pathname === path;

    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    return (
            <div onMouseEnter={openDrawer} onMouseLeave={closeDrawer}>
                <DrawerToggle>☰</DrawerToggle>
                <DrawerBox open={isDrawerOpen}>
                    {drawerMenuItems.map(({label, path}) => (
                            <DrawerItem path={path} label={label} active={isActive(path)} onClick={closeDrawer}/>
                    ))}
                </DrawerBox>
            </div>
    );
};