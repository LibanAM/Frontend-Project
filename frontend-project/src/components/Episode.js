const Episode = ({episodes, deleteEpisode}) =>{
    return(
        <div>
            <h3>{episodes.name}</h3>
            <p>Description: {episodes.description}</p>
            <p>Duration: {episodes.duration}</p>
        </div>
    );
}

export default Episode;