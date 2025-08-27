import { ReviewFeeds, TeamLayout, TEAMS_KEY } from "@/entities";
import { ReviewHeader } from "@/widgets";

export const SamsungPage = () =>
        <TeamLayout teamKey={TEAMS_KEY.SAMSUNG}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamLayout>