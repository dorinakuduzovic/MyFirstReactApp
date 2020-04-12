import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Question from './pages/question/Question';
import MyQuestion from './pages/myQuestion/MyQuestion';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Profile from './pages/profile/Profile';
import Navbar from './pages/components/navbar/Navbar';
import Footer from './pages/components/footer/Footer';
import EditProfile from './pages/profile/EditProfile';
import ChangePassword from './pages/profile/ChangePassword';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/question" component={Question} />
          <Route path="/myQuestion" component={MyQuestion} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/editProfile" component={EditProfile} />
          <Route path="/changePassword" component={ChangePassword} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
