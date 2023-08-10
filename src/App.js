import './App.css';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Login, Register } from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
