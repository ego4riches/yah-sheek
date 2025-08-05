import {ReviewHeader} from "@/widgets/review-header/ui/ReviewHeader.tsx";
import {getBallParkByTeamKey} from "@/shared";
import {TeamsLayoutWrapper} from "@/pages/teams/styled.ts";
import {ReviewWrite} from "@/widgets/review-write";

type TeamsLayoutP = {
    team: string;
}

export const TeamsLayout = ({team}: TeamsLayoutP) => {
    const title = getBallParkByTeamKey(team);
    if (!title) return;

    return (
            <TeamsLayoutWrapper>
                <ReviewHeader title={title}/>
                <ReviewWrite/>
            </TeamsLayoutWrapper>
    );
};