const Podcast = ({podcast, deletePodcast}) => {

    return(
        <div>
            <h3>{podcast.title}</h3>
            <p>Title: {podcast.title}</p>
            <p>Content note: {podcast.contentNote}</p>
            <p>Description: {podcast.description}</p>
            <p>Rating: {podcast.rating}/5</p>
            {/* <p>{podcast.podcastEpisodes}</p> */}
        </div>
    );
}

export default Podcast;