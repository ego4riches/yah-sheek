import type { ReviewStateI, TagSuggestionI } from "@/shared";
import { create } from "zustand";

// 임시 태그 제안 데이터 (실제로는 API에서 가져올 것)
export const SUGGESTED_TAGS: TagSuggestionI[] = [
    { id: '1', name: '맛있어요', count: 150 },
    { id: '2', name: '깔끔해요', count: 89 },
    { id: '3', name: '친절해요', count: 67 },
    { id: '4', name: '분위기좋아요', count: 45 },
    { id: '5', name: '가성비좋아요', count: 123 },
    { id: '6', name: '재방문의사있어요', count: 78 },
    { id: '7', name: '추천해요', count: 234 },
    { id: '8', name: '신선해요', count: 56 },
];

export const useReviewComposerStore = create<ReviewStateI>((set, get) => ({
    content: '',
    setContent: (value) => set({ content: value }),
    reset: () => set({
        content: '',
        // category: '',
        // isCategoryOpen: false,
        // rating: 0,
        tags: [],
        attachments: [],
        isTagsExpanded: false,
        isComposerExpanded: false,
        isTagInputOpen: false,
        tagInputValue: '',
        selectedSuggestionIndex: -1,
        showTagSuggestions: false,
        filteredSuggestions: SUGGESTED_TAGS,
    }),

    // 태그 관련
    tags: [],
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
    isTagInputOpen: false,
    setTagInputOpen: (open) => set({ isTagInputOpen: open }),
    tagInputValue: '',
    setTagInputValue: (value) => set({ tagInputValue: value }),
    selectedSuggestionIndex: -1,
    setSelectedSuggestionIndex: (index) => set({ selectedSuggestionIndex: index }),
    showTagSuggestions: false,
    setShowTagSuggestions: (show) => set({ showTagSuggestions: show }),
    filteredSuggestions: SUGGESTED_TAGS,
    setFilteredSuggestions: (suggestions) => set({ filteredSuggestions: suggestions }),

    // 첨부파일 관련
    attachments: [],
    addAttachment: (file) => {
        const { attachments } = get();
        if (attachments.length < 5) { // 최대 5개 첨부파일
            set({ attachments: [...attachments, file] });
        }
    },
    removeAttachment: (fileIndex) => {
        const { attachments } = get();
        set({ attachments: attachments.filter((_, index) => index !== fileIndex) });
    },
    clearAttachments: () => set({ attachments: [] }),

    // 태그 확장 관련
    isTagsExpanded: false,
    toggleTagsExpanded: () => set((state) => ({ isTagsExpanded: !state.isTagsExpanded })),

    // 컴포저 확장 관련
    isComposerExpanded: true,
    setComposerExpanded: (expanded) => set({ isComposerExpanded: expanded }),
}))