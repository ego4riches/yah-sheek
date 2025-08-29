import { useTeamStore } from "@/entities";
import { EmptyStateWrapper } from "./styled";
import type { EmptyStateT } from "./types";

export const EmptyState = ({ message, subMessage }: EmptyStateT) => {
    const { team } = useTeamStore();

    return (
            <EmptyStateWrapper teamKey={team?.teamKey}>
                <div>⚾</div>
                <h3>{message}</h3>
                <p>{subMessage}</p>
            </EmptyStateWrapper>
    );
};