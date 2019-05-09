import * as fromBooks from './books.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { BookItem } from '../models';

export interface State {
  books: fromBooks.State;
}

export const reducers = {
  books: fromBooks.reducer
};

// 1. Feature Selector
const selectFeature = createFeatureSelector<State>('booksFeature');

// 2. A Selector for each "branch" of that feature.
const selectTasksBranch = createSelector(selectFeature, f => f.books);
// 3. "Helpers"

const { selectAll: selectAllBookEntities } = fromBooks.adapters.getSelectors(selectTasksBranch);

// 4. Component Selector

// TodoItem[] (list component)

export const selectAllBookItems = createSelector(selectAllBookEntities, t => t as BookItem[]);
