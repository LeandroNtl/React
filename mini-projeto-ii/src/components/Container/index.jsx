import { styled } from "styled-components";

const Container = styled.div`
    width: ${({ width }) => width || "100%"};
    min-height: 100vh;

    display: flex;
    flex-direction: ${({ flexDirection }) => flexDirection || "row"};
    align-items: ${({ alignItems }) => alignItems || "center"};
    justify-content: ${({ justifyContent }) => justifyContent || "center"};

    border: ${({ border }) => border || "none"};
`;

export default Container;