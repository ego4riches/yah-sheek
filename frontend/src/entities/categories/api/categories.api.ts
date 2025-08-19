import type {GetCategoriesResponseT} from "@/entities";
import {CATEGORIES_BASE_URL, httpClient} from "@/shared";

const BASE_URL = CATEGORIES_BASE_URL;

export const fetchCategories = async () => {
    return await httpClient.get<GetCategoriesResponseT>(BASE_URL);
}