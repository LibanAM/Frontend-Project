import './App.css';
import './containers/SignUp.css';
import PodcastContainer from './containers/PodcastContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Explore from './containers/Explore';
import Pricing from './containers/Pricing';
import Account from './containers/Account';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Home from './containers/Home';
import usePersistedState from './components/usePersistedState';
import RecommendList from './components/RecommendList';
import WatchedEpisodeList from './components/WatchedEpisodeList';
import Business from './components/Business';
import Health from './components/Health';
import TrueCrime from './components/TrueCrime';
import Sport from './components/Sport';
import Factual from './components/Factual';
import Comedy from './components/Comedy';
import Family from './components/Family';

function App() {
  
  const [isLogin, setIsLogin] = usePersistedState('isLogin',false);
  //const [currentAccount, setCurrentAccount] = usePersistedState('currentAccount', localStorage.getItem('currentAccount') ? JSON.parse(localStorage.getItem('currentAccount')) : []);
  const [currentPodCastAcc, setCurrentPodCastAcc] = usePersistedState('currentPodCastAcc', {});


  return (
    <Router>
    <div className="App">
      
        <PodcastContainer isLogin={isLogin} setIsLogin={setIsLogin}
                          currentPodCastAcc={currentPodCastAcc}
                          setCurrentPodCastAcc={setCurrentPodCastAcc} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<Explore/>}>
            <Route path='Comedy' element={<Comedy/>}/>
            <Route path='Business' element={<Business/>}/>
            <Route path='Factual' element={<Factual/>}/>
            <Route path='Sport' element={<Sport/>}/>
            <Route path='TrueCrime' element={<TrueCrime/>}/>
            <Route path='Health' element={<Health/>}/>

            </Route>
            
          <Route path='/pricing' element={<Pricing/>}></Route>

          <Route path='/account' element={isLogin? <Account currentPodCastAcc={currentPodCastAcc}/>: 
                                                   <SignUp isLogin={isLogin} setIsLogin={setIsLogin}
                                                           currentPodCastAcc={currentPodCastAcc}
                                                           setCurrentPodCastAcc={setCurrentPodCastAcc} />}>
                <Route path='recommended' element={<RecommendList />} currentPodCastAcc={currentPodCastAcc}/>
                <Route path='watched' element={<WatchedEpisodeList currentPodCastAcc={currentPodCastAcc}/>}/>

          </Route>

          <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin}
                                               currentPodCastAcc={currentPodCastAcc}
                                               setCurrentPodCastAcc={setCurrentPodCastAcc}/>}>
          </Route>
        </Routes>

    </div>
    </Router>
  );
}

export default App;
