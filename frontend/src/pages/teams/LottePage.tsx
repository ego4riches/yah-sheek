import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const LottePage = () => {

    return (
            <TeamsLayout team={TEAMS.LOTTE.KEY}/>
    );
};