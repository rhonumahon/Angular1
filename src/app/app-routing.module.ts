import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SampleComponent } from './components/sample/sample.component';
import { HereComponent } from './components/here/here.component';
import { OverhereComponent } from './components/overhere/overhere.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sample',
    component: SampleComponent,
    children: [
      {
        path: 'here',
        component: HereComponent,
      },
      {
        path: 'overhere',
        component: OverhereComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: 'sample',

    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',

    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
