import PostcastList from "../components/PodcastList";
import NewPodcast from "../components/NewPodcast";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PodcastContainer.css';
import usePersistedState from "../components/usePersistedState";
import PodcastList from "../components/PodcastList";


const PodcastContainer = ({ isLogin, setIsLogin, currentPodCastAcc, setCurrentPodCastAcc}) => {


    // handle login button in the navbar
    // if there is user logged in, when click 'log out'
    // set isLogin 'false', set currentp odcast account empty {}
    const handleLogin = (event) => {
        
        
        if(isLogin && currentPodCastAcc.length !=0){
            setIsLogin(!isLogin);
            setCurrentPodCastAcc({});
            console.log(isLogin);
            return;
        }
        
    }
    
    return (
        // was <div> -> <nav>
        <nav className="nav-bar">
            {/* <a>
                <div>
                <img s a="images"lt="JustListen logo"></img>
                </div>
            </a> */}
            <ul className="nar-ul">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/account'><button>{isLogin ? "Account" : "Sign Up"}</button></Link></li>
                <li><Link to='/login'><button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button></Link></li>
            </ul>
        </nav>
    );
}

export default PodcastContainer;