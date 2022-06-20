import Podcast from "./Podcast";


const PodcastList = ({podcasts, deletePodcast}) => {

    const podcastsComponents = podcasts.map(podcast => {
        return <Podcast key = {podcast.id} podcast = {podcast}/>
    })

    return(
        <>
        <h3>List of Podcasts</h3>
        {podcastsComponents}
        </>
    );
}

export default PodcastList;