import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Switch, Route, useRouteMatch, useParams} from 'react-router-dom';
import { fetchAlbums } from '../../store/actions/albums';
import AlbumList from './AlbumList';
import AlbumPhotos from './AlbumPhotos';

function Albums({fetchAlbums}) {

    const {path} = useRouteMatch();
    const {userId} = useParams();

    useEffect( () => fetchAlbums(userId), [userId, fetchAlbums]);

    return (
        <Switch>
            <Route path={`${path}/:id`}>
                <AlbumPhotos />
            </Route>
            <Route path={path}>
                <AlbumList />
            </Route>
        </Switch>
    )
}

const mapDispatchToProps = {
    fetchAlbums
}

export default connect(null, mapDispatchToProps)(Albums)
