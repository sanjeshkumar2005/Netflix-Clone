import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_caption from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'


const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <div className="hero">
                <img src={hero_banner} alt="hero banner" className='hero-background' />
                <div className="hero-caption">
                    <img src={hero_caption} alt="" className='caption-img' />
                    <p>Discovering his ties to a secret ancestral mission, a young man embarks on a thrilling adventure to save his family and protect his future.</p>
                    <div className="hero-btns">
                        <button className='btn'><img src={play_icon} alt="" />Play</button>
                        <button className='btn btn-dark'><img src={info_icon} alt="" />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title="Trending Now" category={'top_rated'} />
                <TitleCards title="Only On Netflix" category={'popular'} />
                <TitleCards title="Top Picks For You" category={'upcoming'} />
            </div>
            <Footer />
        </div>
    )
}

export default Home