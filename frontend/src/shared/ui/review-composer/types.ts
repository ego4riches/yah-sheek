import type { TagSuggestionI } from "@/shared";
import React from "react";

export interface ReviewStateI {
    content: string
    setContent: (value: string) => void
    reset: () => void

    // 태그 관련
    tags: string[]
    addTag: (tag: string) => void
    removeTag: (tagIndex: number) => void
    clearTags: () => void
    isTagInputOpen: boolean
    setTagInputOpen: (open: boolean) => void
    tagInputValue: string
    setTagInputValue: (value: string) => void
    selectedSuggestionIndex: number
    setSelectedSuggestionIndex: (index: number) => void
    showTagSuggestions: boolean
    setShowTagSuggestions: (show: boolean) => void
    filteredSuggestions: TagSuggestionI[]
    setFilteredSuggestions: (suggestions: TagSuggestionI[]) => void

    // 첨부파일 관련
    attachments: File[]
    addAttachment: (file: File) => void
    removeAttachment: (fileIndex: number) => void
    clearAttachments: () => void

    // 태그 확장 관련
    isTagsExpanded: boolean
    toggleTagsExpanded: () => void

    // 컴포저 확장 관련
    isComposerExpanded: boolean
    setComposerExpanded: (expanded: boolean) => void
}

export interface CategoryOption {
    key: string
    label: string
}

export type ContentInputT = {
    content: string;
    isSubmitDisabled: boolean;
    onContentChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onFocus: () => void;
    onSubmit: () => void;
}