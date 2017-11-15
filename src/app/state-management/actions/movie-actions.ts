import { Action } from '@ngrx/store';
import { movie } from '../store/movie-state';


 export const ADD_MOVIE_SUCCESS = 'add movie success'
 export const DELETE_MOVIE = 'delete movie'
 export const UPDATE_MOVIE = 'update movie'

 export class addMovieSucces implements Action {
     readonly type = ADD_MOVIE_SUCCESS;
     constructor(payload: movie) {}
 } 
 export class deleteMovie implements Action {
     readonly type =DELETE_MOVIE;
     constructor(payload: number) {}
 }
 export class updateMovie implements Action {
     readonly type =UPDATE_MOVIE;
     constructor(payload: movie) {}
 }
 export type Actions =  addMovieSucces | deleteMovie | updateMovie;
 