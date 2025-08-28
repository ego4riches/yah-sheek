import { useTeamStore } from "@/entities";
import { DownIcon, sortOptions, SortOptionsButtonBox, SortOptionsDropdownBox, SortOptionsItemBox, SortOptionsWrapper, useSortOptionsStore, } from "@/shared";

export const SortOptions = () => {
    const { isOpen, selectedSortOption, toggleDropdown, setSelectedSortOption } = useSortOptionsStore();
    const { team } = useTeamStore();

    return (
            <SortOptionsWrapper>
                <SortOptionsButtonBox teamKey={team?.teamKey} onClick={toggleDropdown}>
                    {selectedSortOption.label}
                    <DownIcon isOpen={isOpen}/>
                </SortOptionsButtonBox>
                <SortOptionsDropdownBox isOpen={isOpen}>
                    {sortOptions.map((option) => (
                            <SortOptionsItemBox
                                    key={option.id}
                                    teamKey={team?.teamKey}
                                    onClick={() => setSelectedSortOption(option)}
                                    isSelected={selectedSortOption.id === option.id}
                            >
                                {option.label}
                            </SortOptionsItemBox>
                    ))}
                </SortOptionsDropdownBox>
            </SortOptionsWrapper>
    );
};