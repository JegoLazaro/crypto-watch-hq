
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';


const App = () => {
  return (
    <Router>
      <div className="">
        <Routes >
          <Route path="/Home" element={<Home />} />
          <Route index element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
