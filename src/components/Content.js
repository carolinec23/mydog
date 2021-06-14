import React from 'react'
import styled from 'styled-components'
import { Button } from './Button';

const Section = styled.section`
    width: 100%;
    height: 100%;
    //padding: 1rem 0rem;
    background-color: #D9E5D6;

    @media screen and (max-width: 768px) {
        padding: 2rem 0rem;
    }
`;

const Container = styled.section`
    //padding: 1rem calc((100vw - 1300px) / 2);
    padding: 0 calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        padding: 1.5rem calc((100vw - 1300px) / 2);
    } 
`;

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    grid-column: ${({ reverse }) => (reverse ? '2/3' : '1/2')};
    grid-row: 1;

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
    }

    p {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 2;
    }
`;

const ColumnRight = styled.div`
    padding: 1rem 2rem;
    grid-column: ${({ reverse }) => (reverse ? '1/2' : '2/3')};
    grid-row: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        grid-column: 1/2;
        grid-row: 1;
    }

    img {
        width: 100%;
        height: auto;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;
        }
    }
`;

const Content = ( props ) => {
    return (
        <div>
            <Section>
                <Container>
                    <ColumnLeft reverse={props.reverse}>
                        <h1>{props.heading}</h1>
                        <p>{props.paragraphOne}</p>
                        <p>{props.paragraphTwo}</p>
                        <Button to={props.buttonLink} primary='true'>{props.buttonLabel}</Button>
                    </ColumnLeft>
                    <ColumnRight reverse={props.reverse}>
                        <img src={props.image} alt="Lexdog"/>
                    </ColumnRight>
                </Container>
            </Section>
        </div>
    )
}

export default Content;
