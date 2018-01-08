import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import {
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
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
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatPaginatorModule,
      MatSidenavModule,
      MatTableModule,
      MatToolbarModule
    ],
    exports: [
      CdkTableModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatIconModule,
      MatListModule,
      MatPaginatorModule,
      MatSidenavModule,
      MatTableModule,
      MatToolbarModule
    ]
  })
  export class MaterialModule {}
