import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    ProfileComponent,
    UserDetailsComponent,
    ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatDialogModule
  ]
})
export class ProfileModule { }
