import { styled } from 'styled-components';

const StyledContainer = styled.div`

    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};

    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};

    background-color: ${props => props.background || props.theme.colors.background.primary};
    color: ${props => props.color || props.theme.colors.text.secondary};

    border: ${props => props.border || 'none'};
    border-radius: ${props => props.borderRadius || '0px'};
    box-shadow: ${props => props.boxShadow || 'none'};

    padding: ${props => props.padding || '0px'};
    margin: ${props => props.margin || '0px'};

`;

export default StyledContainer;