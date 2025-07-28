import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const KTPage = () => {

    return (
            <TeamsLayout team={TEAMS.KT.KEY}/>
    );
};