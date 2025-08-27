import { TeamLayoutItem, type TeamsLayoutT, useTeamByKeyQuery } from "@/entities";
import { AsyncBoundary } from "@/shared";
import type { AxiosError } from "axios";

export const TeamLayout = ({ teamKey, children }: TeamsLayoutT) => {
    const { data, status, error } = useTeamByKeyQuery(teamKey);

    return (
            <AsyncBoundary
                    data={data}
                    status={status}
                    errorCode={(error as AxiosError)?.response?.status}
            >
                {(team) =>
                        <TeamLayoutItem team={team}>
                            {children}
                        </TeamLayoutItem>}
            </AsyncBoundary>
    );
};