import { BatMans, Button, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS, ErrorCodeBox, GO_TO_HOME, GoToHomeBox, NotFoundBox, type NotFoundT, ROUTES } from "@/shared";

export const NotFound = ({ code }: NotFoundT) =>
        <NotFoundBox>
            <ErrorCodeBox>{code ?? 404}</ErrorCodeBox>
            <BatMans/>
            <GoToHomeBox>
                <Button
                        children={GO_TO_HOME}
                        onClick={() => window.location.replace(ROUTES.HOME)}
                        size={BUTTON_SIZES.MEDIUM}
                        variant={BUTTON_VARIANTS.PRIMARY}
                        weight={BUTTON_WEIGHTS.SEMIBOLD}
                />
            </GoToHomeBox>
        </NotFoundBox>