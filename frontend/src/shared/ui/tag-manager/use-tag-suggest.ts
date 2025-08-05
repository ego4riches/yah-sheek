import { SUGGESTED_TAGS, useTagManagerStore, useTagSuggestionsStore } from "@/shared";
import { useEffect } from "react";

export const useTagSuggest = () => {
    const { addTag, tag, resetTag } = useTagManagerStore();

    const { setSuggestions, setSelectedIndex, setIsExpanded, reset } = useTagSuggestionsStore();

    const selectedSuggestion = (suggestion: string) => {
        addTag(suggestion);
        resetTag();
        reset();
    }

    useEffect(() => {
        // 입력된 태그에게 제안할 태그 있을 경우
        if (tag.trim()) {
            const filtered = SUGGESTED_TAGS.filter(item =>
                item.name.toLowerCase().includes(tag.toLowerCase()),
            );
            setSuggestions(filtered);
            setIsExpanded(true);

        } else {
            setIsExpanded(false);
        }
    }, [tag, setSuggestions, setIsExpanded, setSelectedIndex]);

    return {
        selectedSuggestion,
    }
}