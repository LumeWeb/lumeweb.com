import React from 'react'
import Header from './header/Header';
import Vision from './vision/Vision';
import Whatisweb3 from './whatisweb3/Whatisweb3';
import Powered from './powered/Powered';
import Meme from './meme/Meme';
import Grids from './grid/Grid';
import Socials from './socials/Socials';
import Cto from './cto/Cto';
import Message from './message/Message';
import Footer from './footer/Footer';

function Home() {
    return (
        <div className='home'>
            <Header/>
            <Vision/>
            <Whatisweb3/>
            <Powered/>
            <Meme/>
            <Grids/>
            <Socials/>
            <Cto/>
            <Message />
            <Footer />
        </div>
    )
}

export default Home
