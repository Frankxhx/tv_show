import ShowContext from './showsContext'
import showsReducer from './showsReducer'

import React, { useReducer } from 'react'
import { CLEAR_SINGLE_SHOW, SEARCH_SHOWS, SET_LOADING, SET_SINGLE_SHOW } from '../types'
import axios from 'axios'

const ShowsState = ({children}) => {
    const initialState = {
        shows: [],
        singleShow: {},
        loading: false
    }
    const [state, dispatch] = useReducer(showsReducer, initialState);

    const searchShows = async (searchTerm) => {
        dispatch({type: SET_LOADING});

        const {data} = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);

        dispatch({type: SEARCH_SHOWS, payload: data});
    };

    const getSingleShow = async (id) => {
        dispatch({type: SET_LOADING, });
        const {data} = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        dispatch({type:SET_SINGLE_SHOW, payload: data});
    }

    const clearSingleShow = () => {
        dispatch({type: CLEAR_SINGLE_SHOW});
    }
  return (
    <ShowContext.Provider value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow
    }}>
        {children}
    </ShowContext.Provider>
  )
}

export default ShowsState;