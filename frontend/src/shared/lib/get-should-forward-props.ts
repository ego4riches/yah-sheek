export const getShouldForwardProps = (blockedProps: string[]) =>
    (prop: string) => !blockedProps.includes(prop);