import { Link } from "react-router-dom";
import usePersistedState from "./usePersistedState";
import {useEffect, useState} from "react";
import {IoMdHeartDislike} from 'react-icons/io';
import PopupEpisodes from "./PopupEpisodes";


const RecommendList = ({currentPodCastAcc, setCurrentPodCastAcc}) => {
    


    const date = new Date();
    const [recommendList, setRecommendList] = usePersistedState('recommendList', currentPodCastAcc.recommendedPodcasts);
    const [currentPodcast, setCurrentPodcast] = usePersistedState('currentPodcast', []);


    // for pop up window for the episodes
    const [isOpen, setIsOpen] = usePersistedState('isOpen', false);

    // dislike the recommended podcast
    const handleDislikeRPodcast = (id) => {
        
        // update backend database
        fetch(`http://localhost:8080/users/deleterec/${currentPodCastAcc.id}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" }
        })

        // update front end hooks
        const updatedAcc = {
            id:currentPodCastAcc.id,
            username:currentPodCastAcc.username,
            password:currentPodCastAcc.password,
            email:currentPodCastAcc.email,
            watchedEpisodes:currentPodCastAcc.watchedEpisodes,
            recommendedPodcasts:currentPodCastAcc.recommendedPodcasts.filter(p => p.id != id),
            admin:currentPodCastAcc.admin
        }

        setCurrentPodCastAcc(updatedAcc);

    }


    // show episodes of the recommended podcast
    const handlePopup = (id) => {
        if(!isOpen){
            fetch("http://localhost:8080/podcasts/" + id)
            .then(response => response.json())
            .then(data => setCurrentPodcast(data))
        }
        setIsOpen(!isOpen);
    }


    const rListMap = currentPodCastAcc.recommendedPodcasts.map(p => {
        return (
            <div className="single-podcast">
                
                <h3>{p.title}</h3>
                    <ul>
                        <li>Content note: {p.contentNote}</li>
                        <li>Category: {p.category}</li>
                        <li>Description: {p.description}</li>
                        <li>Rating: {p.rating}/5</li>
                    </ul>
                <button onClick={() => handleDislikeRPodcast(p.id)}><IoMdHeartDislike/></button>
                <button onClick={() => handlePopup(p.id)}>Episodes</button>
                
                {isOpen && <PopupEpisodes content={currentPodcast} 
                                          handleClose={handlePopup}
                                          currentPodCastAcc={currentPodCastAcc}
                                          setCurrentPodCastAcc={setCurrentPodCastAcc} />}

            </div>
        );
    })
        
   



    return (
        <div className="recommended-container">
            <h3>{date.toLocaleDateString()}</h3>
            <div className="recommend-list">
                
                {rListMap}
                
            </div>
            
        </div>
    );
}

export default RecommendList;