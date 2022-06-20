import { useState } from "react";
const NewPodcast = ({postPodcast}) => {

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

    const handleSubmit = (event) => {
        event.preventDefault();
        postPodcast(statePodcast)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Add a new podcast: </h3>
            <input type="text" placeholder="Podcast Title" />
            <input type="text" placeholder="Podcast content note" />
            <input type="text" placeholder="Podcast description" />
            <input type="text" placeholder="Podcast category" />
            <input type="text" placeholder="Podcast rating" />
            <input type="text" placeholder="Podcast sources" />
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewPodcast;