import { useTeamStore } from "@/entities";
import { Tag, TagExpandedBox, TagManagerWrapper, TagSuggestions, useTagInput, useTagManagerStore, useTagSuggest, useTagVisibility, } from "@/shared";
import { useRef } from 'react';

export const TagManager = () => {
    const tagInputRef = useRef<HTMLInputElement>(null);
    const { team } = useTeamStore();
    const { tags, tag, isExpanded, removeTag } = useTagManagerStore();
    const { tagInputChange, tagInputKeydown } = useTagInput(tagInputRef);
    const { selectedSuggestion } = useTagSuggest();
    const { tagToggle } = useTagVisibility();

    return (
            <TagManagerWrapper>
                {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} teamKey={team?.teamKey} onClick={() => removeTag(index)}/>
                ))}
                <TagExpandedBox onClick={tagToggle} isExpanded={isExpanded} teamKey={team?.teamKey}>
                    <span>#</span>
                    <input
                            ref={tagInputRef}
                            value={tag}
                            onChange={tagInputChange}
                            onKeyDown={tagInputKeydown}
                            onClick={(e) => e.stopPropagation()}
                            disabled={!isExpanded}
                            placeholder="TAG"
                    />
                    <TagSuggestions teamKey={team?.teamKey} onClick={selectedSuggestion}/>
                </TagExpandedBox>
            </TagManagerWrapper>
    );
}; 