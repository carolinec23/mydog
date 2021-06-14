import React from 'react';
import { SliderData } from '../data/SliderData';
import { ContentData, ContentDataTwo } from '../data/ContentData';
import Hero from '../components/Hero';
import Content from '../components/Content';

const Home = () => {
    return (
        <div className="content">
            <Hero slides={SliderData}/>
            <Content {...ContentData}/>
            <Content {...ContentDataTwo}/>
        </div>
    )
}

export default Home;
