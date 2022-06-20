import './App.css';
import PodcastContainer from './containers/PodcastContainer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from '.containers/Home';
import 


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
