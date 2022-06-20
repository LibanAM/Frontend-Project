import './App.css';
import PodcastContainer from './containers/PodcastContainer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Explore from './containers/Explore';
import Pricing from './containers/Pricing';
import Account from './containers/Account';
import Login from './containers/Login';
import Home from './containers/Home';
import usePersistedState from './components/usePersistedState';

function App() {
  
  const [isLogin, setIsLogin] = usePersistedState('isLogin', false);
  const [currentAccount, setcurrentAccount] = usePersistedState('currentAccount', {});

  return (
    <Router>
    <div className="App">
      
        <PodcastContainer isLogin={isLogin} setIsLogin={setIsLogin} />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/login' element={<Login isLogin={isLogin} setIsLogin={setIsLogin}
                                               currentAccount={currentAccount}
                                               setcurrentAccount={setcurrentAccount}/>}></Route>
        </Routes>

    </div>
    </Router>
  );
}

export default App;
