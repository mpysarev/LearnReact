import React from 'react';
import { connect } from 'react-redux';
import AlbumListItem from './AlbumListItem';


function AlbumList({albumList}) {

    
    return (
        <ul className="album-list-container" style={albumListStyle}>
            {albumList.map((album) => 
            <AlbumListItem 
                key={album.id} 
                album={album}
            />)}
        </ul>
    )
}

const albumListStyle = {
    padding: '0px'
}


const mapStateToProps = ({albums: {albumList}}) => {
    return { albumList };
}

export default connect(mapStateToProps)(AlbumList)
