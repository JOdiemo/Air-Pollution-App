import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesHome from './components/CountriesHome';
import Pollutions from './components/Pollutions';
import RegionsHome from './components/RegionsHome';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegionsHome />} />
          <Route path="/Countries" element={<CountriesHome />} />
          <Route path="/pollution" element={<Pollutions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
