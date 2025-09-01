import { useCategoriesSelectorStore } from "@/entities";
import { useAddReviewStore } from "@/features";
import { useClickOutside, useMediaUploadStore, useRatingSelectorStore, useReviewContentInputStore, useTagManagerStore, useTagSuggestionsStore } from "@/shared";
import { useEffect } from "react";

export const useAddReviewVisibility = () => {
    const { isOpen: isCategoryOpen, setIsOpen: setIsCategoryOpen, reset: resetCategory } = useCategoriesSelectorStore();
    const { setRating } = useRatingSelectorStore();
    const { isExpanded: isTagsExpanded, setIsExpanded: setIsTagsExpanded, reset: resetTags } = useTagManagerStore();
    const { reset: resetTagSuggestions } = useTagSuggestionsStore();
    const { setContent } = useReviewContentInputStore();
    const { reset: resetMedia } = useMediaUploadStore();
    const { isExpanded, setIsExpanded } = useAddReviewStore();

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
        composerRef,
        reset,
    }
}