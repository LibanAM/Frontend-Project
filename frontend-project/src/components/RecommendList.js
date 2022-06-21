import { Link } from "react-router-dom";
import usePersistedState from "./usePersistedState";
import {useEffect, useState} from "react";

const RecommendList = ({currentPodCastAcc}) => {
    
    // randomly show 4 recommended podcasts from the database
    const [allPodcasts, setAllPodcasts] = useState([]);
    

    // get all the podcasts
    useEffect(()=> {
        fetch("http://localhost:8080/podcasts")
        .then(response => response.json())
        .then(data => setAllPodcasts(data))
    }, [])

    const randomRecommendPodcasts = [];
    
    for (let i=0; i < 4; i++){
        let chosenIndex = Math.floor(Math.random() * 7) ;
        randomRecommendPodcasts.push(allPodcasts[chosenIndex]);
    }

    const [recommendList, setRecommendList] = usePersistedState('recommendList', randomRecommendPodcasts);

    




    return (
        <>
            <p>hi</p>
            <p>hi from recommended podcasts</p>
            <p>show something</p>
        </>
    );
}

export default RecommendList;