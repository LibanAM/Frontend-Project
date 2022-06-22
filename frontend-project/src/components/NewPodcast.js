import { useState } from "react";
const NewPodcast = ({ postPodcast }) => {

    const [statePodcast, setStatePodcast] = useState(
        {
            title: "",
            contentNote: "",
            description: "",
            category: "",
            rating: 0,
            sources: "",
            podcastEpisodes: null
        }
    )

    const handleChange = (event) => {
        console.log(event)
        let propertyName = event.target.name;
        let copiedPodcast = { ...statePodcast }
        copiedPodcast[propertyName] = event.target.value;
        setStatePodcast(copiedPodcast)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postPodcast(statePodcast)
    }

    return (
        <div className="newForm">
            <form onSubmit={handleSubmit}>
                <h3>Add a new podcast: </h3>
                <label>Podcast title</label>
                <input type="text"
                    placeholder="Podcast title"
                    name="title"
                    onChange={handleChange}
                    value={statePodcast.title} required />
                <label>Podcast content note</label>
                <input type="text"
                    placeholder="Podcast content note"
                    name="contentNote"
                    onChange={handleChange}
                    value={statePodcast.contentNote} required />
                <label>Podcast description</label>
                <input type="text"
                    placeholder="Podcast description"
                    name="description"
                    onChange={handleChange}
                    value={statePodcast.description} required />
                <label>Podcast category</label>
                <input type="text"
                    placeholder="Podcast category"
                    name="category"
                    onChange={handleChange}
                    value={statePodcast.category} required />
                <label>Podcast rating</label>
                <input type="number" step="0.1"
                    min="0" max="5"
                    placeholder="Podcast rating"
                    name="rating"
                    onChange={handleChange}
                    value={statePodcast.rating} required />
                <label>Podcast sources</label>
                <input type="text"
                    placeholder="Podcast sources"
                    name="sources"
                    onChange={handleChange}
                    value={statePodcast.sources} required />
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default NewPodcast;