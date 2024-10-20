import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Contuct from '../Conturct/Contuct';
import Product from '../Product/Product';
import Team from '../Team/Team';
import Features from '../Features/Features';
import Testmonial from '../Testmonial/Testmonial';

import Service from '../Service/Service';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>



            <About></About>

            <Contuct></Contuct>
            <Product></Product>

            <Team></Team>
            <Features></Features>
            <Testmonial></Testmonial>


        </div>
    );
};

export default Home;