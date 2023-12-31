
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import CoinHolder from './components/CoinHolder';


const App = () => {
  return (
    <Router>
      <div className="">
        <Routes >
          <Route path="/Home" element={<Home />} />
          <Route path="/Coin" element={<CoinHolder />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
