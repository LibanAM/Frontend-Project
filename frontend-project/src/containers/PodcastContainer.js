import PostcastList from "../components/PodcastList";
import NewPodcast from "../components/NewPodcast";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PodcastContainer.css';
import usePersistedState from "../components/usePersistedState";
import PodcastList from "../components/PodcastList";
import picture from "../images/logo603x186.png";


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
            <ul className="nar-ul">
            <div className="nav-logo">
                <a className="logo-there" />
                <span className="resize"> <Link to='/'><img src={picture} alt="JustListenAPI logo" width={150} height={50}/></Link></span>
            </div>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/explore'>Explore</Link></li>
                <li><Link to='/pricing'>Pricing</Link></li>
                <div className="dropdown">
                <button className="dropbtn"> Account</button>
                <div className="dropdown-content" styleleft="left:0">
                    <a><Link to='/account'>{isLogin ? "Account" : "Sign Up"}</Link></a>
                    <a><Link to='/login'>{isLogin ? "Logout" : "Login"}</Link></a>
                </div>
                </div>

                {/* alternative code for drop down -- amber */}
                {/* <li>
                    <a className="nav-dropdown" href="#" role="button" data-bs-toggle="dropdown">Account</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </li> */}

                {/* orginal signing in link code -- amber  */}
                {/* <li><Link to='/account'><button>{isLogin ? "Account" : "Sign Up"}</button></Link></li>
                <li><Link to='/login'><button onClick={handleLogin}>{isLogin ? "Logout" : "Login"}</button></Link></li> */}
            </ul>
        </nav>
    );
}

export default PodcastContainer;