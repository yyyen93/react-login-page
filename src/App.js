//Pages
// import Home from './pages/Home';
import Login from './pages/Login';

//styled components : Not default export. we need to wrap with curly braces.
import {StyledContainer} from './components/Styles';

//React router 
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';


function App() {
  return (
    <Router>
      <StyledContainer>
          <Login />
      </StyledContainer>
    </Router>
  );
}

export default App;
