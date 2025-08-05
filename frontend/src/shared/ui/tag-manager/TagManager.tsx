import {useRef} from 'react';
import {
    Tag,
    TagExpandedBox,
    TagInputBox,
    TagManagerWrapper,
    TagSuggestions,
    useTagInput,
    useTagManagerStore,
    useTagSuggest,
    useTagVisibility,
} from "@/shared";

export const TagManager = () => {
    const tagInputRef = useRef<HTMLInputElement>(null);
    const {tags, tag, isExpanded, removeTag} = useTagManagerStore();
    const {tagInputChange, tagInputKeydown} = useTagInput(tagInputRef);
    const {selectedSuggestion} = useTagSuggest();
    const {tagToggle} = useTagVisibility();

    return (
            <TagManagerWrapper>
                {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} onClick={() => removeTag(index)}/>
                ))}
                <TagExpandedBox onClick={tagToggle} isExpanded={isExpanded}>
                    <span>#</span>
                    <TagInputBox
                            ref={tagInputRef}
                            value={tag}
                            onChange={tagInputChange}
                            onKeyDown={tagInputKeydown}
                            onClick={(e) => e.stopPropagation()}
                            placeholder="TAG"
                    />
                    <TagSuggestions onClick={selectedSuggestion}/>
                </TagExpandedBox>
            </TagManagerWrapper>
    );
}; 