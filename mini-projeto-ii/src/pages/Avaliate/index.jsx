import { useParams } from 'react-router-dom';

const Avaliate = () => {

    // pegando a url da pagina
    const { id } = useParams();

    return (
        <>
            <h1>Avaliate {id}</h1>
        </>
    );
};

export default Avaliate;