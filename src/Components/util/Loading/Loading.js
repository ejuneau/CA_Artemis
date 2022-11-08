import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Loading.css';

export default function Loading() {

    const [ loadingPath, setLoadingPath ] = useState("");
    const [ loadingAuthor, setLoadingAuthor ] = useState("");
    const [ counter, setCounter ] = useState(0);

    const handleCounterClick = () => {
        setCounter(counter + 1);
    }

    useEffect(() => {
        const getLoadingPath = async () => {
            return axios
            .get("https://api.giphy.com/v1/gifs/random?api_key=naqCPk8aRveXhFyIthhApbThXFkwjF90&tag=loading&rating=g")
            .then(response => {
                setLoadingPath(response.data.data.images.original.mp4);
                setLoadingAuthor(response.data.data.username);
            })
        }
        getLoadingPath();
    }, [counter]);
    return (
    <div className="loading">
        <video src={loadingPath} alt={"Loading GIF from GIPHY user " + loadingAuthor} autoPlay loop />
        <p>Your feed is loading! In the meantime please enjoy this random, G-rated, "Loading"-tagged GIF uploaded to <a href="giphy.com">GIPHY.com</a> by {loadingAuthor ? loadingAuthor : "an anonymous but undoubtedly handsome author"}</p>
        <p className="button" onClick={handleCounterClick}>Fetch new GIF! {counter}</p>
    </div>
    )

}

