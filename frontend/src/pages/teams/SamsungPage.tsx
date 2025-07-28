import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const SamsungPage = () => {

    return (
            <TeamsLayout team={TEAMS.SAMSUNG.KEY}/>
    );
};