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
        <div className="newForm">
            <form onSubmit={handleFormSubmit}>
                <h3>Add a new episode: </h3>
                <input
                    type="text"
                    placeholder="Episode name"
                    name="name"
                    onChange={handleChange}
                    value={stateEpisode.name}
                    required />
                <input
                    type="text"
                    placeholder="Episode description"
                    name="description"
                    onChange={handleChange}
                    value={stateEpisode.description}
                    required />

                <input
                    type="text"
                    placeholder="Episode duration"
                    name="duration"
                    onChange={handleChange}
                    value={stateEpisode.duration}
                    required />
                <input
                    type="Date"
                    placeholder="Episode posted"
                    name="datePosted"
                    onChange={handleChange}
                    value={stateEpisode.datePosted}
                    required />

                <select name="podcast"
                    onChange={handlePodcast}
                    required>
                    <option value="">Select a podcast</option>
                    {podcastOptions}
                </select>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default NewEpisode;