import {TEAMS_KEY, TeamsLayout} from "@/features";
import {ReviewComposer, ReviewFeed, ReviewHeader} from "@/widgets";

export const SSGPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.SSG}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewComposer/>
                        <ReviewFeed teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>