import { ReviewFeeds, TeamLayout, TEAMS_KEY } from "@/entities";
import { ReviewHeader } from "@/widgets";

export const LottePage = () =>
        <TeamLayout teamKey={TEAMS_KEY.LOTTE}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamLayout>