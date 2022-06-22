import { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link, Outlet} from 'react-router-dom';

// import {HashLink} from 'react-router-hash-link';
import RecommendedPodcasts from '../components/RecommendList';


import { useNavigate } from 'react-router-dom';
import './Account.css';
import Footer from '../components/Footer';


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
                    <li>
                        <a href="/explore/Comedy" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/upDPy3ZhGt4" + ")"}}>
                                <p>Comedy</p>
                                <div className="blackLayer"></div>
                            </div>
                        </a>
                    </li>


                    <li>
                        <Link to="/explore/Family" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/OMl0o6TSQXU" + ")"}}>
                                <p>Family</p>
                            <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/explore/Factual" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/L4YGuSg0fxs" + ")"}}>
                                <p>Factual</p>
                                <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/explore/Sports" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/OgqWLzWRSaI" + ")"}}>
                                <p>Sports</p>
                                <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/explore/Business" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/PhYq704ffdA" + ")"}}>
                                <p>Business</p>
                                <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>


                    <li>
                        <Link to="/explore/Health" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/-ftWfohtjNw" + ")"}}>
                                <p>Health</p>
                                <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/explore/TrueCrime" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/PEJHULxUHZs" + ")"}}>
                                <p>True Crime</p>
                                <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>

                    <li>
                        <Link to="/explore" className="categories-link">
                            <div className="category-box" style={{backgroundImage: "url(" + "https://source.unsplash.com/DNkoNXQti3c" + ")"}}>
                                <p>Others</p>
                                <div className="blackLayer"></div>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>

            <Footer />
            

        </div>
        
    );
}

export default Account;