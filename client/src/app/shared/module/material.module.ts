import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {
  MatFormFieldModule
} from '@angular/material/form-field'
import {
  MatCardModule
} from '@angular/material/card';

  @NgModule({
    imports: [
      CdkTableModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatPaginatorModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatTableModule,
      MatToolbarModule
    ],
    exports: [
      CdkTableModule,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatInputModule,
      MatIconModule,
      MatListModule,
      MatPaginatorModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatTableModule,
      MatToolbarModule
    ]
  })
  export class MaterialModule {}
