import picture from "../images/logo603x186.png";
import './Home.css'

const Home = () => {

    return(
        <>
       <h2>Home</h2>
       <div> <img src={picture} alt="JustListenAPI logo"></img>
       <p>Our podcasts are better</p>
       <p>than our web design</p>
       </div>
       </>
    );
}

export default Home;