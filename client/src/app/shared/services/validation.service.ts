import { FormControl, CheckboxControlValueAccessor } from '@angular/forms';
import { AppConstant } from 'app/app.constant';


// TODO: Make more custom Validators
export class ValidationService {

  static emailValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.match(AppConstant.EMAIL_REGEX)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  static usernameValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.match(AppConstant.UESRNAME_REGEX)) {
      return null;
    } else {
      return { 'invalidUsername': true };
    }
  }

  static usernameLengthValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length >= AppConstant.USERNAME_MIN_LENGTH && control.value.length <= AppConstant.USERNAME_MAX_LENGTH) {
      return null;
    } else {
      return { 'invalidUsernameLength': true };
    }
  }

  // TODO: Find out if you should place any restrictions
  static passwordValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.match()) {
      return null;
    } else {
      return {'invalidPassword': true };
    }
  }

  static passwordLengthValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.length >= AppConstant.PASSWORD_MIN_LENGTH && control.value.length <= AppConstant.PASSWORD_MAX_LENGTH) {
      return null;
    } else {
      return { 'invalidPasswordLength': true };
    }
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'required': 'Required',
      'invalidEmailAddress': 'Please enter a valid email',
      'invalidUsername': 'Please enter a valid username',
      'invalidUsernameLength': 'Username must be between ' + AppConstant.USERNAME_MIN_LENGTH + ' and ' + AppConstant.USERNAME_MAX_LENGTH + ' characters long.',
      'invalidPassword': 'Please enter a valid password',
      'invalidPasswordLength': 'Password must be between ' + AppConstant.PASSWORD_MIN_LENGTH + ' and ' + AppConstant.PASSWORD_MAX_LENGTH + ' characters long.'
    };

    return config[validatorName];
  }
}

