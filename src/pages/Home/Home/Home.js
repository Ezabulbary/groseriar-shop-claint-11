import React from 'react';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Categories from '../Categories/Categories';
import Contact from '../Contact/Contact';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div className='container'>
            <Bannar></Bannar>
            <Categories></Categories>
            <Inventories></Inventories>
            <About></About>
            <Contact></Contact>
        </div>
    );
};

export default Home;