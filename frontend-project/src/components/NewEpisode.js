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



    const handleFormSubmit = (event) => {
        event.preventDefault();
        postEpisode(stateEpisode);
    }

    return(
        <form onSubmit={handleSubmit}>
            <h3>Add a new episode: </h3>
            <input 
                type="text" 
                placeholder="Episode Name"/>
            <input type="text" placeholder="Episode Description"/>
            <input type="text" placeholder="Episode Rating"/>
            <select></select>
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewEpisode;