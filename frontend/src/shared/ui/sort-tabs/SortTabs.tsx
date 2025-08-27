import { CategoriesMenuBox, CategoryMenuItem } from "@/entities";
import { sortTabsList, useSortTabsStore } from "@/shared";

export const SortTabs = () => {
    const { selectedTab, setSelectedTab } = useSortTabsStore();

    return (
            <CategoriesMenuBox>
                {
                    sortTabsList.map(({ id, key, label }) =>
                            <CategoryMenuItem
                                    key={id}
                                    label={label}
                                    isSelected={selectedTab === key}
                                    onClick={() => setSelectedTab(key)}
                            />)
                }
            </CategoriesMenuBox>
    );
};