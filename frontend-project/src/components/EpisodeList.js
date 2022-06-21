import Episode from "./Episode";

const EpisodeList = ({ deleteEpisode, showEpisode }) =>{

    const episodesComponents = showEpisode.map((episode, index) =>{
            return <Episode key = {index} episode = {episode} deleteEpisode={deleteEpisode} />
        })

    return(
        <>
        {episodesComponents}
        </>
    );
}

export default EpisodeList;