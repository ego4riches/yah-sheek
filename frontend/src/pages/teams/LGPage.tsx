import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const LGPage = () => {

    return (
            <TeamsLayout team={TEAMS.LG.KEY}/>
    );
};