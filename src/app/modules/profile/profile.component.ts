import { Component } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private dialog: MatDialog){}
  signOut(){
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(ConfirmDialogComponent, {
      width: '480px',
      data: { title: 'Sign Out confirmation', message: 'Are you sure want to Sign out?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle sign out action
      }
    });
  }
}
