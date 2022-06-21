import Episode from "./Episode";

const EpisodeList = ({ deleteEpisode, showEpisode }) =>{

    const printEpisodes = console.log(showEpisode)

    const episodesComponents = showEpisode.map((episode, index) =>{
            return <Episode key = {index} episode = {episode} deleteEpisode={deleteEpisode} />
        })

    return(
        <>
        {/* {console.log(episodesComponents)} */}
        {episodesComponents}
        </>
    );
}

export default EpisodeList;