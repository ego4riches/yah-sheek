import {ArmRight, BatManBox, BatMansBox, Circle, Club, Eye, Foot, Head, Leg, Nose, Shape} from "@/shared";

export const BatMans = () => {
    return (
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
    );
};