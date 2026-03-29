import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Homepage from './pages/Homepage';
import NotFoundPage from './pages/NotFoundPage'; // Import the new 404 page
import { ScrollToTopOnMount } from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTopOnMount />
      {/* min-h-screen: Ensures the wrapper is exactly as tall as the viewport (or taller).
        flex flex-col: Stacks children (Navbar, Content, Footer) vertically.
        overflow-x-hidden: Prevents horizontal scrolling from creating layout breaks.
      */}
      <div className="min-h-screen flex flex-col bg-[#050505] text-[#F8F9FA] font-sans selection:bg-[#D2042D] selection:text-white overflow-x-hidden">
        
        <Navbar />

        {/* flex-1 forces this container to stretch and fill all remaining empty vertical space.
          This guarantees the Footer below it is pushed to the absolute bottom.
        */}
        <main className="flex-1 flex flex-col w-full">
          <Routes>
            <Route path="/" element={<Homepage />} />
            
            {/* Future routes will go here */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}

            {/* Catch-all route for 404 Not Found Page */}
            {/* The * path matches any URL that hasn't been defined above */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* The footer will now sit flush at the bottom with zero gap beneath it */}
        <div className="mt-auto w-full">
          <Footer />
        </div>
        
      </div>
    </Router>
  );
}

export default App;