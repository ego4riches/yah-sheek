import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const DoosanPage = () => {

    return (
            <TeamsLayout team={TEAMS.DOOSAN.KEY}/>
    );
};