import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {
  formAccountSettings: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formAccountSettings = new FormGroup(
      {
        name: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        lastPassword: new FormControl('', [Validators.required]),
        newPassword: new FormControl(),
        confirmPassword: new FormControl()
      },
      {
        validators: (control: AbstractControl): ValidationErrors | null => {
          const newPasswordVal = control.get('newPassword').value,
            confirmPasswordVal = control.get('confirmPassword').value;
          return (newPasswordVal || confirmPasswordVal) && (newPasswordVal !== confirmPasswordVal) ? { newPasswordNotMatch: true } : null;
        }
      }
    );

    const newPasswordCtrl = this.formAccountSettings.controls.newPassword,
      confirmPasswordCtrl = this.formAccountSettings.controls.confirmPassword;
    newPasswordCtrl.valueChanges.subscribe(value => {
      if (value) {
        confirmPasswordCtrl.setValidators([Validators.required]);
      } else {
        confirmPasswordCtrl.setValidators(null);
      }
      confirmPasswordCtrl.updateValueAndValidity();
    });
  }

  submit() {
    console.log(this.formAccountSettings);
  }
}