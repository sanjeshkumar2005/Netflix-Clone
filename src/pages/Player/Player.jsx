import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [apiData, setApiData] = useState({
        name: "",
        key: "",
        published_at: "",
        type: ""
    });
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDE2NzRhZmZkYjgzODY2Mjc5NGRmMjRkYmUzYjFhNyIsIm5iZiI6MTc3OTgwMzEzMC44ODcsInN1YiI6IjZhMTVhM2ZhYTk3ZjE3OTc4MjM1YTdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cE8yIP0cLjCj_0j-ItV2PBRy1yjd3fUT8cxWXwdoJ3U'
        }
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results[0]))
            .catch(err => console.error(err));
    }, []);

    return (

        <div className='player'>
            <img src={backArrow} alt="" onClick={() => { navigate(-2) }} />
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="Avatar: The Last Airbender | Official Trailer | Netflix" frameborder="0" allowfullscreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at}</p>
                <h2>{apiData.name}</h2>
                <p>{apiData.type}</p>
            </div>
        </div>
    )
}

export default Player