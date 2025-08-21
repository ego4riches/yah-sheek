import { ReviewFeeds } from "@/entities";
import { TEAMS_KEY, TeamsLayout } from "@/features";
import { ReviewComposer, ReviewHeader } from "@/widgets";

export const KiwoomPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.KIWOOM}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewComposer/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>