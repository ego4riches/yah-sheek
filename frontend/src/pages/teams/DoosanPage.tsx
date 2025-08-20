import {TEAMS_KEY} from "@/features";
import {TeamsLayout} from "@/features/teams/layout/ui/TeamsLayout.tsx";
import {ReviewComposer, ReviewFeed, ReviewHeader} from "@/widgets";

export const DoosanPage = () =>
        <TeamsLayout teamKey={TEAMS_KEY.DOOSAN}>
            {(team) => (
                    <>
                        <ReviewHeader title={team.ballPark}/>
                        <ReviewComposer/>
                        <ReviewFeed teamId={team.id}/>
                    </>
            )}
        </TeamsLayout>