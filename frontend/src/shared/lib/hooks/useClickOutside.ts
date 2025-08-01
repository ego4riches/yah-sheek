import { useEffect, useRef } from 'react';

export const useClickOutside = (callback: () => void, dependencies: any[] = []) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                // 클릭된 요소가 태그 입력창이나 제안 목록인지 확인
                // const target = event.target as HTMLElement;
                // const isTagInput = target.closest('[data-tag-input]');
                // const isTagSuggestion = target.closest('[data-tag-suggestion]');
                // const isTagAddButton = target.closest('[data-tag-add-button]');

                // 태그 관련 요소가 아닌 경우에만 콜백 실행
                // if (!isTagInput && !isTagSuggestion && !isTagAddButton) {
                callback();
                // }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [callback, ...dependencies]);

    return ref;
}; 