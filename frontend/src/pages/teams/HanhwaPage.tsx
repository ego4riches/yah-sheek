import { ReviewFeeds } from "@/entities";
import { TEAMS_KEY, TeamsLayout } from "@/features";
import { ReviewHeader } from "@/widgets";

export const HanhwaPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.HANHWA}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewFeeds teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>