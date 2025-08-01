import type { ChangeEventT, IsOpenStoreI, KeyboardEventT } from "@/shared";

// Props
export type TagManagerT = {
    tags: string[];
    isTagInputOpen: boolean;
    tagInputValue: string;
    selectedSuggestionIndex: number;
    showTagSuggestions: boolean;
    filteredSuggestions: TagSuggestionI[];
    onTagRemove: (index: number) => void;
    onTagAddClick: () => void;
    onTagInputChange: (e: ChangeEventT) => void;
    onTagInputKeyDown: (e: KeyboardEventT) => void;
    onTagSuggestionClick: (tagName: string) => void;
    onTagInputBlur: () => void;
}

export type TagT = {
    tag: string;
    onClick: () => void;
}

export type TagSuggestionsT = {
    onClick: (suggestion: string) => void;
}

// Item
export interface TagSuggestionI {
    id: string
    name: string
    count: number
}

// Store
export interface TagManagerStoreI extends IsOpenStoreI {
    tags: string[]

    tag: string
    setTag: (value: string) => void

    addTag: (tag: string) => void
    removeTag: (tagIndex: number) => void
    clearTags: () => void

    reset: () => void
}

export interface TagSuggestionStoreI extends IsOpenStoreI {
    suggestions: TagSuggestionI[]
    setSuggestions: (suggestions: TagSuggestionI[]) => void

    selectedIndex: number
    setSelectedIndex: (index: number) => void

    reset: () => void
}