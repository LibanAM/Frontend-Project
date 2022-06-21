import "../containers/Explore.css";

const Episode = ({ episode, deleteEpisode }) => {
  return (
    <>
      <div class="pop-up">
        <ul class="pop-up-inner">
          <h3>{episode.name}</h3>
          <li>Description: {episode.description}</li>
          <li>Duration: {episode.duration}</li>
          {/* <p>Contributors: {episode.contributors.name}</p>  */}
        </ul>
      </div>
    </>
  );
};

export default Episode;
