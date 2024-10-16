import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarLayout from './components/Navbar';
import Signin from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Schedule from './components/Schedule';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/" element={<NavbarLayout />}>
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
