export const getElementPosition = (element: HTMLElement) => {
    const rect = element.getBoundingClientRect();

    return {
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height,
    };
};

export const getDropdownStyle = (element: HTMLElement) => {
    const { top, left, width } = getElementPosition(element);
    return {
        position: 'absolute' as const,
        top: top + 5,
        left,
        width,
        zIndex: 9999,
    };
};