import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data.js'

const TitleCards = ({ title, category }) => {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDE2NzRhZmZkYjgzODY2Mjc5NGRmMjRkYmUzYjFhNyIsIm5iZiI6MTc3OTgwMzEzMC44ODcsInN1YiI6IjZhMTVhM2ZhYTk3ZjE3OTc4MjM1YTdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cE8yIP0cLjCj_0j-ItV2PBRy1yjd3fUT8cxWXwdoJ3U'
        }
    };
    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, []);

    return (
        <div className='title-cards'>
            <h2>{title ? title : 'Popular On Netflix'}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return (
                        <div className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="image" />
                            <p>{card.original_title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TitleCards