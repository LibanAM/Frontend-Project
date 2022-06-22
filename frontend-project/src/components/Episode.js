import "../containers/Explore.css";

const Episode = ({ episode, deleteEpisode }) => {

  const handleDelete = () => {
    deleteEpisode(episode.id)
  }

  // const contributorsList = console.log(contributors)


  return (
    <>
      <div className="episodes" id={`episode-${episode.id}`}>
        <ul id="box">
          <h3>{episode.name}</h3>
          <li>Description: {episode.description}</li>
          <li>Duration: {episode.duration} minutes</li>
          <li>Date Posted: {episode.datePosted}</li>
          <button onClick={handleDelete} id="delete-btn">Delete Episode</button>
        </ul>
      </div>
    </>
  );
};

export default Episode;
