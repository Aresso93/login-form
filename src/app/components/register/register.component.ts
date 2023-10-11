import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormArray  } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validator';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { group } from '@angular/animations';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private storageServ: LocalStorageService){}

  registerForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.isPasswordValid()]],
    country: [''],
    yob: [new Date().getFullYear(), [Validators.required, CustomValidators.checkNotMinor()]],
    phoneNumber: [''],
    gender: ['']
  })

  onSubmit() {
    console.log(this.registerForm.valid);
    console.log(this.registerForm.value);
    this.storageServ.saveUser(this.registerForm.value as User)
    }
  }



  // profileForm = this.fb.group({
  //   firstName: ['', Validators.required],
  //   lastName: ['', [Validators.required, Validators.minLength(3), CustomValidators.checkFirstAndLastUppercase()]],
  //   //se voglio più validators, li metto così come un array
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: ['', CustomValidators.checkAddressUSA()],
  //     zip: ['']
  //   }),
  //   aliases: this.fb.array([
  //     this.fb.control('')
  //   ])
  // });

  //questa qui sopra è equivalente a quella sotto, cambia solo la sintassi

  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address: new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state: new FormControl(''),
  //     zip: new FormControl('')
  //   })
  // });

  // updateName() {
  //   this.profileForm.get('firstName')?.setValue('Nancy');
  // }

  // onSubmit(){
  //   console.warn(this.profileForm.value);


  // }

  // updateProfile() {
  //   this.profileForm.patchValue({
  //     firstName: 'Nancy',
  //     address: {
  //       street: '123 Drew Street',
  //       city: 'Genoa'
  //     }
  //   });
  // }

//   get aliases() {
//     return this.profileForm.get('aliases') as FormArray;
//   }

//   addAlias() {
//     this.aliases.push(this.fb.control(''));
//   }


