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

  add(item: HTMLInputElement, item2: HTMLInputElement, item3: HTMLInputElement) {
    const book = item.value;
    const author = item2.value;
    const format = item3.value;
    this.store.dispatch(new AddedBook(book, author, format));
    item.value = '';
    item.focus();
  }

}
