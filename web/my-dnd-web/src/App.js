import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharacterCreation from './pages/CharacterCreation';
import Classes from './pages/Classes';
import Divinity from './pages/Divinity';
import Factions from './pages/Factions';
import Feats from './pages/Feats';
import Lore from './pages/Lore';
import Origins from './pages/Origins';
import Races from './pages/Races';
import Regions from './pages/Regions';
import Spells from './pages/Spells';
import WorldMap from './pages/WorldMap';

function Homepage() {
  return (
    <div>
      <h1>Welcome to Filip’s Homebrew D&D World!</h1>
      <p>Explore unique classes, races, spells, and more!</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/character-creation">Character Creation</Link></li>
		  <li><Link to="/classes">Classes</Link></li>
		  <li><Link to="/races">Races</Link></li>
		  <li><Link to="/origins">Origins</Link></li>
		  <li><Link to="/feats">Feats</Link></li>
		  <li><Link to="/divinity">Divinity</Link></li>
		  <li><Link to="/factions">Factions</Link></li>
		  <li><Link to="/regions">Regions</Link></li>
		  <li><Link to="/spells">Spells</Link></li>
		  <li><Link to="/lore">Lore</Link></li>
          <li><Link to="/world-map">World Map</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/character-creation" element={<CharacterCreation />} />
        <Route path="/classes" element={<Classes />} />
		<Route path="/races" element={<Races />} />
		<Route path="/origins" element={<Origins />} />
		<Route path="/feats" element={<Feats />} />
		<Route path="/divinity" element={<Divinity />} />
		<Route path="/factions" element={<Factions />} />
		<Route path="/regions" element={<Regions />} />
		<Route path="/spells" element={<Spells />} />
		<Route path="/lore" element={<Lore />} />
        <Route path="/world-map" element={<WorldMap />} />
      </Routes>
    </Router>
  );
}

export default App;
