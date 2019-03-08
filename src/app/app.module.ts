import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './ProjectManagement/dashboard/dashboard.component';
import {
  AccountsComponent, DepartmentsComponent, CountryComponent, UserStoryComponent, EmaisMastersComponent,
  NewAccountsComponent, EditAccountComponent
} from './ProjectManagement/masters';
import { ProjectsComponent, NewProjectComponent, EditProjectComponent } from './ProjectManagement/projects';
import { TasksComponent, NewTaskComponent } from './ProjectManagement/tasks';
import { ResourceBoardComponent } from './ResourceManagement';
import { MasterRoutingModule } from './ProjectManagement/masters/master-routing.module';
import { ResourceRoutingModule } from './ResourceManagement/resource-board/resource-routing.module';
import { MastersService } from 'src/shared';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AccountsComponent,
    DepartmentsComponent,
    CountryComponent,
    UserStoryComponent,
    EmaisMastersComponent,
    NewAccountsComponent,
    EditAccountComponent,
    ProjectsComponent,
    TasksComponent,
    NewProjectComponent,
    EditProjectComponent,
    NewTaskComponent,
    ResourceBoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterRoutingModule,
    ResourceRoutingModule
  ],
  providers: [MastersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
