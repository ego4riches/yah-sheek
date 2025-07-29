import {FindIcon, SearchIconBox, SearchInputBox, SearchWrapper} from "@/shared";

export const Search = () => {

    return (
            <SearchWrapper>
                <SearchInputBox type="text" placeholder="Search..."/>
                <SearchIconBox>
                    <FindIcon/>
                </SearchIconBox>
            </SearchWrapper>
    );
};