import { flexCenter, media } from "@/shared";
import styled from 'styled-components';

export const CategoriesBox = styled.div`
    ${ flexCenter };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    gap: 4rem;
    margin-top: 2rem;
    padding: 2rem 4rem;
    color: ${ ({ theme }) => theme.colors.white };
    background: ${ ({ theme }) => theme.colors.ssg };
    border-radius: ${ ({ theme }) => theme.borderRadius.topRoundedXl };

    ${ media.mobile } {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const CategoryBox = styled.div`
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`