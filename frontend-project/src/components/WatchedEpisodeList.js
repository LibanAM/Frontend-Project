import usePersistedState from "./usePersistedState";
import {useEffect, useState} from 'react';

const WatchedEpisodeList = ({currentPodCastAcc, setCurrentPodCastAcc}) => {
    
    const [watchedEpisodes, setWatchedEpisodes] = usePersistedState('watchedEpisodes',[]);

    useEffect(() => {
        fetch(`http://localhost:8080/users/${currentPodCastAcc.id}`)
        .then(response => response.json())
        .then(data => setCurrentPodCastAcc(data))

        setWatchedEpisodes(currentPodCastAcc.watchedEpisodes);
    },[currentPodCastAcc])


    const handleUnwatch = (id) => {
        // update backend database
        fetch(`http://localhost:8080/users/deletewatched/${currentPodCastAcc.id}/${id}`, 
            {
                method:'DELETE',
                headers: { "Content-Type": "application/json" }
            }
        )

        // update local front end
        setWatchedEpisodes(prevs => prevs.filter(e => e.id != id))
    }

    const episodesMap = watchedEpisodes.map(e => {
        return (
            <div className="single-episodes-container">
                <h3>{e.name}</h3>
                <ul>
                    <li>{e.datePosted} {e.duration} minutes</li>
                    <li>Description 📖 {e.description}</li>
                    
                </ul>
                <button onClick={() => handleUnwatch(e.id)}>Unwatch</button>
            </div>

        );
    })



    
    return (
        <div className="watch-episodes-container">
            <h3>Recently Watched</h3>
            {episodesMap}

        </div>
    );
}

export default WatchedEpisodeList;