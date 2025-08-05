import { type InputChangeEventT, type KeyboardEventT, useTagManagerStore, useTagSuggestionsStore } from "@/shared";
import { type RefObject, useEffect } from "react";

export const useTagInput = (tagInputRef: RefObject<HTMLInputElement | null>) => {
    const {
        addTag,
        tag, setTag,
        isExpanded: tagIsExpanded,
        resetTag,
    } = useTagManagerStore();

    const {
        suggestions,
        selectedIndex, setSelectedIndex,
        reset: resetSuggestions,
    } = useTagSuggestionsStore();

    const tagInputChange = (e: InputChangeEventT) => {
        setTag(e.target.value);
    };

    const tagInputKeydown = (e: KeyboardEventT) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            // 태그 선택했을 경우
            if (selectedIndex >= 0 && suggestions[selectedIndex]) {
                addTag(suggestions[selectedIndex].name);

                // 직접 입력할 경우
            } else if (tag.trim()) {
                addTag(tag.trim());
            }
            resetSuggestions();
            resetTag();

        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const newIndex = selectedIndex < suggestions.length - 1
                ? selectedIndex + 1
                : selectedIndex;
            setSelectedIndex(newIndex);

        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const newIndex = selectedIndex > 0
                ? selectedIndex - 1
                : -1;
            setSelectedIndex(newIndex);

        } else if (e.key === 'Escape') {
            resetSuggestions();
            resetTag();
        }
    };

    useEffect(() => {
        // 열린 태그 포커스
        if (tagIsExpanded && tagInputRef.current) {
            tagInputRef.current.focus();
        }
    }, [tagIsExpanded]);

    return {
        tagInputChange,
        tagInputKeydown,
    }
}