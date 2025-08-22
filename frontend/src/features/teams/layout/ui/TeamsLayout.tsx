import { TeamItem, type TeamsLayoutT, useTeamByKeyQuery } from "@/features";
import { AsyncBoundary } from "@/shared";
import type { AxiosError } from "axios";

export const TeamsLayout = ({ teamKey, children }: TeamsLayoutT) => {
    const { data, status, error } = useTeamByKeyQuery(teamKey);

    return (
            <AsyncBoundary
                    data={data}
                    status={status}
                    errorCode={(error as AxiosError)?.response?.status}
            >
                {(team) =>
                        <TeamItem team={team}>
                            {children}
                        </TeamItem>}
            </AsyncBoundary>
    );
};