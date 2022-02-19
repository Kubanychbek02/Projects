import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: ${({ bg }) => bg};
    background-color:${({theme}) => theme.color.accent};

    padding: 20px;

    h1 {
        font-size: ${({theme}) => theme.fontSize.accent};
    }

    @media (max-width: 900px) {
        h1{
            color: red;
        }
    }
`;

export const Title = styled.h1`
    color: yellow;
`