import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Homepage from './pages/Homepage';

function App() {
  return (
    <Router>
      {/* Global wrapper applying the brand's dark background and light text.
        --color-brand-black: #111111;
        --color-brand-white: #F8F9FA;
      */}
      <div className="min-h-screen bg-[#111111] text-[#F8F9FA] font-sans selection:bg-[#D2042D] selection:text-white">
        
        {/* The Navbar will persist across all routes */}
        <Navbar />

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          
          {/* Future routes will be added here */}
          {/* <Route path="/features" element={<Features />} /> */}
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;