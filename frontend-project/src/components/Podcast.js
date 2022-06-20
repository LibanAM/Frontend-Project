const Podcast = ({podcasts, deletePodcast}) => {

    return(
        <div>
            <h3>{podcasts.title}</h3>
            <p>Title: {podcasts.title}</p>
            <p>Content note: {podcasts.contentNote}</p>
            <p>Description: {podcasts.description}</p>
            <p>Rating: {podcasts.rating}/5</p>
            {/* <p>{podcast.podcastEpisodes}</p> */}
        </div>
    );
}

export default Podcast;