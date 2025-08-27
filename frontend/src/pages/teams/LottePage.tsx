import { ReviewFeeds } from "@/entities";
import { TEAMS_KEY, TeamsLayout } from "@/features";
import { ReviewHeader } from "@/widgets";

export const LottePage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.LOTTE}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>