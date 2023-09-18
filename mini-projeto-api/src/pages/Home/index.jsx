import Container from "../../components/Container";
import Searchbar from "../../components/Searchbar";
import Api from "../../services/Api";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import cancelar from "../../assets/cancelar.png";
import lupa from "../../assets/pesquisa.png";
import { StyledOption, StyledSelect } from "../../components/Searchbar/style";


const Home = () => {
    
    const API_KEY = ''

    const [search, setSearch] = useState('');
    const [albums, setAlbums] = useState([]);

    const [tags, setTags] = useState([]);
    const [informations, setInformations] = useState([]);

    const [tracks, setTracks] = useState([]);
    const [albumInfo, setAlbumInfo] = useState({});


    const getSearch = async (tag, e) => {

        try {

            if (tag) {
                
                const response = await Api.get(`?method=tag.gettopalbums&tag=${tag}&api_key=${API_KEY}&format=json`);

                const albums = response.data.albums.album;
                const capas = albums.map((album) => album.image[2]['#text']);
                const info = [albums.map(album => album.name), albums.map(album => album.artist.name)];
                setAlbums(capas);
                setInformations(info);

            } else {
                
                const response = await Api.get(`?method=artist.gettopalbums&artist=${search}&api_key=${API_KEY}&format=json`);

                if (response.data.topalbums.album.length > 0) {
                        
                    const albums = response.data.albums.album;
                    const capas = albums.map((album) => album.image[2]['#text']);
                    const info = [albums.map(album => album.name), albums.map(album => album.artist.name)];
                    setAlbums(capas);
                    setInformations(info);

                } else {
                            
                    toast.error('Nenhum album encontrado');
    
                }

            }

        } catch (error) { 

            toast.error('Erro ao buscar albuns');  

        }

    };

    const getTags = async () => {

        try {

            const response = await Api.get(`?method=tag.gettoptags&api_key=${API_KEY}&format=json`);

            const tags = response.data.toptags.tag;
            setTags(tags);

        } catch (error) {

            toast.error('Erro ao buscar tags');

        }

    };

    const getTracks = async (artist, album) => {

        try {

            const response = await Api.get(`?method=album.getinfo&artist=${artist}&album=${album}&api_key=${API_KEY}&format=json`);

            const albumTracks = response.data.album.tracks.track;
            setTracks(albumTracks);
        
        } catch (error) {

            toast.error('Erro ao buscar albuns');

        }

    };

    const getInformations = async (artist, album) => {

        try {

            const response = await Api.get(`?method=album.getinfo&artist=${artist}&album=${album}&api_key=${API_KEY}&format=json`);

            const info = response.data.album;
            setAlbumInfo(info);

        } catch (error) {

            toast.error('Erro ao buscar informações');

        }

    };

    const clear = () => {

        setAlbums([]);
        setInformations({});
        setTracks([]);
        setSearch('');
        setAlbumInfo({});

    };

    if (tags.length === 0) {
        getTags();
    }

    return (
        <>
            <Container direction="row">
                <Searchbar 
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={ albums.length > 0 ? clear : () => getSearch(search) }
                    icon={albums.length > 0 ? cancelar : lupa}
                />
                <StyledSelect onChange={(e) => getSearch(e.target.value)}>
                    <StyledOption value="">Selecione uma tag</StyledOption>
                    {tags.map((tag, index) => (
                        <StyledOption key={index} value={tag.name}>{tag.name}</StyledOption>
                    ))}
                </StyledSelect>
            </Container>
            <ToastContainer />
            <Container direction="row" align="flex-start" margin="20px 0 0 0">
                
                {albumInfo.name ? <Container align="flex-start" justify="flex-start" width="40%" border="1px solid #000">
                    <h2>Nome: {albumInfo.name}</h2>
                    <h3>Artista: {albumInfo.artist}</h3>
                    <h3>Tags: </h3>
                    <ul>
                        {albumInfo.tags.tag.map((tag, index) => (
                            <li key={index}>{tag.name}</li>
                        ))}
                    </ul>
                    {albumInfo.wiki.published ? <h3>Data de lançamento: {albumInfo.wiki.published}</h3> : null}

                    <h3>Músicas: </h3>
                    {tracks.length > 0 ? <Container direction="row wrap" justify="flex-start" border="1px solid #000">
                        {tracks.map((track, index) => (
                            <h4 key={index}>{track.name}</h4>
                        ))}
                    </Container> : null}
                </Container> : null}
               
                <Container direction="row wrap" justify="center">
                    {albums.map((item, index) => (
                        item ? (
                            <img key={index} src={item} alt="capa do album" onClick={() => {
                                getInformations(informations[1][index], informations[0][index]);
                                getTracks(informations[1][index], informations[0][index]);
                            }} />
                        ) : null
                    ))}
                </Container>
            </Container>
        </>
    );
};

export default Home;