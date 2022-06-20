const Episode = () =>{
    return(
        <div>
            <h3>{episode.name}</h3>
            <p>Description: {episode.description}</p>
            <p>Duration: {episode.duration}</p>
        </div>
    );
}

export default Episode;