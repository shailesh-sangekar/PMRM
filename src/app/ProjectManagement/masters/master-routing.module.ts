import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DepartmentsComponent } from './departments/departments.component';
import { CountryComponent } from './country/country.component';
import { UserStoryComponent } from './user-story/user-story.component';
import { EmaisMastersComponent } from './emais-masters/emais-masters.component';
import { NewAccountsComponent } from './accounts/new-accounts/new-accounts.component';
import { EditAccountComponent } from './accounts/edit-account/edit-account.component';


const masterroutes: Routes = [
  { path: 'masters/accounts', component: AccountsComponent },
  { path: 'masters/accounts/new', component: NewAccountsComponent },
  { path: 'masters/accounts/edit', component: EditAccountComponent },
  { path: 'masters/department', component: DepartmentsComponent },
  { path: 'masters/department/new', component: DepartmentsComponent },/**Update component once implementation is complete for newComponent */
  { path: 'masters/department/edit', component: DepartmentsComponent },/**Update component once implementation is complete for editComponent */
  { path: 'masters/country', component: CountryComponent },
  { path: 'masters/country/new', component: CountryComponent },/**Update component once implementation is complete for newComponent */
  { path: 'masters/country/edit', component: CountryComponent }/**Update component once implementation is complete for editComponent */
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
