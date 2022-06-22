import Episode from './Episode.js'
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import '../containers/Explore.css'


const Podcast = ({ podcast, deletePodcast, showEpisode }) => {

  const handleDeletePodcast = () => {
    deletePodcast(podcast.id);
  };

  const handleShowEpisodes = () => {
    showEpisode(podcast.id)
  }

  return (
    <div>
      <h3 id="podcast-title">{podcast.title}</h3>
      <ul className="podcast-ul">
        <label className="podcast-desc">Description: </label>
        <li>{podcast.description}</li>
        <br />
        <label className="podcast-contentNote">Content note: </label>
        <li>{podcast.contentNote}</li>
        <br />

        <label className="podcast-category">Podcast category: </label>
        <li>{/*<Link to={`/explore/${podcast.category}`}>*/} {podcast.category}{/*</Link>*/}</li>
        <br />

        <label className="podcast-rating">Podcast rating: </label>
        <li>{podcast.rating}/5</li>
        <br />

        <label className="podcast-sources">Podcast sources: </label>
        <li>{podcast.sources}</li>
        <br />

      </ul>
      <div className="podcast-btns">
        <button onClick={handleDeletePodcast} id="delete-btn" >Delete</button>
        <button onClick={handleShowEpisodes}>Episodes</button>
      </div>
    </div>
  );
};

export default Podcast;
