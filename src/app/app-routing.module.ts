import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewContactComponent } from './pages/add-new-contact/add-new-contact.component';
import { ContactListComponent } from './pages/contact-list/contact-list.component';

const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'add', component: AddNewContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
