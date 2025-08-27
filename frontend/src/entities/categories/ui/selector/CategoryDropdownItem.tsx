import { type CategoryDropdownItemT, CategoryOptionBox } from "@/entities";

export const CategoryDropdownItem = ({ id, name, onClick }: CategoryDropdownItemT) =>
        <CategoryOptionBox key={id} onClick={onClick}>
            {name}
        </CategoryOptionBox>