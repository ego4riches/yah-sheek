import { ReviewFeeds } from "@/entities";
import { TEAMS_KEY, TeamsLayout } from "@/features";
import { ReviewComposer, ReviewHeader } from "@/widgets";

export const NCPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.NC}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewComposer/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>