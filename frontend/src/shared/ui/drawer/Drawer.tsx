import {DrawerBox, DrawerItem, drawerMenuItems, DrawerToggle, DrawerWrapper, useDrawerStore} from "@/shared";
import {useLocation} from "react-router-dom";

export const Drawer = () => {
    const location = useLocation();
    const {isOpen, setIsOpen} = useDrawerStore();

    const isActive = (path: string) => location.pathname === path;

    const openDrawer = () => setIsOpen(true);
    const closeDrawer = () => setIsOpen(false);

    return (
            <DrawerWrapper onMouseEnter={openDrawer} onMouseLeave={closeDrawer}>
                <DrawerToggle>☰</DrawerToggle>
                <DrawerBox open={isOpen}>
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