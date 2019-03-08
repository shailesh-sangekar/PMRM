import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './ProjectManagement/dashboard/dashboard.component';
import { AccountsComponent } from './ProjectManagement/masters/accounts/accounts.component';
import { ProjectsComponent } from './ProjectManagement/projects/projects.component';
import { NewProjectComponent } from './ProjectManagement/projects/new-project/new-project.component';

const routes: Routes = [
  { path: '', redirectTo: '/dasboard', pathMatch: 'full' },
  { path: 'dasboard', component: DashboardComponent },
  { path: 'masters', component: AccountsComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'Projects/new', component: NewProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
