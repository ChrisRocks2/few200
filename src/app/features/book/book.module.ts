import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { EntryComponent } from './components/entry/entry.component';
import { ListComponent } from './components/list/list.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';


@NgModule({
  declarations: [BookComponent, ListComponent, EntryComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('booksFeature', reducers)
  ],
  exports: [BookComponent]
})
export class BookModule { }
