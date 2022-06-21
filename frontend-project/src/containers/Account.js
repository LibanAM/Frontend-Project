import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import RecommendedPodcasts from '../components/RecommendList';

const Account = ({currentPodCastAcc}) => {

    return(
        <div className="account-container">
            <h2><div>Welcome back {currentPodCastAcc.username}!</div></h2>
            <ul>
                <li><Link to='/account/recommended'>Recommended Podcasts</Link></li>
                <li><Link to='/account/watched'>Watched Episodes</Link></li>
            </ul>

            <Outlet />


            <div>
                <h2><Link to={{pathname:'/explore', hash:'#explore-bot'}}>More categories</Link></h2>
                
                <ul>
                    <li><div><Link to="/explore">Comedy</Link></div></li>
                    <li><div><Link to="/explore">Family</Link></div></li>
                    <li><div><Link to="/explore">Factual</Link></div></li>
                    <li><div><Link to="/explore">Sports</Link></div></li>
                    <li><div><Link to="/explore">Business</Link></div></li>
                    <li><div><Link to="/explore">health</Link></div></li>
                    <li><div><Link to="/explore">True Crime</Link></div></li>
                    <li><div><Link to="/explore">Others</Link></div></li>

                </ul>
            </div>

        </div>
        
    );
}

export default Account;