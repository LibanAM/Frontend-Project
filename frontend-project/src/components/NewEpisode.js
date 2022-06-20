import { useState } from "react";

const NewEpisode = ({postEpisode}) =>{

    const [stateEpisode, setStateEpisode] = useState (
        {
            name: "",
            description:"",
            duration: "",
            datePosted: "",
            podcast: null
        }
    )

    const handleChange = (event) => {
        console.log(event);
        let propertyName = event.target.name;
        let copiedEpisode = {...stateEpisode};
        copiedEpisode[propertyName] = event.target.value;
        setStateEpisode(copiedEpisode)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        postEpisode(stateEpisode);
    }

    return(
        <form onSubmit={handleSubmit}>
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
            <select></select>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewEpisode;