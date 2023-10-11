import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidators } from 'src/app/validators/custom-validator';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private storageServ: LocalStorageService, private router: Router){}

  loginForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    password: ['', [Validators.required, CustomValidators.isPasswordValid()]],
  })

  onSubmit() {
   console.log(this.loginForm.value);

   const isUserValid = this.storageServ.checkUser(this.loginForm.value.userName as string, this.loginForm.value.password as string)

   if (isUserValid) {
      this.storageServ.saveLogin()
      this.router.navigateByUrl('/secret')
     }
    }

  }



