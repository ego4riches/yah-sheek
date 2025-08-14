import {useTeamsQuery} from "@/entities";
import {TeamsLayout} from "@/pages/teams/TeamsLayout.tsx";
import {AsyncBoundary, getTeam, TEAMS} from "@/shared";
import type {AxiosError} from "axios";

export const KiwoomPage = () => {
    const {data, status, error} = useTeamsQuery();

    return (
            <AsyncBoundary
                    data={data}
                    status={status}
                    errorCode={(error as AxiosError)?.response?.status}
            >
                {(team) =>
                        <TeamsLayout team={getTeam(team, TEAMS.KIWOOM.KEY) ?? null}/>
                }
            </AsyncBoundary>
    );
};