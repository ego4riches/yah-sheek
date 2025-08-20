import {useTeamsQuery} from "@/entities";
import {getTeam, TeamItem, type TeamsLayoutT} from "@/features";
import {AsyncBoundary} from "@/shared";
import type {AxiosError} from "axios";

export const TeamsLayout = ({teamKey, children}: TeamsLayoutT) => {
    const {data, status, error} = useTeamsQuery();

    return (
            <AsyncBoundary
                    data={data}
                    status={status}
                    errorCode={(error as AxiosError)?.response?.status}
            >
                {(team) =>
                        <TeamItem team={getTeam(team, teamKey) ?? null}>
                            {children}
                        </TeamItem>}
            </AsyncBoundary>
    );
};