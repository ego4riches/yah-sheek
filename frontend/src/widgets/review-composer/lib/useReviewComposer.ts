import { useCategorySelectorStore, useClickOutside, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore, useTagSuggestionsStore } from "@/shared";
import { useReviewComposerStore } from "@/widgets/review-composer";
import { useEffect } from "react";

export const useReviewComposer = () => {
    const {
        category, isOpen: isCategoryOpen, setIsOpen: setIsCategoryOpen, reset: resetCategory,
    } = useCategorySelectorStore();
    const { rating, setRating } = useRatingSelectorStore();
    const { isExpanded: isTagsExpanded, setIsExpanded: setIsTagsExpanded, reset: resetTags } = useTagManagerStore();
    const { reset: resetTagSuggestions } = useTagSuggestionsStore();
    const { content, setContent } = useReviewContentInputStore();
    const { reset: resetMedia } = useMediaUploadStore();
    const { isExpanded, setIsExpanded } = useReviewComposerStore();

    const isSubmitDisabled = !content.trim() || !category || rating === 0;

    // 컴포저 접기
    const collapse = () => {
        // 카테고리 열려 있을 경우 닫기
        if (isCategoryOpen) {
            setIsCategoryOpen(false);
            return;
        }

        // 태그 열려 있을 경우 닫기
        if (isTagsExpanded) {
            setIsTagsExpanded(false);
            return;
        }

        // 컴포저 확장되어 있을 경우 닫기
        if (isExpanded) {
            setIsExpanded(false);
        }
    }

    // 컴포저 바깥 영역 클릭 시 접기
    const composerRef = useClickOutside(() => {
        collapse();
    }, [isExpanded, isTagsExpanded, isCategoryOpen]);

    // 모든 콘텐츠 리셋
    const reset = () => {
        resetCategory();
        setRating(0);
        resetTags();
        resetTagSuggestions();
        setContent('');
        resetMedia();
        setIsExpanded(false);
    }

    // 마운트 시 리셋
    useEffect(() => {
        reset();
    }, []);

    return {
        isSubmitDisabled,
        composerRef,
        reset,
    }
}