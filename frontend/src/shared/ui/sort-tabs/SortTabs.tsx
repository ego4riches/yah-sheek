import { CategoryMenuBox, CategoryMenuItem, sortTabsList } from "@/features";
import { useSortTabsStore } from "@/shared/ui/sort-tabs/sort-tabs.store";

export const SortTabs = () => {
    const { selectedTab, setSelectedTab } = useSortTabsStore();

    return (
            <CategoryMenuBox>
                {
                    sortTabsList.map(({ id, key, label }) =>
                            <CategoryMenuItem
                                    key={id}
                                    label={label}
                                    isSelected={selectedTab === key}
                                    onClick={() => setSelectedTab(key)}
                            />)
                }
            </CategoryMenuBox>
    );
};