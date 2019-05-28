import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestTakersComponent } from './test-takers/test-takers.component';

const routes: Routes = [
  { path: 'test-takers', component: TestTakersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
