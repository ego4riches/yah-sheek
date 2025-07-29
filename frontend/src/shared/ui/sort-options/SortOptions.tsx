import {
    DownIcon,
    sortOptions,
    SortOptionsButtonBox,
    SortOptionsDropdownBox,
    SortOptionsItemBox,
    SortOptionsWrapper,
    useSortOptionsStore,
} from "@/shared";

export const SortOptions = () => {
    const {isOpen, selectedOption, toggleDropdown, setSelectedOption} = useSortOptionsStore();

    return (
            <SortOptionsWrapper>
                <SortOptionsButtonBox onClick={toggleDropdown}>
                    {selectedOption.label}
                    <DownIcon isOpen={isOpen}/>
                </SortOptionsButtonBox>
                <SortOptionsDropdownBox isOpen={isOpen}>
                    {sortOptions.map((option) => (
                            <SortOptionsItemBox
                                    key={option.id}
                                    onClick={() => setSelectedOption(option)}
                                    isSelected={selectedOption.id === option.id}
                            >
                                {option.label}
                            </SortOptionsItemBox>
                    ))}
                </SortOptionsDropdownBox>
            </SortOptionsWrapper>
    );
};