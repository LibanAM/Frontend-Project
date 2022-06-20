const Podcast = ({podcast}) => {

    return(
        <div>
            <h3>{podcast.title}</h3>
            <p>Title: {podcast.title}</p>
            <p>Decription: {podcast.description}</p>
        </div>
    );
}

export default Podcast;