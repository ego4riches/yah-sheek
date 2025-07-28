import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const KiaPage = () => {

    return (
            <TeamsLayout team={TEAMS.KIA.KEY}/>
    );
};