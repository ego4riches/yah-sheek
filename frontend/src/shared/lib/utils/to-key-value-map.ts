import type { EntityArrayT } from "@/shared";

export const toKeyValueMap = (arr: EntityArrayT) => {
    if (arr.length === 0) return {};

    const [firstKey, secondKey] = Object.keys(arr[0]);

    if (!firstKey || !secondKey) {
        throw new Error('객체에 최소 2개의 프로퍼티가 필요합니다.');
    }

    return Object.fromEntries(
        arr.map(item => [item[firstKey], item[secondKey]]),
    );
};