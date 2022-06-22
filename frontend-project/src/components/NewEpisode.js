import { useState } from "react";

const NewEpisode = ({ podcasts, postEpisode, contributors }) => {

    const [stateEpisode, setStateEpisode] = useState(
        {
            name: "",
            description: "",
            duration: "",
            datePosted: Date,
            podcast: null,
            // contributors: ""
        }
    )

    const podcastOptions = podcasts.map((podcast, index) => {
        return <option key={index} value={podcast.id}>{podcast.title}</option>
    })

    const handleChange = (event) => {
        console.log(event);
        let propertyName = event.target.name;
        let copiedEpisode = { ...stateEpisode };
        copiedEpisode[propertyName] = event.target.value;
        setStateEpisode(copiedEpisode)
    }

    const handlePodcast = (event) => {
        const podcastId = parseInt(event.target.value);
        const selectedPodcast = podcasts.find(podcast => podcast.id === podcastId);
        let copiedEpisode = { ...stateEpisode }
        copiedEpisode.podcast = selectedPodcast
        setStateEpisode(copiedEpisode)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postEpisode(stateEpisode);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <h3>Add a new episode: </h3>
            <input
                type="text"
                placeholder="Episode Name"
                name="name"
                onChange={handleChange}
                value={stateEpisode.name}
            />
            <input
                type="text"
                placeholder="Episode Description"
                name="description"
                onChange={handleChange}
                value={stateEpisode.description}
            />

            <input
                type="text"
                placeholder="Episode Duration"
                name="duration"
                onChange={handleChange}
                value={stateEpisode.duration}
            />
            <input
                type="text"
                placeholder="Episode Posted"
                name="datePosted"
                onChange={handleChange}
                value={stateEpisode.datePosted}
            />
            
            <select name="podcast"
                onChange={handlePodcast}>
                <option>Select a podcast</option>
                {podcastOptions}
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewEpisode;