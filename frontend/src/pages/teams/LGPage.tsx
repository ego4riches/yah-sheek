import {TEAMS_KEY} from "@/features";
import {TeamsLayout} from "@/features/teams/layout/ui/TeamsLayout.tsx";
import {ReviewComposer, ReviewFeed, ReviewHeader} from "@/widgets";

export const LGPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.LG}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewComposer/>
                        <ReviewFeed teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>