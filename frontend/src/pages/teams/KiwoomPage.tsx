import {TEAMS} from "@/shared";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";

export const KiwoomPage = () => {

    return (
            <TeamsLayout team={TEAMS.KIWOOM.KEY}/>
    );
};