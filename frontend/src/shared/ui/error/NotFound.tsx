import {
    ArmRight,
    BatManBox,
    BatMansBox,
    Circle,
    Club,
    ErrorCodeBox,
    Eye,
    Foot,
    Head,
    Leg,
    Nose,
    NotFoundBox,
    type NotFoundT,
    Shape
} from "@/shared";

export const NotFound = ({code}: NotFoundT) => {
    return (
            <NotFoundBox>
                <ErrorCodeBox>{code}</ErrorCodeBox>
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
            </NotFoundBox>
    );
};