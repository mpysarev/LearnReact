import {SET_PHOTOS_LIST} from '../actions/photos';


const initialState = {
    photosList: []
}

export default function(state = initialState, {type, payload}) {
    switch(type) {
        case SET_PHOTOS_LIST: return {
            ...state,
            photosList: payload
        }

        default: return state;
    }
}