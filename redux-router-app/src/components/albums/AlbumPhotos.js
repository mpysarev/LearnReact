import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {fetchPhotos} from '../../store/actions/photos'

function AlbumPhotos({photosList, fetchPhotos}) {
    const {id} = useParams();

    useEffect(() => fetchPhotos(id), [fetchPhotos, id])

    console.log(id);

    return (
        <ul style={photosContainerStyle}>
            {photosList.map(({id, thumbnailUrl}) => (
                <li key={id}><img style={photoStyle} src={thumbnailUrl} /></li>
            ))}
        </ul>
    )
}

const photosContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: '5px'
}

const photoStyle ={
    marginLeft: '5px'
}

const mapStateToProps = ({photos: {photosList}}) => {
    return {photosList}
}

const mapDispatchToProps = {
    fetchPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumPhotos)
