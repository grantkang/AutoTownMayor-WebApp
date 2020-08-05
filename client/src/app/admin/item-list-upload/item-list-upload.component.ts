import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppConstant } from '../../app.constant';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-item-list-upload',
  templateUrl: './item-list-upload.component.html',
  styleUrls: ['./item-list-upload.component.css']
})
export class ItemListUploadComponent implements OnInit {
  fileUploadFormGroup: FormGroup;
  selectedFile: File = null;

  ngOnInit() {
    this.fileUploadFormGroup = this._formBuilder.group({
      file: ['']
    });
  }

  onSubmit() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post(AppConstant.BASE_URL + AppConstant.ITEM_LIST_UPLOAD_URL, fd)
    .subscribe(
      (res) => {
        this.snackBar.open('Items have been updated!', '', { duration: 3000 });
      },
      (error) => {
        this.snackBar.open('Something went wrong..', '', { duration: 3000 });
      });
  }

  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  constructor(private http: HttpClient, private _formBuilder: FormBuilder, public snackBar: MatSnackBar) { }
}
