import { useReviewComposerStore } from "@/shared/ui/review-composer/review-composer.store.ts";
import { useEffect } from 'react';

export const useReviewComposer = () => {
    const {
        content,
        setContent,
        tags,
        addTag,
        removeTag,
        attachments,
        addAttachment,
        removeAttachment,
        isComposerExpanded,
        setComposerExpanded,
        isTagInputOpen,
        setTagInputOpen,
        tagInputValue,
        setTagInputValue,
        selectedSuggestionIndex,
        setSelectedSuggestionIndex,
        showTagSuggestions,
        setShowTagSuggestions,
        filteredSuggestions,
        setFilteredSuggestions,
        reset,
    } = useReviewComposerStore();

    // 페이지 새로고침/이동 시 컴포저 초기화
    useEffect(() => {
        const handleBeforeUnload = () => {
            setComposerExpanded(false);
            setTagInputOpen(false);
        };

        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                setComposerExpanded(false);
                setTagInputOpen(false);
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [setComposerExpanded, setTagInputOpen]);

    // 태그 입력 필터링
    useEffect(() => {
        if (tagInputValue.trim()) {
            const filtered = SUGGESTED_TAGS.filter(tag =>
                tag.name.toLowerCase().includes(tagInputValue.toLowerCase()),
            );
            setFilteredSuggestions(filtered);
            setShowTagSuggestions(true);
            setSelectedSuggestionIndex(-1);
        } else {
            setShowTagSuggestions(false);
        }
    }, [tagInputValue, setFilteredSuggestions, setShowTagSuggestions, setSelectedSuggestionIndex]);

    // 컴포저 확장 처리
    const handleContentInputFocus = () => {
        setComposerExpanded(true);
    };

    // 카테고리 관련 핸들러
    const handleCategorySelect = (selectedCategory: string) => {
        setCategory(selectedCategory);
        setIsCategoryOpen(false);
    };

    const handleCategoryToggle = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    // 첨부파일 관련 핸들러
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            Array.from(files).forEach(file => {
                if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
                    addAttachment(file);
                }
            });
        }
    };

    // 제출 핸들러
    const handleSubmit = () => {
        // 여기에 실제 제출 로직 구현
        console.log('리뷰 제출:', {
            category,
            rating,
            tags,
            content,
            attachments,
        });
        reset();
        setComposerExpanded(false);
    };

    const isSubmitDisabled = !content.trim() || !category || rating === 0;

    return {
        // 상태
        content,
        category,
        rating,
        tags,
        attachments,
        isComposerExpanded,
        isTagInputOpen,
        tagInputValue,
        selectedSuggestionIndex,
        isCategoryOpen,
        showTagSuggestions,
        filteredSuggestions,
        isSubmitDisabled,

        // 액션
        setContent,
        setRating,
        removeTag,
        removeAttachment,
        handleContentInputFocus,
        handleCategorySelect,
        handleCategoryToggle,
        handleTagAddClick,
        handleTagInputChange,
        handleTagInputKeyDown,
        handleTagSuggestionClick,
        handleTagInputBlur,
        handleFileChange,
        handleSubmit,
    };
}; 