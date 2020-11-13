import React from 'react'
import { connect } from 'react-redux';
import {fetchAlbums} from '../../store/actions/albums';
import { Link, useRouteMatch } from 'react-router-dom';

function UserListItem({user: {name, username, id}}) {

    const {url} = useRouteMatch();

    return (
        <li style={userStyle}>
            {`${id}. ${name}   /   ${username}`}
            <div>
                <Link 
                    style={linkStyle} 
                    to={`${url}/details/${id}`}
                >[Edit]</Link>
                <Link 
                    style={linkStyle} 
                    to={`${url}/${id}/albums`}
                >[User albums]</Link>
            </div> 
        </li>
    )
}


const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    marginLeft: '40px'
}

const userStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px'
}

const mapDispatchToProps = {
    fetchAlbums
}

export default connect(null, mapDispatchToProps)(UserListItem)
