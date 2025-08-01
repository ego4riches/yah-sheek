import { flexCenter } from "@/shared";
import styled from "styled-components";

export const MediaUploadWrapper = styled.div`
    margin-bottom: 1.5rem;
`;

export const MediaUploadButtonBox = styled.label`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.2rem;
    background: ${ ({ theme }) => theme.colors.gray100 };
    border: 2px solid ${ ({ theme }) => theme.colors.gray300 };
    border-radius: ${ ({ theme }) => theme.borderRadius.lg };
    font-size: ${ ({ theme }) => theme.fontSizes.sm };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT500 };
    color: ${ ({ theme }) => theme.colors.gray700 };
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background: ${ ({ theme }) => theme.colors.primary200 };
        border-color: ${ ({ theme }) => theme.colors.primary400 };
        color: ${ ({ theme }) => theme.colors.primary700 };
    }

    input {
        display: none;
    }
`;

export const MediaPreviewWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 1rem;
`;

export const MediaPreviewBox = styled.div`
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: ${ ({ theme }) => theme.borderRadius.md };
    overflow: hidden;
    border: 2px solid ${ ({ theme }) => theme.colors.gray300 };
`;

export const PreviewImageBox = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const PreviewVideoBox = styled.div`
    ${ flexCenter };
    height: 100%;
    background: #f0f0f0;
    color: #666;
`;

export const MediaRemoveButtonBox = styled.button`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    background: ${ ({ theme }) => theme.colors.danger };
    color: ${ ({ theme }) => theme.colors.white };
    border: none;
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.8rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${ ({ theme }) => theme.colors.danger };
        transform: scale(1.1);
    }
`;