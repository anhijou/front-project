import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { NavComponent } from './pages/nav/nav.component';
import { FormComponent } from './pages/form/form.component';
import { GroupComponent } from './pages/group/group.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/form', component: FormComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'group/:group', component: GroupComponent },
  { path: 'form', component: FormComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'group/:group/form/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
