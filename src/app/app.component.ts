import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { movie } from './state-management/store/movie-state';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import * as movieActions from './state-management/actions/movie-actions';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ngrx';
  id:number;
  name:string;
  genre:string;
  modelRef:any;
  movieData$:Observable<movie[]>;
  constructor(private _store:Store<any>,private modalService: NgbModal){
    this.movieData$ = this._store.select('movie');
  }
  addMovie(form){
    const movieData: movie = {
      id:form.value.id,
      name:form.value.name,
      genre:form.value.genre
    }
    this._store.dispatch({type:movieActions.ADD_MOVIE_SUCCESS,payload:movieData});
  }
  deleteMovie(id:number) {
   // console.log(id);
    this._store.dispatch({type:movieActions.DELETE_MOVIE,payload:id});
  }
  open(content,Id,Name,Genre) {
    this.id = Id;
    this.name = Name;
    this.genre = Genre;
    this.modelRef = this.modalService.open(content);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  updateMovie(form){
    const movieData: movie = {
      id:form.value.id,
      name:form.value.name,
      genre:form.value.genre
    }
    this._store.dispatch({type:movieActions.UPDATE_MOVIE,payload:movieData});
    this.modelRef.close();
  }
}
