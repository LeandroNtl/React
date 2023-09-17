import StyledContainer from "./style"


const Container = ({ children, direction, justify, align, background, width, height, border, margin }) => {
    return (
        <StyledContainer direction={direction} justify={justify} align={align} background={background} width={width} height={height} border={border} margin={margin}>
            {children}
        </StyledContainer>
    );
};

export default Container;