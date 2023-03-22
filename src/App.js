import './App.css';
import News from './components/News';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* <Header />
      <News /> */}

      <Router>
        <Header />
        <Routes>
          <Route exact path='/news' element={< News key="news" pageSize={600} country="in" category="news" />} />
          <Route exact path='/sport' element={< News key="sport" pageSize={600} country="in" category="sport" />} />
          <Route exact path='/tech' element={< News key="tech" pageSize={600} country="in" category="tech" />} />
          <Route exact path='/world' element={< News key="world" pageSize={600} country="in" category="world" />} />
          <Route exact path='/finance' element={< News key="finance" pageSize={600} country="in" category="finance" />} />
          <Route exact path='/politics' element={< News key="politics" pageSize={600} country="in" category="politics" />} />
          <Route exact path='/business' element={< News key="business" pageSize={600} country="in" category="business" />} />
          <Route exact path='/economics' element={< News key="economics" pageSize={600} country="in" category="economics" />} />
          <Route exact path='/entertainment' element={< News key="entertainment" pageSize={600} country="in" category="entertainment" />} />
          <Route exact path='/beauty' element={< News key="beauty" pageSize={600} country="in" category="beauty" />} />
          <Route exact path='/travel' element={< News key="travel" pageSize={600} country="in" category="travel" />} />
          <Route exact path='/music' element={< News key="music" pageSize={600} country="in" category="music" />} />
          <Route exact path='/food' element={< News key="food" pageSize={600} country="in" category="food" />} />
          <Route exact path='/science' element={< News key="science" pageSize={600} country="in" category="science" />} />
          <Route exact path='/gaming' element={< News key="gaming" pageSize={600} country="in" category="gaming" />} />
          <Route exact path='/energy' element={< News key="energy" pageSize={600} country="in" category="energy" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
