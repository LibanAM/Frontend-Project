import Podcast from "./Podcast";


const PodcastList = ({podcasts, deletePodcast, showEpisode }) => {

    const podcastsComponents = podcasts.map(podcast => {
        return <Podcast key = {podcast.id} podcast = {podcast} deletePodcast={deletePodcast} showEpisode={showEpisode} />
    })

    return(
        <>
        <div className="podcast">
        {podcastsComponents}
        </div>
        </>
    );
}

export default PodcastList;