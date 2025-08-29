import type { AuthButtonT } from "@/features";
import { Button, BUTTON_FONTS, BUTTON_SIZES, BUTTON_VARIANTS } from "@/shared";

export const AuthButtonItem = ({ onClick, children }: AuthButtonT) => {
    return (
            <Button
                    onClick={onClick}
                    size={BUTTON_SIZES.SMALL}
                    variant={BUTTON_VARIANTS.TRANSPARENT}
                    fontFamily={BUTTON_FONTS.KBO}
                    children={children}
            />
    );
};