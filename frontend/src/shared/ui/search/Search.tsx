import { useTeamStore } from "@/entities";
import { FindIcon, SearchIconBox, SearchInputBox, SearchWrapper } from "@/shared";

export const Search = () => {
    const { team } = useTeamStore();
    
    return (
            <SearchWrapper>
                <SearchInputBox teamKey={team?.teamKey} type="text" placeholder="Search..."/>
                <SearchIconBox>
                    <FindIcon/>
                </SearchIconBox>
            </SearchWrapper>
    );
};