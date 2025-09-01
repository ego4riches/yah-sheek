import { useTeamStore } from "@/entities";
import { FindIcon, type KeyboardEventT, SearchIconBox, SearchInputBox, SearchWrapper, useSearchStore } from "@/shared";

export const Search = () => {
    const { team } = useTeamStore();
    const { searchValue, setSearchValue, reset } = useSearchStore();

    const handleKeyDown = (e: KeyboardEventT) => {
        if (e.key === "Enter") {
            console.log(searchValue);
            reset();
        }
    };

    return (
            <SearchWrapper>
                <SearchInputBox
                        teamKey={team?.teamKey}
                        type="text"
                        placeholder="Search..."
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                />
                <SearchIconBox>
                    <FindIcon/>
                </SearchIconBox>
            </SearchWrapper>
    );
};