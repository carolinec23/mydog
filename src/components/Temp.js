import React from 'react';
import styled from 'styled-components';
import DisplayLottie from './DisplayLottie';
import AnimationData from '../images/lottie/under-construction.json';

const Container = styled.div`
    background-color: #EBC877;
    max-width: 100%;
    min-height: 100vh;
    padding: 4em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const AnimationWrapper = styled.div`
    min-width: 70%;

    @media screen and (max-width: 768px) {
        width: 100%; 
    }
`;

const Animation = styled(DisplayLottie)`
`;

const Temp = () => {
    return (
        <Container>
            <AnimationWrapper className="content">
                <Animation className="content-inner" animation={AnimationData} />
            </AnimationWrapper>
        </Container>
    )
}

export default Temp
