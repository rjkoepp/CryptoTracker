import axios from 'axios';
import { apiBaseURL } from "../Utils/Constants";

import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_FAIL,
    FETCHING_COIN_DATA_SUCCESS
} from "../Utils/ActionTypes";

export default function FetchCoinData() {

    // 1. Requesting the data.
    // 2. Data Requesting Successful (200 — got the data!)
    // 3. Data Requesting Fail

    return dispatch => {

        dispatch({type: FETCHING_COIN_DATA })

        return axios.get(`${apiBaseURL}/v1/ticker/?limit=10`)

            .then(res => {
                dispatch({type: FETCHING_COIN_DATA_SUCCESS, payload: res.data})
            })

            .catch(err => {
                dispatch( {type: FETCHINGNG_COIN_DATA_FAIL, payload: err.data})
            })
    }

}