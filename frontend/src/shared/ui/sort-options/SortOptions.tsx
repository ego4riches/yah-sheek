import { useTeamStore } from "@/entities";
import { DownIcon, sortOptions, SortOptionsButtonBox, SortOptionsDropdownBox, SortOptionsItemBox, SortOptionsWrapper, useClickOutside, useSortOptionsStore, } from "@/shared";

export const SortOptions = () => {
    const { isOpen, setIsOpen, selectedSortOption, setSelectedSortOption } = useSortOptionsStore();
    const { team } = useTeamStore();

    const sortOptionsRef = useClickOutside(() => {
        if (isOpen) setIsOpen(!isOpen);
    }, [isOpen]);

    return (
            <SortOptionsWrapper ref={sortOptionsRef}>
                <SortOptionsButtonBox teamKey={team?.teamKey} onClick={() => setIsOpen(!isOpen)}>
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