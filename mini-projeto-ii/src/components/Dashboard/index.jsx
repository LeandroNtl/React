import { styled } from "styled-components";

import { courses, disciplines, teachers } from "../../data/data";

import PolarAreaGraph from "./PolarAreaGraph";
import VerticalBarGraph from "./VerticalBarGraph";
import RadarGraph from "./RadarGraph";

const DashboardContainer = styled.div`
    min-height: 100vh;

    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: flex-start;

    background-color: #f5f5f5;

    padding: 10px;
`;

const GraphContainer = styled.div`
    width: ${({ width }) => width || "400px"};
    height: ${({ height }) => height || "400px"};
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <GraphContainer width="400px" height="400px">
                <PolarAreaGraph data={courses} />
            </GraphContainer>

            <GraphContainer width="600px" height="400px">
                <VerticalBarGraph data={disciplines} />
            </GraphContainer>

            <GraphContainer>
                <RadarGraph data={teachers} />
            </GraphContainer>
        </DashboardContainer>
    );
};

export default Dashboard;