import PostcastList from "../components/PodcastList";
import NewPodcast from "../components/NewPodcast";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PodcastContainer.css';
import usePersistedState from "../components/usePersistedState";
import PodcastList from "../components/PodcastList";

const PodcastContainer = ({ isLogin, setIsLogin }) => {

    
    return (
        <div className="nav-bar">
            <ul className="nar-ul">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <li><Link to='/account'><button>{isLogin ? "Account" : "Sign Up"}</button></Link></li>
                <li><Link to='/login'><button>Login</button></Link></li>
            </ul>
        </div>
    );
}

export default PodcastContainer;