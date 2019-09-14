import axios from 'axios';

export const GET_SMURFS = 'GET_SMURFS';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';

const URL = 'http://localhost:3333/smurfs';

export const getSmurfs = () => dispatch => {
    dispatch({ type: GET_SMURFS });

    axios
        .get(URL)
        .then(res => {
            console.log(res.data);
            dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.err(err);
            dispatch({ type: GET_SMURFS_FAILURE, payload: err });
        })
}
