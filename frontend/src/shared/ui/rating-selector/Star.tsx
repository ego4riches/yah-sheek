import {RatingStarButtonBox, type StarT} from "@/shared";

export const Star = ({filled, onClick}: StarT) => {
    return (
            <RatingStarButtonBox filled={filled} onClick={onClick}>
                ★
            </RatingStarButtonBox>
    );
};