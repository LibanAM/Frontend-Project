import { useEffect, useState } from "react";
import NewPodcast from "../components/NewPodcast";
import PodcastList from "../components/PodcastList";
import EpisodeList from "../components/EpisodeList";
import "./Explore.css";
import NewEpisode from "../components/NewEpisode";


import { Link, Outlet } from 'react-router-dom';
import picture from "../images/logo603x186.png";
import GooglePlay from "../images/GooglePlay.png";
import AppStore from "../images/AppStore.png";

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
    if (foundEpisodes.length == 0) {
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
      <div className="explore-categories" id="explore-categories">
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


      <div id="forms">
        <NewPodcast postPodcast={postPodcast} />
        <NewEpisode postEpisode={postEpisode} podcasts={podcasts} />
      </div>

      {/* adding a footer to the page -- amber */}
      <footer id="footer">
        <div id="footer-left-side">
          <div className="logo2">
            <img src={picture} alt="JustListen logo" width={400} height={150}></img>
          </div>
          <p className="random-words">
            Corporis ut aliquid qui molestiae. Sed laborum sunt recusandae
            animi dolore voluptates.
          </p>
          <p className="random-words2">Download for: </p>
          <div id="Download-images">
            <img src={AppStore} alt="Download on the App Store" width="160" height="50" />
            <img src={GooglePlay} alt="Get it on Google Play" width="160" height="50" />
          </div>
          <p className="random-words3">©2022 All rights reserved</p>
        </div>

        <ul className="extra-info">
          <h3>Product</h3>

          <li>
            <a href="#" target="_blank">
              Download
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Pricing
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Locations
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Server
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Countries
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Blog
            </a>
          </li>
        </ul>

        <ul className="extra-info">
          <h3>Company</h3>

          <li>
            <a target="blank" href="#">
              FAQ
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Tutorials
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              About Us
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Careers
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Support
            </a>
          </li>
          <br />
        </ul>

        <ul className="extra-info">
          <h3>Privacy</h3>

          <li>
            <a target="blank" href="#">
              Privacy
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Terms of Use
            </a>
          </li>
          <br />

          <li>
            <a target="blank" href="#">
              Site map
            </a>
          </li>
        </ul>
      </footer>

    </>
  );
};

export default Explore;
