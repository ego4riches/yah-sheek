import type { TagManagerStoreI, TagSuggestionStoreI } from "@/shared";
import { SUGGESTED_TAGS } from "@/shared/ui/review-composer/review-composer.store.ts";
import { create } from "zustand/index";

export const useTagManagerStore = create<TagManagerStoreI>((set, get) => ({
    tags: [],

    tag: '',
    setTag: (value) => set({ tag: value }),

    isOpen: false,
    setIsOpen: (open) => set({ isOpen: open }),

    addTag: (tag) => {
        const { tags } = get();
        const cleanTag = tag.startsWith('#') ? tag : `#${ tag }`;
        if (tags.length < 10 && !tags.includes(cleanTag)) {
            set({ tags: [...tags, cleanTag] });
        }
    },

    removeTag: (tagIndex) => {
        const { tags } = get();
        set({ tags: tags.filter((_, index) => index !== tagIndex) });
    },

    clearTags: () => set({ tags: [] }),

    reset: () => set({
        tags: [],
        tag: '',
        isOpen: false,
    }),
}))

export const useTagSuggestionsStore = create<TagSuggestionStoreI>((set) => ({
    suggestions: SUGGESTED_TAGS,
    setSuggestions: (suggestions) => set({ suggestions: suggestions }),

    selectedIndex: -1,
    setSelectedIndex: (index) => set({ selectedIndex: index }),

    isOpen: false,
    setIsOpen: (show) => set({ isOpen: show }),

    reset: () => set({
        suggestions: SUGGESTED_TAGS,
        selectedIndex: -1,
        isOpen: false,
    }),
}))