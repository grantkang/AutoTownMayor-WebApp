import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as UserActions from '../store/user.actions';
import * as fromUser from '../store/user.reducers';
import { NewUserRequest } from '../../../shared/model/new-user-request.model';
import { ValidationService } from 'app/shared/services/validation.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  validationService: ValidationService;
  userLoginFormGroup: FormGroup;
  userBasicInfoFormGroup: FormGroup;
  userCompanyInfoFormGroup: FormGroup;

  isLinear = true;
  isPasswordVisible = false;

  ngOnInit() {
    this.initializeForm();
    this.validationService = new ValidationService();
  }

  initializeForm() {
    const usernameInput = '';
    const passwordInput = '';
    const firstNameInput = '';
    const lastNameInput = '';
    const companyNameInput = '';
    const emailInput = '';
    const resaleNumberInput = '';
    const addressLine1Input = '';
    const addressLine2Input = '';
    const addressCityInput = '';
    const addressStateInput = '';
    const addressZipInput = '';
    const mainPhoneInput = '';
    const workPhoneInput = '';
    const faxNumberInput = '';

    this.userLoginFormGroup = this._formBuilder.group({
      username: [usernameInput,
        [ Validators.required,
          ValidationService.usernameValidator,
          ValidationService.usernameLengthValidator]],
      password: [passwordInput,
        [ Validators.required,
          // ValidationService.passwordValidator,
          ValidationService.passwordLengthValidator]],
      email: [emailInput,
        [ ValidationService.emailValidator,
          Validators.required]]
    });

    this.userBasicInfoFormGroup = this._formBuilder.group({
      firstName: [firstNameInput],
      lastName: [lastNameInput],
      mainPhone: [mainPhoneInput,
        [ Validators.required]],
      workPhone: [workPhoneInput],
      faxNumber: [faxNumberInput]
    });

    this.userCompanyInfoFormGroup = this._formBuilder.group({
      companyName: [companyNameInput,
        [Validators.required]],
      resaleNumber: [
        resaleNumberInput,
        [Validators.required]],
      addressLine1: [addressLine1Input,
        [Validators.required]],
      addressLine2: [addressLine2Input],
      addressCity: [addressCityInput, [Validators.required]],
      addressState: [addressStateInput,
        [Validators.required]],
      addressZip: [addressZipInput,
        [Validators.required]]
    })
  }

  onSubmit() {
    const newUser = new NewUserRequest(
      this.userLoginFormGroup.get('username').value,
      this.userLoginFormGroup.get('password').value,
      this.userBasicInfoFormGroup.get('firstName').value,
      this.userBasicInfoFormGroup.get('lastName').value,
      this.userCompanyInfoFormGroup.get('companyName').value,
      this.userLoginFormGroup.get('email').value,
      this.userCompanyInfoFormGroup.get('resaleNumber').value,
      this.userCompanyInfoFormGroup.get('addressLine1').value,
      this.userCompanyInfoFormGroup.get('addressLine2').value,
      this.userCompanyInfoFormGroup.get('addressCity').value,
      this.userCompanyInfoFormGroup.get('addressState').value,
      this.userCompanyInfoFormGroup.get('addressZip').value,
      this.userBasicInfoFormGroup.get('mainPhone').value,
      this.userBasicInfoFormGroup.get('workPhone').value,
      this.userBasicInfoFormGroup.get('faxNumber').value
    );
    console.log(newUser);
    this.store.dispatch(new UserActions.AddUser(newUser));
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  constructor(private store: Store<fromUser.FeatureState>, private _formBuilder: FormBuilder) { }
}
