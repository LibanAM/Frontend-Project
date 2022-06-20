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
        <form onSubmit={handleSubmit}>
            <h3>Add a new podcast: </h3>
            <input type="text"
                placeholder="Podcast Title"
                name="title"
                onChange={handleChange}
                value={statePodcast.title} />
            {/* <input type="text"
                placeholder="Podcast content note"
                name="contentNote"
                onChange={handleChange}
                value={statePodcast.contentNote} /> */}
                <select size={3} multiple>
                    <option>N/A</option>
                    <option>Gambling</option>
                    <option>Violence</option>
                    <option>Death</option>
                </select>
            <input type="text"
                placeholder="Podcast description"
                name="description"
                onChange={handleChange}
                value={statePodcast.description} />
            <input type="text"
                placeholder="Podcast category"
                name="category"
                onChange={handleChange}
                value={statePodcast.category} />
            <input type="text"
                placeholder="Podcast rating"
                name="rating"
                onChange={handleChange}
                value={statePodcast.rating} />
            <input type="text"
                placeholder="Podcast sources"
                name="sources"
                onChange={handleChange}
                value={statePodcast.sources} />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewPodcast;