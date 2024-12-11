import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Pages
import HomePage from './components/homepage.component'
import About from './components/About';
import Navbar from './components/Navbar';

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" 
                element={<Navbar />}
                 >
            <Route index element={<HomePage />} />
            <Route path='/about' element={<About />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}