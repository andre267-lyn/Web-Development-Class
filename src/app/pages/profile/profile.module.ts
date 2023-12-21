import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateComponent } from '../update/update.component';
import { MatIconModule } from '@angular/material/icon';
// import { AddComponent } from '../add/add.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UpdateComponent,
    // AddComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    MatIconModule
  ],
})
export class ProfileModule { }
