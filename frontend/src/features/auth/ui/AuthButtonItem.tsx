import type {AuthButtonT} from "@/features";
import {Button, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS} from "@/shared";

export const AuthButtonItem = ({onClick, children}: AuthButtonT) => {
    return (
            <Button
                    onClick={onClick}
                    size={BUTTON_SIZES.SMALL}
                    weight={BUTTON_WEIGHTS.BOLD}
                    variant={BUTTON_VARIANTS.PRIMARY}
                    children={children}
            />
    );
};