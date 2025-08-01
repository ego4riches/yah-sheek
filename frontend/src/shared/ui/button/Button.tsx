import {ButtonBox, type ButtonT} from "@/shared";

export const Button = ({onClick, disabled, size, variant, children}: ButtonT) => {
    return (
            <ButtonBox
                    onClick={onClick}
                    disabled={disabled}
                    size={size}
                    variant={variant}
            >
                {children}
            </ButtonBox>
    );
};