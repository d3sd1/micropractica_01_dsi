import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ComandaComponent} from './comanda/comanda.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: '', redirectTo: '/comanda', pathMatch: 'full'},
  {path: 'comanda', component: ComandaComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
