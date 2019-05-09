import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap, map, filter } from 'rxjs/operators';
import * as actions from '../actions/task.actions';

@Injectable()
export class BookEffects {

  // @Effect({ dispatch: false }) logAll$ = this.actions$
  //   .pipe(
  //     tap(a => console.log('Got an action of type: ', a.type))
  //   );

  // @Effect({ dispatch: false }) saveCountBy$ = this.actions$
  //   .pipe(
  //     ofType(actions.SET_COUNT_BY), // => { type="SET_COUNT_BY"}
  //     map(a => a as actions.CountBySet), // => Type... by: 1 | 3 | 5
  //     tap(a => localStorage.setItem('by', a.by.toString()))
  //   );


  // @Effect() readCountBy$ = this.actions$
  //   .pipe(
  //     ofType(actions.LOAD_COUNT_BY),
  //     map(() => localStorage.getItem('by')),
  //     filter(by => by !== null),
  //     map(a => +a as 1 | 3 | 5),
  //     map(a => new actions.CountBySet(a))

  //   );
  constructor(private actions$: Actions) { }
}
