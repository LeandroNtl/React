import { useParams } from 'react-router-dom';

import Form from '../../components/Form';

const Avaliate = () => {

    // pegando a url da pagina
    const { id } = useParams();

    return (
        <>
            <Form id={id} />
        </>
    );
};

export default Avaliate;