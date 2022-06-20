import './App.css';
import PodcastContainer from './containers/PodcastContainer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  



  return (
    <div className="App">
      <Router>
        <PodcastContainer />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/' element={<Home/>}></Route>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
