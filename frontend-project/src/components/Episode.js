const Episode = ({episode, deleteEpisode}) => {
    
    // const perEpisode = () => {
    //     for(let i = 0; i <= episode.length; i++){
            
    //         <>
    //         <div>
    //             <h3>{episode[i].name}</h3>
    //             <p>Description: {episode[i].description}</p>
    //             <p>Duration: {episode[i].duration}</p>
    //             {/* <p>Contributors: {episode.contributors.name}</p> */}
    //         </div>
    //         </> 
    //     }
    // }


    return(
        <>
        <div>
            <h3>{episode.name}</h3>
            <p>Description: {episode.description}</p>
            <p>Duration: {episode.duration}</p>
            {/* <p>Contributors: {episode.contributors.name}</p>  */}
        </div>
        {/* {perEpisode} */}
        </>
    );
}

export default Episode;