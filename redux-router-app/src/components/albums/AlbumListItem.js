import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

function AlbumListItem({album}) {
    const {url} = useRouteMatch();

    return (
        <li>
            <Link style={linkStyle} to={`${url}/${album.id}`}>{album.id + ". "} {album.title}</Link>
        </li>
    )
}

const linkStyle = {
    color: 'black',
    textDecoration: 'none'
}

export default AlbumListItem
