import {ButtonBox, type ButtonT} from "@/shared";

export const Button = ({onClick, disabled, size, variant, weight, children}: ButtonT) => {
    return (
            <ButtonBox
                    onClick={onClick}
                    disabled={disabled}
                    size={size}
                    variant={variant}
                    weight={weight}
            >
                {children}
            </ButtonBox>
    );
};