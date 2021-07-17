import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import SignIn from './Signin';
import SignUp from './Signup';
import Dashboard from './Home';
import Loading from './loading';
import PostsContent from './PostsContent';
import logo from "./logo192.png";
import Signupsucces from './Signupsucces';
function App() {
  return (
    <Router>
    <div className="App">
     <Navbar/>
    <div className="content">
      <Switch>
      <Route exact path = "/">
      <Dashboard/>
      </Route>
      <Route path = "/Signin">
      <SignIn/>
      </Route>
      <Route path = "/Signup">
        <SignUp/>
      </Route>
      <Route path = "/Signupsuccess">
        <Signupsucces/>
      </Route>
      <Route path = "/posts/:id">
          <PostsContent/>
        </Route>
      </Switch>
    </div>
    </div>
    </Router>
    
  );
}

export default App;
