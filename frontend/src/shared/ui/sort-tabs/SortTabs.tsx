import { CategoryMenuBox, CategoryMenuItem } from "@/features";
import { sortTabsList, useSortTabsStore } from "@/shared";

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