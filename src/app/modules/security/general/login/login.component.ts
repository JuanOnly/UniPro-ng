import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationData } from 'src/app/config/ConfigurationData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  dataForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.Formbuilding();
  }

  Formbuilding() {
    this.dataForm = this.fb.group({
      username: [
        'admin@gmail.com',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(ConfigurationData.EMIAL_MIN_LENGTH),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(ConfigurationData.PASSWORD_MAX_LENGTH),
        ],
      ],
    });
  }

  Login() {
    if (this.dataForm.invalid) {
      alert('invalid from');
    } else {
      alert('Data Validation');
    }
  }
}
