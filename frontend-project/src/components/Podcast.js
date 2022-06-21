import EpisodeList from './EpisodeList.js'

const Podcast = ({ podcast, deletePodcast, showEpisode }) => {
  
  const handleDeletePodcast = () => {
    deletePodcast(podcast.id);
  };

  const handleShowEpisodes = () => {
    showEpisode(podcast.id)
    
  }

  return (
    <div>
      <ul>
        <h3>{podcast.title}</h3>
        <li>Content note: {podcast.contentNote}</li>
        <li>Category: {podcast.category}</li>
        <li>Description: {podcast.description}</li>
        <li>Rating: {podcast.rating}/5</li>
        {/* <p>{podcast.podcastEpisodes}</p> */}
        {/* <EpisodeList/> */}
        <button onClick={handleDeletePodcast}>Delete</button>
        <button onClick={handleShowEpisodes}>Episodes</button>

      </ul>
    </div>
  );
};

export default Podcast;
