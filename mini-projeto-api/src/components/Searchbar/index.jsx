import { SearchbarContainer, SearchbarInput, SearchbarButton, ButtonIcon } from './style';


const Searchbar = (props) => {

    return (
        <SearchbarContainer>
            <SearchbarInput onChange={props.onChange} value={props.value} placeholder="Search for an album..." />
            <SearchbarButton onClick={props.onClick}>
                <ButtonIcon src={props.icon} alt="search" />
            </SearchbarButton>
        </SearchbarContainer>
    );
};

export default Searchbar;