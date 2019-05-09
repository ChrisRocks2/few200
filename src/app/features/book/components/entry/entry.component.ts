import { Component, OnInit } from '@angular/core';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';
import { AddedBook } from '../../actions/task.actions';


@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  add(item: HTMLInputElement) {
    const book = item.value;
    const author = item.value;
    const format = item.value;
    this.store.dispatch(new AddedBook(book, author, format));
    item.value = '';
    item.focus();
  }

}
