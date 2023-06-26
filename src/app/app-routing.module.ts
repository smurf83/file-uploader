import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UploadStepComponent } from './upload-step/upload-step.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: 'files',
    component: HomeComponent,
  },
  {
    path: 'add-new-file',
    component: UploadComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
