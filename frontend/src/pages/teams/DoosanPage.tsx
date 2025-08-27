import { ReviewFeeds, TeamLayout, TEAMS_KEY } from "@/entities";
import { ReviewHeader } from "@/widgets";

export const DoosanPage = () =>
        <TeamLayout teamKey={TEAMS_KEY.DOOSAN}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamLayout>