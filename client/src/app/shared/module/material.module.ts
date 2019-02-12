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
  MatStepperModule
} from '@angular/material/stepper';
import {
  MatSelectModule
} from '@angular/material/select';
import {
  MatMenuModule
} from '@angular/material/menu'

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
      MatMenuModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSidenavModule,
      MatStepperModule,
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
      MatMenuModule,
      MatPaginatorModule,
      MatSelectModule,
      MatSidenavModule,
      MatStepperModule,
      MatSnackBarModule,
      MatTableModule,
      MatToolbarModule
    ]
  })
  export class MaterialModule {}
