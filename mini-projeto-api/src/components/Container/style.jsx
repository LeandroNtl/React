import { styled } from 'styled-components';

const StyledContainer = styled.div`

    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};

    display: flex;
    flex-flow: ${({ direction }) => direction || 'column wrap'}; 
    justify-content: ${({ justify }) => justify || 'center'};
    align-items: ${({ align }) => align || 'center'};

    color: #000000;
    border: ${({ border }) => border || 'none'};
    border-radius: 10px;
    box-shadow: ${({ border }) => border ? '0px 0px 10px 0px #000000' : 'none'};

    margin: ${({ margin }) => margin || '0'};
    padding: 10px;
    gap: 20px;

`;

export default StyledContainer;