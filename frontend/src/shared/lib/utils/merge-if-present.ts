export const mergeIfPresent = <T extends object>(
    baseParams: T,
    extra: Record<string, unknown>
): T => {
    const isEmptyObject = (v: unknown) =>
        v && typeof v === 'object' && !Array.isArray(v) && Object.keys(v as object).length === 0;

    const isEmptyArray = (v: unknown) =>
        Array.isArray(v) && v.length === 0;

    const isPresent = (v: unknown) => {
        if (v === null || v === undefined) return false;
        if (typeof v === 'string' && v === '') return false;
        return !(isEmptyArray(v) || isEmptyObject(v));
    };

    const filtered = Object.fromEntries(
        Object.entries(extra).filter(([_, v]) => isPresent(v))
    );

    return {...baseParams, ...filtered} as T;
};