import {ReviewHeader} from "@/widgets/review-header/ui/ReviewHeader.tsx";
import {getBallParkByTeamKey} from "@/shared";
import {TeamsLayoutWrapper} from "@/pages/teams/styled.ts";
import {ReviewComposer} from "@/widgets/review-composer";

type TeamsLayoutP = {
    team: string;
}

export const TeamsLayout = ({team}: TeamsLayoutP) => {
    const title = getBallParkByTeamKey(team);
    if (!title) return;

    return (
            <TeamsLayoutWrapper>
                <ReviewHeader title={title}/>
                <ReviewComposer/>
            </TeamsLayoutWrapper>
    );
};