
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaGraph = ({ data }) => {
    
    return (
        <PolarArea data={data} />
    );
};

export default PolarAreaGraph;