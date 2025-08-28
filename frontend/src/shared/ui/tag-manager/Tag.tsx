import { TagBox, type TagT } from "@/shared";

export const Tag = ({ tag, teamKey, onClick }: TagT) => {
    return (
            <TagBox teamKey={teamKey}>
                {tag}
                <button onClick={onClick}>×</button>
            </TagBox>
    );
};