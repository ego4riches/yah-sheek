import { flexCenter, flexSpaceBetween, getShouldForwardProps, type TeamKeyObjI } from "@/shared";
import { getTeamColor } from "@/shared/lib/utils/get-team-color";
import styled from "styled-components";

export const FeedDetailHeaderWrapper = styled.div`
    ${flexSpaceBetween};
    gap: 2rem;
    padding: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors.gray200};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`

export const BreadcrumbWrapper = styled.nav.withConfig({
    shouldForwardProp: getShouldForwardProps(['teamKey']),
})<TeamKeyObjI>`
    width: fit-content;
    flex: 1;
    font-size: ${({ theme }) => theme.fontSizes.md};
    color: ${({ theme, teamKey }) =>
        teamKey ? getTeamColor(teamKey, 500) : theme.colors.primary800};
    cursor: pointer;

    &:hover {
        color: ${({ theme, teamKey }) =>
            teamKey ? getTeamColor(teamKey, 300) : theme.colors.primary600};
    }

    span {
        margin: 0 0.5rem;
    }
`;

export const ActionButtonsBox = styled.div`
    ${flexCenter};
    gap: 1rem;
`

export const FeedDetailInfoWrapper = styled.div`
    padding: 1rem;
    background: ${({ theme }) => theme.colors.gray100};
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};

    div {
        display: flex;
        gap: 1rem;
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.gray600};

        span {
            ${flexCenter};
        }
    }

    div:first-child span {
        font-size: ${({ theme }) => theme.fontSizes.lg};
    }
`

export const FeedDetailSwiperWrapper = styled.div`
    position: relative;
    padding: 2rem;

    .swiper-button-prev,
    .swiper-button-next {
        color: ${({ theme }) => theme.colors.light};

        &:after {
            font-size: 2rem;
        }
    }

    .swiper-pagination-bullet {
        background: ${({ theme }) => theme.colors.light};
    }
`;

export const SwiperImageBox = styled.div`
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 0.5rem;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;