import Episode from "./Episode";

const EpisodeList = ({ deleteEpisode, showEpisode, togglePopup }) => {

    const episodesComponents = showEpisode.map((episode, index) => {
        return <Episode key={index} 
        episode={episode} 
        deleteEpisode={deleteEpisode} 
        togglePopup={togglePopup} />
    })

    return (
        <>
            {episodesComponents}
        </>
    );
}

export default EpisodeList;