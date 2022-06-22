import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import RecommendedPodcasts from '../components/RecommendList';
import { useNavigate } from 'react-router-dom';

const Account = ({currentPodCastAcc, setCurrentPodCastAcc}) => {

    const navigate = useNavigate();



    const handleGetRecommended = (event) => {
        event.preventDefault();
        
        navigate('/account/recommended')
        
        if(currentPodCastAcc.recommendedPodcasts.length>=3) return;

        fetch("http://localhost:8080/users/getrec/" + currentPodCastAcc.id,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
            // body: JSON.stringify(currentPodCastAcc.id)
        })

        
        fetch("http://localhost:8080/users/" + currentPodCastAcc.id)
        .then(response => response.json())
        .then(data => setCurrentPodCastAcc(data))
        

    }



    return(
        <div className="account-container">
            <br/>
            <br/>
            <br/>
            <h2><div>Welcome back {currentPodCastAcc.username}!</div></h2>
            <ul>
                <li><Link to='/account/recommended' onClick={handleGetRecommended}>Today's Recommended Podcasts For you </Link></li>
                <li><Link to='/account/watched'>Watched Episodes</Link></li>
            </ul>

            <Outlet />


            <div>
                <h2><Link to={{pathname:'/explore', hash:'#explore-categories'}}>More categories</Link></h2>
                
                <ul>
                    <li><div><a href="/explore/Comedy">Comedy</a></div></li>
                    <li><div><Link to="/explore/Family">Family</Link></div></li>
                    <li><div><Link to="/explore/Factual">Factual</Link></div></li>
                    <li><div><Link to="/explore/Sports">Sports</Link></div></li>
                    <li><div><Link to="/explore/Business">Business</Link></div></li>
                    <li><div><Link to="/explore/Health">Health</Link></div></li>
                    <li><div><Link to="/explore/TrueCrime">True Crime</Link></div></li>
                    <li><div><Link to="/explore">Others</Link></div></li>

                </ul>
            </div>
            

        </div>
        
    );
}

export default Account;