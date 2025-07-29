import {ReviewHeader} from "@/widgets/review-header/ui/ReviewHeader.tsx";
import {getBallParkByTeamKey, ReviewComposer} from "@/shared";
import {TeamsLayoutWrapper} from "@/pages/teams/styled.ts";

export type TeamsLayoutP = {
    team: string;
    // children: PropsWithChildren;
}

export const TeamsLayout = ({team}: TeamsLayoutP) => {
    const title = getBallParkByTeamKey(team);
    if (!title) return;

    return (
            <TeamsLayoutWrapper>
                <ReviewHeader title={title}/>
                <ReviewComposer/>
                {/*{children}*/}
            </TeamsLayoutWrapper>
    );
};