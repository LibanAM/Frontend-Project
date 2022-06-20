import { useEffect, useState } from "react";
import NewPodcast from "../components/NewPodcast";
import PodcastList from "../components/PodcastList";



const Explore = () => {

//  adding and removing podcasts

    const [podcasts, setPodcasts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/podcasts')
            .then(response => response.json())
            .then(data => setPodcasts(data))
    }, [])

    const postPodcast = (newPodcast) => {
        fetch('http://localhost:8080/podcasts',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newPodcast)
            })
            .then(response => response.json())
            .then(data => setPodcasts([...podcasts, data]))
    }

    const deletePodcast= (id)=> {
        fetch('http://localhost:8080/podcasts' + id, {
            method:"DELETE",
            headers:{"Content-Type": "application/json"}
        })
        setPodcasts(podcasts.filter(podcast => podcast.id != podcast))
    }

    // Adding and removing episodes

    const [episodes, setEpisodes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8080/episodes')
        .then(response => response.json())
        .then(data => setEpisodes(data))
    }, [])

    const postEpisode = (newEpisode) => {
        fetch('http://localhost:8080/episodes',
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newEpisode)
            })
            .then(response => response.json())
            .then(data => setEpisodes([...episodes, data]))
    }

    const deleteEpisode= (id)=> {
        fetch('http://localhost:8080/episodes' + id, {
            method:"DELETE",
            headers:{"Content-Type": "application/json"}
        })
        setEpisodes(episodes.filter(episode => episode.id != episode))
    }

    return (
        <>
            <h2>Explore</h2>
            <NewPodcast postPodcast={postPodcast}/>
            <PodcastList podcasts={podcasts} deletePodcast={deletePodcast} />

        </>
    );
}

export default Explore;