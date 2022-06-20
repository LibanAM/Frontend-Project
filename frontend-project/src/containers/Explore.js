import { useEffect, useState } from "react";
import PodcastList from "../components/PodcastList";



const Explore = () => {

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

    return (
        <>
            <h2>Explore</h2>
            <PodcastList podcasts={podcasts} />

        </>
    );
}

export default Explore;