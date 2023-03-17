//Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

//styled components : Not default export. we need to wrap with curly braces.
import {StyledContainer} from './components/Styles';

//React router 
import {BrowserRouter as Router, Routes , Route,} from 'react-router-dom';

/**
 * Switch is removed after v6.
 * Routes is a replacement of Switch.
 * Route must have a element props which can render JSX.
 */


function App() {
  return (
    <Router>
      <StyledContainer>
        <Routes>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </StyledContainer>
    </Router>
  );
}

export default App;

// https://www.c-sharpcorner.com/article/react-router-v6-what-changed-and-upgrading-guide/

