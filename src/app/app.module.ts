import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinearSearchComponent } from './pages/linear-search/linear-search.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { BinarySearchComponent } from './pages/binary-search/binary-search.component';
import { BubbleSortComponent } from './pages/bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './pages/insertion-sort/insertion-sort.component';
import { MergeSortComponent } from './pages/merge-sort/merge-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    LinearSearchComponent,
    NavBarComponent,
    SideBarComponent,
    BinarySearchComponent,
    BubbleSortComponent,
    InsertionSortComponent,
    MergeSortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
