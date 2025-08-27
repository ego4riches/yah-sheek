import { ReviewFeeds, TeamLayout, TEAMS_KEY } from "@/entities";
import { ReviewHeader } from "@/widgets";

export const KiaPage = () =>
        <TeamLayout teamKey={TEAMS_KEY.KIA}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamLayout>