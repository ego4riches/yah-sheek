import type {QueryStoreI} from "@/shared";
import {create} from "zustand";

export const useQueryStore = create<QueryStoreI>((set) => ({
    queries: {},
    setQuery: (key, data) =>
        set((state) => ({queries: {...state.queries, [key]: data}})),
}));