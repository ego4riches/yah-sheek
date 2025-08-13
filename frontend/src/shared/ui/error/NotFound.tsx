import {ArmRight, BatManBox, BatMansBox, Button, BUTTON_SIZES, BUTTON_VARIANTS, BUTTON_WEIGHTS, Circle, Club, ErrorCodeBox, Eye, Foot, GO_TO_HOME, GoToHomeBox, Head, Leg, Nose, NotFoundBox, type NotFoundT, ROUTES, Shape} from "@/shared";
import {useNavigate} from "react-router-dom";

export const NotFound = ({code}: NotFoundT) => {
    const navigate = useNavigate();

    return (
            <NotFoundBox>
                <ErrorCodeBox>{code ?? 500}</ErrorCodeBox>
                <BatMansBox>
                    <BatManBox>
                        <Head>
                            <Eye>
                                <Nose/>
                            </Eye>
                        </Head>
                        <Shape>
                            <Circle/>
                            <Circle/>
                        </Shape>
                        <ArmRight>
                            <Club/>
                        </ArmRight>
                        <Leg>
                            <Foot>
                                <span className="fingers"></span>
                            </Foot>
                        </Leg>
                        <Leg>
                            <Foot>
                                <span className="fingers"></span>
                            </Foot>
                        </Leg>
                    </BatManBox>
                    <BatManBox>
                        <Head>
                            <Eye>
                                <Nose/>
                            </Eye>
                        </Head>
                        <Shape>
                            <Circle/>
                            <Circle/>
                        </Shape>
                        <ArmRight>
                            <Club/>
                        </ArmRight>
                        <Leg>
                            <Foot>
                                <span className="fingers"></span>
                            </Foot>
                        </Leg>
                        <Leg>
                            <Foot>
                                <span className="fingers"></span>
                            </Foot>
                        </Leg>
                    </BatManBox>
                </BatMansBox>
                <GoToHomeBox>
                    <Button
                            children={GO_TO_HOME}
                            onClick={() => navigate(ROUTES.HOME)}
                            size={BUTTON_SIZES.MEDIUM}
                            variant={BUTTON_VARIANTS.PRIMARY}
                            weight={BUTTON_WEIGHTS.SEMIBOLD}
                    />
                </GoToHomeBox>
            </NotFoundBox>
    );
};