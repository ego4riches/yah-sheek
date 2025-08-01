import { type ChangeEventT, type KeyboardEventT, useTagManagerStore, useTagSuggestionsStore } from "@/shared";
import { SUGGESTED_TAGS } from "@/shared/ui/review-composer/review-composer.store.ts";
import { type RefObject, useEffect } from "react";

export const useTagManager = (tagInputRef: RefObject<HTMLInputElement | null>) => {
    const { tag, setTag, isOpen: tagIsOpen, setIsOpen: setTagIsOpen, addTag } = useTagManagerStore();
    const {
        suggestions, setSuggestions, selectedIndex, setSelectedIndex, setIsOpen: setSuggestionsIsOpen,
    } = useTagSuggestionsStore();

    const resetTag = () => {
        setTagIsOpen(false);
        setTag('');
    }

    const resetSuggestions = () => {
        setSuggestionsIsOpen(false);
        setSelectedIndex(-1);
    }

    const tagToggle = () => {
        setTagIsOpen(!tagIsOpen);
        setTag('');
        resetSuggestions();
    };

    const selectedSuggestion = (suggestion: string) => {
        addTag(suggestion);
        resetTag();
        resetSuggestions();
    }

    const tagInputChange = (e: ChangeEventT) => {
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

            resetTag();
            resetSuggestions();

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
            resetTag();
            resetSuggestions();
        }
    };

    useEffect(() => {
        if (tag.trim()) {
            const filtered = SUGGESTED_TAGS.filter(item =>
                item.name.toLowerCase().includes(tag.toLowerCase()),
            );
            setSuggestions(filtered);
            setSuggestionsIsOpen(true);
            setSelectedIndex(-1);
        } else {
            setSuggestionsIsOpen(false);
        }
    }, [tag, setSuggestions, setSuggestionsIsOpen, setSelectedIndex]);

    useEffect(() => {
        if (tagIsOpen && tagInputRef.current) {
            tagInputRef.current.focus();
        }
    }, [tagIsOpen]);

    return {
        resetTag,
        resetSuggestions,
        tagToggle,
        tagInputChange,
        tagInputKeydown,
        selectedSuggestion,
    }
}