import {initialState, movie} from '../store/movie-state';
import * as movieActions from '../actions/movie-actions';
export function movieReducer (state = initialState,{type,payload}) {
    switch(type) {
        case movieActions.ADD_MOVIE_SUCCESS:
            return [...state,payload];
        case movieActions.DELETE_MOVIE:
            console.log('add')
            return state.filter(movie => movie.id !==payload);
        case movieActions.UPDATE_MOVIE:
            console.log('update')
            const temp:movie = {
                id:payload.id,
                genre:payload.genre,
                name:payload.name
            }
            return state.map( item => item.id === temp.id?Object.assign({},item,temp) : item
        );
            default:
        return state;
    }
}