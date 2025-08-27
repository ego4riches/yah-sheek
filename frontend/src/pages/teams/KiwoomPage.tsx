import { ReviewFeeds, TeamLayout, TEAMS_KEY } from "@/entities";
import { ReviewHeader } from "@/widgets";

export const KiwoomPage = () =>
        <TeamLayout teamKey={TEAMS_KEY.KIWOOM}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamLayout>