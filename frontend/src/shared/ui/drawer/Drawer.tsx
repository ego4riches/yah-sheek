import {DrawerBox, DrawerItem, drawerMenuItems, DrawerToggle, DrawerWrapper, useDrawerStore} from "@/shared";
import {useLocation} from "react-router-dom";

export const Drawer = () => {
    const location = useLocation();
    const {isDrawerOpen, setDrawerOpen} = useDrawerStore();

    const isActive = (path: string) => location.pathname === path;

    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    return (
            <DrawerWrapper onMouseEnter={openDrawer} onMouseLeave={closeDrawer}>
                <DrawerToggle>☰</DrawerToggle>
                <DrawerBox open={isDrawerOpen}>
                    {drawerMenuItems.map(({label, path}) => (
                            <DrawerItem
                                    key={path}
                                    path={path}
                                    label={label}
                                    active={isActive(path)}
                                    onClick={closeDrawer}
                            />
                    ))}
                </DrawerBox>
            </DrawerWrapper>
    );
};