import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

const authRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AuthModule { }
