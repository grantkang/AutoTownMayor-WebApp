import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
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
