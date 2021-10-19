import React from 'react';
import Banner from '../Banner/Banner';
import Choose from '../Choose/Choose';
import News from '../News/News';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div className="mt-5">
            <Banner></Banner>
            <Service></Service>
            <Choose></Choose>
            <News></News>
        </div>
    );
};

export default Home;