import api from '../../api';

export const SET_PHOTOS_LIST = 'SET_PHOTOS_LIST';
export const fetchPhotos = (albumId) => (dispatch) => {
    dispatch({
        type: SET_PHOTOS_LIST,
        payload: []
    })

    api.get(`photos?albumId=${albumId}`).then(({data}) => dispatch({
        type: SET_PHOTOS_LIST,
        payload: data
    }))
}