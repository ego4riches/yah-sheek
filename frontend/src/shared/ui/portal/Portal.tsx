import type {ChildrenT} from "@/shared";
import {createPortal} from "react-dom";

export const Portal = ({children}: ChildrenT) => {
    const portalRoot = document.getElementById('portal-root');
    if (!portalRoot) return null;

    return createPortal(children, portalRoot);
};