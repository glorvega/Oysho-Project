import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list.component';

const routes: Routes = [
  {
    path: ':catId',
    component: ListComponent,
  },
  {
    path: ':catId/detail',
    loadChildren: () =>
      import('./views/detail/detail.module').then((m) => m.DetailModule),
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListRoutingModule {}
