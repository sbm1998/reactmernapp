import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {Route,Switch} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import AddData from './components/AddData';
import Users from './components/Users'

function App() {
  return (
    <div>
       <BrowserRouter>
      <Switch>
      <Route path='/' exact component={LandingPage} />
      <Route path='/login' exact component={LoginForm} />
      <Route path='/signup' exact component={SignUpForm}/>
      <Route path='/addData' exact component={AddData}/>
      <Route path='/getusers' exact component={Users}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
