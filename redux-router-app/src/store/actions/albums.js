import api from '../../api';

export const GET_ALBUM_LIST = 'GET_ALBUM_LIST';
export const fetchAlbums = (userId) => (dispatch) => {
    api.get(`albums` + (userId ? `?userId=${userId}` : '')).then(({data}) => dispatch({
        type: GET_ALBUM_LIST,
        payload: data
    }))
}

