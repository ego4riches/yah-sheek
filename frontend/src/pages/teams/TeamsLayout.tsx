import {getBallParkByTeamKey, type TeamT} from "@/shared";
import {ReviewComposer} from "@/widgets/review-composer";
import {ReviewFeed} from "@/widgets/review-feed";
import {ReviewHeader} from "@/widgets/review-header/ui/ReviewHeader.tsx";

export const TeamsLayout = ({team}: TeamT) => {
    const title = getBallParkByTeamKey(team);
    if (!title) return;

    return (
            <>
                <ReviewHeader title={title}/>
                <ReviewComposer/>
                <ReviewFeed team={team}/>
            </>
    );
};