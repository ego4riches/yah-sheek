import {TagSuggestionItemBox, TagSuggestionsBox, type TagSuggestionsT, useTagSuggestionsStore} from "@/shared";

export const TagSuggestions = ({onClick}: TagSuggestionsT) => {
    const {suggestions, selectedIndex, isOpen} = useTagSuggestionsStore();

    if (isOpen && suggestions.length < 1) return null;

    return (
            <TagSuggestionsBox data-tag-suggestion>
                {suggestions.map((suggestion, index) => (
                        <TagSuggestionItemBox
                                key={suggestion.id}
                                isSelected={index === selectedIndex}
                                onClick={() => onClick(suggestion.name)}
                        >
                            #{suggestion.name} ({suggestion.count})
                        </TagSuggestionItemBox>
                ))}
            </TagSuggestionsBox>
    );
};