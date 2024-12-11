import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import HomePage from './components/homepage.component'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" 
                // element={<Navbar />}
                 >
            <Route index element={<HomePage />} />
          </Route>

        </Routes>
      </Router>
    </>
  );
}