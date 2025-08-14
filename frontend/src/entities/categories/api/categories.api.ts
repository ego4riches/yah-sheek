import type {GetCategoriesResponseT} from "@/entities";
import {api, CATEGORIES_BASE_URL} from "@/shared";

const BASE_URL = CATEGORIES_BASE_URL;

export const fetchCategories = async () => {
    const url = `${BASE_URL}`;

    return await api.get<GetCategoriesResponseT>(url);
}