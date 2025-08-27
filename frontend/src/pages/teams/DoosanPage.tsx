import { ReviewFeeds } from "@/entities";
import { TEAMS_KEY, TeamsLayout } from "@/features";
import { ReviewHeader } from "@/widgets";

export const DoosanPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.DOOSAN}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>