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
  MatCardModule
} from '@angular/material/card';
import {
  MatCheckboxModule
} from '@angular/material/checkbox';
import {
  MatFormFieldModule
} from '@angular/material/form-field';
import {
  MatSelectModule
} from '@angular/material/select';

  @NgModule({
    imports: [
      CdkTableModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatTableModule,
      MatToolbarModule
    ],
    exports: [
      CdkTableModule,
      MatButtonModule,
      MatCardModule,
      MatCheckboxModule,
      MatDialogModule,
      MatInputModule,
      MatIconModule,
      MatListModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatTableModule,
      MatToolbarModule
    ]
  })
  export class MaterialModule {}
