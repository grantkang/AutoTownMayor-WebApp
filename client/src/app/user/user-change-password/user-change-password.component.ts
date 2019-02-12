import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthAction from '../../auth/store/auth.actions';
import { AuthEffects } from 'app/auth/store/auth.effects';
import { AppConstant } from 'app/app.constant';
import { ValidationService } from 'app/shared/services/validation.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  validationService: ValidationService;
  passwordChangeFormGroup: FormGroup;
  passwordInput: string;
  passwordConfirmInput: string;

  constructor(private _formBuilder: FormBuilder, private store: Store<fromApp.AppState>, private authEffects: AuthEffects) { }

  ngOnInit() {
    this.validationService = new ValidationService();
    this.passwordChangeFormGroup = this._formBuilder.group({
      password: [
        this.passwordInput,
        [Validators.required,
          ValidationService.passwordLengthValidator]
      ],
      passwordConfirm: [
        this.passwordConfirmInput,
        [Validators.required,
          Validators.pattern(this.passwordInput)]
      ]
    });
  }

  onSubmit() {
    this.store.dispatch(new AuthAction.ChangePassword(this.passwordChangeFormGroup.get('password').value));
  }
}
