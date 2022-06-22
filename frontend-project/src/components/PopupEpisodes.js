import './PopupEpisodes.css';

const PopupEpisodes = ({content, handleClose, currentPodCastAcc, setCurrentPodCastAcc}) => {
    
    // add episodes from the recommendation to the watched episodes list
    const handleAddEpisodeToWatch = (id) => {
        fetch(`http://localhost:8080/users/addwatched/${currentPodCastAcc.id}/${id}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        alert("added successfully!")
        
    }

    console.log(content);

    const episodesMap = content.podcastEpisodes.map(e => {
        return (
            <div className="single-episode">
                <h3>{e.name}</h3>
                <ul>
                    <li>{e.datePosted} {e.duration} minutes</li>
                    <li>Description 📖 {e.description}</li>
                    
                </ul>
                <button onClick={() => handleAddEpisodeToWatch(e.id)}>Add to watch 👀</button>
            </div>
        );
    })
    
    return (
        <div className="popup-box">
            <div className="box">
                <div className="close-icon" onClick={handleClose}>x</div>
                {episodesMap}
            </div>
        </div>
    )
}

export default PopupEpisodes;