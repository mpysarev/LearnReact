import React from 'react';
import {Route, Link, NavLink, Switch, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Albums from './components/albums/Albums';
import Users from './components/users/Users';

function App() {
  return (
    <>
      <header className="app__header" style={appHeaderStyle}>React Routing App</header>
      <Router>
        <nav className="app__nav">
          <ul style={appNavStyle}>
            <li><NavLink style={linkStyle} to="/users" activeClassName="selected">User List</NavLink></li>
            <li><NavLink style={linkStyle} to="/albums" activeClassName="selected">Albums List</NavLink></li>
          </ul>
        </nav>

        <div className="container" style={containerStyle}>
        <Switch>
            <Route exact path="/">
              <div>Home page</div>
            </Route>
            <Route path="/albums">
              <Albums/>
            </Route>
            <Route path="/photos">
              <div>Photos</div>
            </Route>
            <Route path="/users">
              <button style={addBtnStyle}>
              <Link style={addLinkStyle} to="/users/details/:id">
                Add user
              </Link></button>
              <Users/>
            </Route>
          </Switch>
        </div>
      </Router>  
    </>
  )
}

const appHeaderStyle ={
  textAlign: 'center',
  backgroundColor: '#66B7D2',
  padding: '10px 0px'
}

const appNavStyle = {
  display: 'flex',
  justifyContent: 'space-evenly',
  padding: '10px 0px',
  boxShadow: '0 0 5px black'
}

const linkStyle = {
  display: 'inline-block',
  color: 'black',
  textDecoration: 'none',
  padding: '4px 10px'

}

const addBtnStyle = {
  color: 'black',
  textDecoration: 'none',
  borderRadius: '5px'
}

const addLinkStyle = {
  color: 'black',
  textDecoration: 'none',
  dispay: 'inline-block',
  height: '100%',
  width: '100%',
}

const containerStyle = {
  padding: '10px 20px'
}


export default App
