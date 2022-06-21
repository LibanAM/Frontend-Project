import Episode from './Episode.js'
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';


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
        <li>Category: <Link to={`/explore/${podcast.category}`}> {podcast.category}</Link></li>
        <li>Description: {podcast.description}</li>
        <li>Rating: {podcast.rating}/5</li>
        <button onClick={handleDeletePodcast}>Delete</button>
        <button onClick={handleShowEpisodes}>Episodes</button>

      </ul>
    </div>
  );
};

export default Podcast;
