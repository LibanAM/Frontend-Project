const Episode = ({episode, deleteEpisode, showEpisode}) => {

    const emptyEpisodeList = () => {
        if(episode === "") {
            return alert("No episodes")
        } else {

        }
    }

    return(
        <>
        {emptyEpisodeList}
        <div>
            <h3>{episode.name}</h3>
            <p>Description: {episode.description}</p>
            <p>Duration: {episode.duration}</p>
            <p>Contributors: {episode.contributors.name}</p>
        </div>
        </>
    );
}

export default Episode;