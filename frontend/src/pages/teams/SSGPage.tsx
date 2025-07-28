import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";
import {TEAMS} from "@/shared";

export const SSGPage = () => {

    return (
            <TeamsLayout team={TEAMS.SSG.KEY}/>
    );
};