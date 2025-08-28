import { TagSuggestionItemBox, TagSuggestionsBox, type TagSuggestionsT, useTagSuggestionsStore } from "@/shared";

export const TagSuggestions = ({ teamKey, onClick }: TagSuggestionsT) => {
    const { suggestions, selectedIndex, isExpanded } = useTagSuggestionsStore();

    if (isExpanded && suggestions.length < 1) return null;

    return (
            <TagSuggestionsBox teamKey={teamKey} isExpanded={isExpanded}>
                {suggestions.map((suggestion, index) => (
                        <TagSuggestionItemBox
                                teamKey={teamKey}
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