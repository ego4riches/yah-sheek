import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const NCPage = () => {

    return (
            <TeamsLayout team={TEAMS.NC.KEY}/>
    );
};