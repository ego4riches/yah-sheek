import {useRef} from 'react';
import {
    Tag,
    TagExpandedBox,
    TagInputBox,
    TagManagerWrapper,
    TagSuggestions,
    useTagManager,
    useTagManagerStore,
} from "@/shared";

export const TagManager = () => {
    const {tags, tag, isOpen, removeTag} = useTagManagerStore();
    const tagInputRef = useRef<HTMLInputElement>(null);
    const {tagToggle, selectedSuggestion, tagInputChange, tagInputKeydown} = useTagManager(tagInputRef);

    return (
            <TagManagerWrapper>
                {tags.map((tag, index) => (
                        <Tag key={index} tag={tag} onClick={() => removeTag(index)}/>
                ))}
                <TagExpandedBox onClick={tagToggle} isOpen={isOpen}>
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