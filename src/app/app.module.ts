import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app.component';
import {StoreModule} from '@ngrx/store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BookmarkReducer} from './store/reducers/bookmark.reducers';
import {BookmarkComponent} from './components/bookmark/bookmark.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule, MatInputModule,
  MatListModule,
  MatSelectModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import {BookmarkDialogComponent} from './components/dialog/bookmark-dialog/bookmark-dialog.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    BookmarkDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({bookmarks: BookmarkReducer}),
    BrowserAnimationsModule,
    MatTabsModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BookmarkDialogComponent]
})
export class AppModule { }
