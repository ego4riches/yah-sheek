import type {TeamI} from "@/entities";
import {TEAMS_MESSAGES} from "@/shared";
import {ReviewComposer} from "@/widgets/review-composer";
import {ReviewFeed} from "@/widgets/review-feed";
import {ReviewHeader} from "@/widgets/review-header/ui/ReviewHeader.tsx";

type TeamsLayoutT = {
    team: TeamI | null;
}

export const TeamsLayout = ({team}: TeamsLayoutT) => {
    if (!team) {
        console.warn(TEAMS_MESSAGES.TEAM_NOT_FOUND);
        return null;
    }

    return (
            <>
                <ReviewHeader title={team.ballPark}/>
                <ReviewComposer/>
                <ReviewFeed teamId={team.id}/>
            </>
    );
};