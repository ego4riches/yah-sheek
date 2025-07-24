import styled from 'styled-components';

export const HeaderBox = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #fffaf0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`

export const LogoBox = styled.div`
    font-size: 1.6rem;
    font-weight: bold;

    a {
        text-decoration: none;
        color: #ff5a5f;
    }
`

export const MenuBox = styled.nav`
    display: flex;
    gap: 1.4rem;

    a {
        text-decoration: none;
        color: #333;
        font-weight: 500;

        &:hover {
            color: #ff5a5f;
        }
    }
`

export const AuthBox = styled.div`
    button,
    a {
        background-color: ${ ({ theme }) => theme.colors.white };
        color: ${ ({ theme }) => theme.colors.black };
        padding: 6px 14px;
        border-radius: 8px;
        font-size: 1.2rem;
        border: none;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            background: #e14b50;
        }
    }
`