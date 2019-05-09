// import { Action } from '@ngrx/store';
import * as actions from '../actions/task.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface TaskEntity {
  id: string;
  book: string;
  author: string;
  format: string;
}

export interface State extends EntityState<TaskEntity> { }

const initialState: State = {
  ids: ['1', '2', '3'],
  entities: {
    1: {
      id: '1', book: 'Call of the Wild', author: 'Jack London', format: 'E-book'
    },
    2: {
      id: '2', book: 'The Other', author: 'Thomas Tryon', format: 'Paperback'
    },
    3: {
      id: '3', book: 'The Confetti Killer', author: 'Chris Myers', format: 'Hardcover'
    }
  }
};

export const adapters = createEntityAdapter<TaskEntity>();

export function reducer(state: State = initialState, action: actions.All): State {
  switch (action.type) {
    case actions.BOOK_ADDED: {
      const bookToAdd: TaskEntity = { id: action.id, book: action.book, author: action.author, format: action.format };
      return adapters.addOne(bookToAdd, state);
    }
    default: {
      return state;
    }
  }
}
