import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinarySearchComponent } from './pages/binary-search/binary-search.component';
import { BubbleSortComponent } from './pages/bubble-sort/bubble-sort.component';
import { InsertionSortComponent } from './pages/insertion-sort/insertion-sort.component';
import { LinearSearchComponent } from './pages/linear-search/linear-search.component';
import { MergeSortComponent } from './pages/merge-sort/merge-sort.component';

const routes: Routes = [
  { path:"linear-search",component: LinearSearchComponent},
  { path:"binary-search",component: BinarySearchComponent},
  { path:"bubble-sort",component: BubbleSortComponent},
  { path:"insertion-sort",component: InsertionSortComponent},
  { path:"merge-sort",component: MergeSortComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
