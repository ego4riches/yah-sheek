// Store
export interface SearchStoreI {
    searchValue: string;
    setSearchValue: (value: string) => void;
    reset: () => void;
}