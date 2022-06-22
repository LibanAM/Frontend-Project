import { useEffect, useState } from "react";
import NewPodcast from "../components/NewPodcast";
import PodcastList from "../components/PodcastList";
import EpisodeList from "../components/EpisodeList";
import "./Explore.css";
import { Link, Outlet } from 'react-router-dom';
import NewEpisode from "../components/NewEpisode";



const Explore = () => {
  //  adding and removing podcasts

  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/podcasts")
      .then((response) => response.json())
      .then((data) => setPodcasts(data));
  }, []);

  const postPodcast = (newPodcast) => {
    fetch("http://localhost:8080/podcasts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPodcast)
    })
      .then((response) => response.json())
      .then((data) => setPodcasts([...podcasts, data]));
  };

  const deletePodcast = (id) => {
    fetch("http://localhost:8080/podcasts/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setPodcasts(podcasts.filter((podcast) => podcast.id !== id));
  };

  // Adding and removing episodes

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/episodes")
      .then((response) => response.json())
      .then((data) => setEpisodes(data));
  }, []);

  const postEpisode = (newEpisode) => {
    fetch("http://localhost:8080/episodes", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newEpisode)
    })
      .then((response) => response.json())
      .then((data) => setEpisodes([...episodes, data]));
      window.location.reload(true)
  };

  const deleteEpisode = (id) => {
    fetch("http://localhost:8080/episodes/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    setEpisodes(episodes.filter((episode) => episode.id != episode));
    window.location.reload(true);
  };



  let [episodeList, setEpisodeList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);


  const showEpisode = (id) => {
    let foundPodcasts = podcasts.filter(podcast => podcast.id == id)
    // console.log(podcasts)
    // console.log(id)
    let foundPodcast = foundPodcasts[0];
    let foundEpisodes = foundPodcast.podcastEpisodes;
    if (episodeList.length != 0) {
      episodeList = []
    }
    setEpisodeList(foundEpisodes)
    console.log(foundEpisodes)
    if (foundEpisodes.length == 0 ) {
      alert("This podcast has no episodes!")
    } else {
      setIsOpen(!isOpen);
      window.scrollTo(0, 0)
    }
  };

  const closePopup = (arg) => {
    setIsOpen(false);
  }





  return (
    <>
      {/* <h2>Explore</h2> */}

      {isOpen && <button className="btn-close" onClick={closePopup}>x</button>}
      {isOpen && <div id="episodePopup">
        {isOpen && <EpisodeList
          episodes={episodes}
          deleteEpisode={deleteEpisode}
          showEpisode={episodeList} />}
      </div>}

      <PodcastList
        podcasts={podcasts}
        deletePodcast={deletePodcast}
        showEpisode={showEpisode}
      />








      {/* catagories display list */}
      <div className="explore-categories">
        <h2>Explore by categories</h2>
        <ul>
          <li><Link to='/explore/comedy'>Comedy</Link></li>
          <li><Link to='/explore/Family'>Family</Link></li>
          <li><Link to='/explore/Factual'>Factual</Link></li>
          <li><Link to='/explore/Sport'>Sports</Link></li>
          <li><Link to='/explore/Business'>Business</Link></li>
          <li><Link to='/explore/Health'>Health</Link></li>
          <li><Link to='/explore/TrueCrime'>True Crime</Link></li>
        </ul>

        <Outlet />
      </div>

      <NewPodcast postPodcast={postPodcast} />
      <NewEpisode postEpisode={postEpisode} podcasts={podcasts} />


    </>
  );
};

export default Explore;
