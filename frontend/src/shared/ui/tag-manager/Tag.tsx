import {TagBox, TagRemoveButtonBox, type TagT} from "@/shared";

export const Tag = ({tag, onClick}: TagT) => {
    return (
            <TagBox>
                {tag}
                <TagRemoveButtonBox onClick={onClick}>
                    ×
                </TagRemoveButtonBox>
            </TagBox>
    );
};