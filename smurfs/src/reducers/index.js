import {GET_SMURFS, GET_SMURFS_SUCCESS, GET_SMURFS_FAILURE} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SMURFS: 
            return {
                ...state,
                fetchingSmurfs: true
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                smurfs: action.payload
            }
        case GET_SMURFS_FAILURE:
            return {
                ...state,
                fetchingSmurfs: false,
                error: action.payload
            }
        default: 
            return state;
    }
}