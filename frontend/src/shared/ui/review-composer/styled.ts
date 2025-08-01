import styled from "styled-components";

export const ReviewComposerWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 0;
`;

export const ReviewTextareaBox = styled.textarea`
    flex: 1;
    min-height: 60px;
    max-height: 120px;
    padding: 1rem 1.5rem;
    border: 2px solid ${ ({ theme }) => theme.colors.gray300 };
    border-radius: ${ ({ theme }) => theme.borderRadius.lg };
    font-size: ${ ({ theme }) => theme.fontSizes.md };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT400 };
    background: ${ ({ theme }) => theme.colors.white };
    resize: none;
    transition: border-color 0.2s ease;

    &:focus {
        outline: none;
        border-color: ${ ({ theme }) => theme.colors.primary400 };
    }

    &::placeholder {
        color: ${ ({ theme }) => theme.colors.gray500 };
    }
`;

export const ReviewSubmitButtonBox = styled.button`
    padding: 0.8rem 1.5rem;
    background: ${ ({ theme }) => theme.colors.primary600 };
    color: ${ ({ theme }) => theme.colors.white };
    border: none;
    border-radius: ${ ({ theme }) => theme.borderRadius.lg };
    font-size: ${ ({ theme }) => theme.fontSizes.sm };
    font-family: ${ ({ theme }) => theme.fontFamilies.SUIT600 };
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;

    &:hover {
        background: ${ ({ theme }) => theme.colors.primary700 };
        transform: translateY(-1px);
    }

    &:disabled {
        background: ${ ({ theme }) => theme.colors.gray400 };
        cursor: not-allowed;
        transform: none;
    }
`;