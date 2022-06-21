import Episode from "./Episode";

const EpisodeList = ({episodes, deleteEpisode, showEpisode}) =>{
    
    const episodesComponents = showEpisode.map(episode =>{
        return <Episode key = {episode.id} episode = {episode} deleteEpisode={deleteEpisode} showEpisode={showEpisode}/>
    })

    return(
        <>
        {episodesComponents}
        </>
    );
}

export default EpisodeList;