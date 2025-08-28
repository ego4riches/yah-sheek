import { useTeamStore } from "@/entities";
import { ButtonBox, type ButtonT } from "@/shared";

export const Button = ({ onClick, disabled, size, variant, weight, fontFamily, children }: ButtonT) => {
    const { team } = useTeamStore();

    return (
            <ButtonBox
                    onClick={onClick}
                    disabled={disabled}
                    teamKey={team?.teamKey}
                    size={size}
                    variant={variant}
                    weight={weight}
                    fontFamily={fontFamily}
            >
                {children}
            </ButtonBox>
    );
};