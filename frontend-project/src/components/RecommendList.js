import { Link } from "react-router-dom";
import usePersistedState from "./usePersistedState";
import {useEffect, useState} from "react";
import {IoMdHeartDislike} from 'react-icons/io';
const RecommendList = ({currentPodCastAcc, setCurrentPodCastAcc}) => {
    
    // useEffect(() => {
    //     fetch("http://localhost:8080/users/" + currentPodCastAcc.id)
    //     .then(response => response.json())
    //     .then(data => setCurrentPodCastAcc(data))
    // },[])

    const date = new Date();
    const [recommendList, setRecommendList] = usePersistedState('recommendList', currentPodCastAcc.recommendedPodcasts);


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
    const handleShowEpisodes = () => {
        
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
                <button onClick={() =>handleDislikeRPodcast(p.id)}><IoMdHeartDislike/></button>
                <button onClick={handleShowEpisodes}>Episodes</button>

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