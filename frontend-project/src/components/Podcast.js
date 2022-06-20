const Podcast = ({podcast}) => {

    return(
        <div>
            <h3>{podcast.name}</h3>
            <p>Title: {podcast.title.name}</p>
        </div>
    );
}

export default Podcast;