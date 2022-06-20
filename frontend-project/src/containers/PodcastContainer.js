import PostcastList from "../components/PodcastList";
import NewPodcast from "../components/NewPodcast";
import { useState, useEffect } from 'react';

const PodcastContainer = () => {
    
    const [podcasts, setPodcasts] = useState([]);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:8080/podcasts')
        .then(response => response.json())
        .then(data => setPodcasts(data))
    }, [])



    return(
        <div>
            <ul>
                <li><Link to='/'></Link>Home</li>
                <li><Link to='/explore'></Link>Explore</li>
                <li><Link to='/pricing'></Link>Pricing</li>
                <li><Link to='/account'></Link><button>{isLogin? "Account": "Sign Up"}</button></li>
                <li><Link to='/login'></Link><button>Login</button></li>
            </ul>
            
        </div>
    );
}

export default PodcastContainer;