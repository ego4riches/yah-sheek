import {TEAMS_KEY, TeamsLayout} from "@/features";
import {ReviewComposer, ReviewFeed, ReviewHeader} from "@/widgets";

export const SamsungPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.SAMSUNG}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewComposer/>
                        <ReviewFeed teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>