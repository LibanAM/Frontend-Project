import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

import { useNavigate } from 'react-router-dom';
import './Account.css';


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
                <li>
                    <Link to='/account/recommended'>Today's Recommended Podcasts For you</Link>
                    <button onClick={handleGetRecommended} className="showmore-recommendation-button">show more</button>
                </li>
                <li><Link to='/account/watched'>Watched Episodes</Link></li>
            </ul>

            <Outlet />


            <div className="more-categories-container">
                <h2 className="categories-title">
                    <Link to={{pathname:'/explore', hash:'#explore-categories'}} className="more-categories-title">More categories
                    </Link>
                </h2>
                
                <ul className="categories-ul">
                    <li><div className="category-comedy"><a href="/explore/Comedy">Comedy</a></div></li>
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