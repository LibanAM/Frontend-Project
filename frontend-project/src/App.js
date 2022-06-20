import './App.css';
import PodcastContainer from './containers/PodcastContainer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Explore from './containers/Explore';
import Pricing from './containers/Pricing';
import Account from './containers/Account';
import Login from './containers/Login';
import Home from './containers/Home';


function App() {
  
  return (
    <Router>
    <div className="App">
      
        <PodcastContainer />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/pricing' element={<Pricing/>}></Route>
          <Route path='/account' element={<Account/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>

    </div>
    </Router>
  );
}

export default App;
