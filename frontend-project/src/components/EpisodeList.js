import Episode from "./Episode";

const EpisodeList = ({episodes, deleteEpisode}) =>{
    
    const episodesComponents = episodes.map(episode =>{
        return <Episode key = {episode.id} episode = {episode}/>
    })

    return(
        <>
        <h3>List of Episodes</h3>
        {episodesComponents}
        </>
    );
}

export default EpisodeList;