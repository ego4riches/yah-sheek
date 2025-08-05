import { useTagManagerStore, useTagSuggestionsStore } from "@/shared";
import { useEffect } from "react";

export const useTagVisibility = () => {
    const { isExpanded, setIsExpanded } = useTagManagerStore();

    const { reset: resetSuggestions } = useTagSuggestionsStore();

    const tagToggle = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        // 태그 닫혔을 경우 제안 태그 리셋
        if (!isExpanded) {
            resetSuggestions();
        }
    }, [isExpanded]);

    return {
        tagToggle,
    }
}