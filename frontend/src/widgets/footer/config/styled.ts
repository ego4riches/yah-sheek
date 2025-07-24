import styled from "styled-components";

export const FooterBox = styled.footer`
    padding: 1.4rem;
    text-align: center;
    font-size: 1.1rem;
    margin-top: auto;
    color: ${ ({ theme }) => theme.colors.gray700 };
    background-color: ${ ({ theme }) => theme.colors.gray100 };
`