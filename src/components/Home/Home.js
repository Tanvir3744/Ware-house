import React from 'react';
import Banner from './Banner/Banner';
import Items from './Items/Items';
import Location from './Location/Location';
const Home = () => {
    return (
        <div className="all-items">
            <Banner></Banner>
            <Items></Items>
            <Location></Location>
        </div>

    );
}

export default Home;