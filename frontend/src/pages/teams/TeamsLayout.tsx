import {getBallParkByTeamKey} from "@/shared";
import {ReviewComposer} from "@/widgets/review-composer";
import {ReviewFeed} from "@/widgets/review-feed";
import {ReviewHeader} from "@/widgets/review-header/ui/ReviewHeader.tsx";

type TeamsLayoutP = {
    team: string;
}

export const TeamsLayout = ({team}: TeamsLayoutP) => {
    const title = getBallParkByTeamKey(team);
    if (!title) return;

    return (
            <>
                <ReviewHeader title={title}/>
                <ReviewComposer/>
                <ReviewFeed/>
            </>
    );
};