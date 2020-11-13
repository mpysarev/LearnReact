import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {Switch, Route, useRouteMatch} from 'react-router-dom';
import {fetchUsers} from '../../store/actions/users';
import {fetchAlbums} from '../../store/actions/albums';
import UserList from './UserList';
import UserForm from './UserForm';
import Albums from '../albums/Albums'


function Users({fetchUsers}) {
    const {path} = useRouteMatch();

    useEffect(fetchUsers, []);
    
    
    return (
      <Switch>
          <Route path={`${path}/details/:id`}>
              <UserForm />
          </Route>
          <Route path={`${path}/:userId/albums`}>
              <Albums />
          </Route>
          <Route exact path={path}>
              <UserList />
          </Route>
      </Switch>
    )
}

const mapDispatchToProps = {
    fetchUsers,
    fetchAlbums
}

export default connect(null, mapDispatchToProps)(Users)
