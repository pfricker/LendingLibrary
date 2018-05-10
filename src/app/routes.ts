import { Routes } from '@angular/router';
import { TabsComponent } from './tabs/tabs.component';
import { UploadComponent } from './upload/upload.component';

export const appRoutes:Routes = [
  { path: 'index', component: TabsComponent},
  { path: 'add', component: UploadComponent},
  { path: '', redirectTo: '/index', pathMatch: 'full'}
]
