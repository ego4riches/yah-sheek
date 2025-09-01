import { suggestedTags, type TagManagerStoreI, type TagSuggestionStoreI } from "@/shared";
import { create } from "zustand/index";

export const useTagManagerStore = create<TagManagerStoreI>((set, get) => ({
    tags: [],

    addTag: (tag) => {
        const { tags } = get();
        if (tags.length < 10 && tag) {
            set({ tags: [...tags, tag] });
        }
    },

    removeTag: (tagIndex) => {
        const { tags } = get();
        set({ tags: tags.filter((_, index) => index !== tagIndex) });
    },

    tag: '',
    setTag: (value) => set({ tag: value }),

    isExpanded: false,
    setIsExpanded: (state) => set({ isExpanded: state }),

    resetTag: () => set({
        tag: '',
        isExpanded: false,
    }),

    reset: () => set({
        tags: [],
        tag: '',
        isExpanded: false,
    }),
}))

export const useTagSuggestionsStore = create<TagSuggestionStoreI>((set) => ({
    suggestions: suggestedTags,
    setSuggestions: (suggestions) => set({ suggestions: suggestions }),

    selectedIndex: -1,
    setSelectedIndex: (index) => set({ selectedIndex: index }),

    isExpanded: false,
    setIsExpanded: (state) => set({ isExpanded: state }),

    reset: () => set({
        suggestions: suggestedTags,
        selectedIndex: -1,
        isExpanded: false,
    }),
}))