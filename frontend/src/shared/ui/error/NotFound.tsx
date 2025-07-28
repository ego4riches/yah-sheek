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
    Shape
} from "@/shared";

export type NotFoundP = {
    code: number;
}

export const NotFound = ({code}: NotFoundP) => {
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