import {GET_ALBUM_LIST} from '../actions/albums';

const initialState = {
    albumList: []
}

export default function(state = initialState, {type, payload}) {
    switch(type) {
        case GET_ALBUM_LIST: return {
            ...state,
            albumList: payload
        }

        default: return state;
    }
}