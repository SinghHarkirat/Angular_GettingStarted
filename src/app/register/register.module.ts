import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';





@NgModule({
  declarations: [
    RegisterComponent,
    UserComponent
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    {path:'register',component:RegisterComponent},
    {path:'user/:id',component:UserComponent}

    ])
  ]
})
export class RegisterModule { }
