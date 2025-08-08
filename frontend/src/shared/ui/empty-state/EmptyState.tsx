import { EmptyStateIcon, EmptyStateSubText, EmptyStateText, EmptyStateWrapper } from "./styled";
import type { EmptyStateT } from "./types";

export const EmptyState = ({message, subMessage}: EmptyStateT) => {
    return (
            <EmptyStateWrapper>
                <EmptyStateIcon>⚾</EmptyStateIcon>
                <EmptyStateText>{message}</EmptyStateText>
                <EmptyStateSubText>{subMessage}</EmptyStateSubText>
            </EmptyStateWrapper>
    );
};