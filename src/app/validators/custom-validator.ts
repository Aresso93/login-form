import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export class CustomValidators {

  static checkFirstAndLastUppercase(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {

      if (control.value && control.value.length > 0) {

        const isFirstUpper = control.value[0] === control.value[0].toUpperCase()
        const isLastUpper = control.value[control.value.length-1] === control.value[control.value.length-1].toUpperCase()
        const isValid = isFirstUpper && isLastUpper;

        if (isValid) {
          return null
        } else {
          return {isFirstUpper: isFirstUpper, isLastUpper: isLastUpper}
        }

      } else {
        return null;
      }


    }

  }

  static checkAddressUSA() {
    return (control: AbstractControl): ValidationErrors | null => {

      const validCountryNames = ['us', 'usa', 'u.s.a.', 'united states', 'united states of america']

      const isInArray = validCountryNames.includes(control.value.toLowerCase());

      return isInArray ? null : {invalidName: control.value}
    }

  }

  static checkNotMinor(){


    return (control: AbstractControl): ValidationErrors | null => {

      const date = new Date().getFullYear()
      if (date - control.value >= 18) {
        return null
      }
      return {invalidYob: control.value}
    }

  }

  static isPasswordValid() {
    return (control: AbstractControl): ValidationErrors | null => {
      const validCharacter = ['!', '£', '$', '@', '#', '*', '€'];
      const validNephews = ['qui', 'quo', 'qua'];
      const minLength = 8;
      
      let uppercaseCount = 0;
      let specialCharCount = 0;
      let nephewCount = 0;
  
      for (let i = 0; i < control.value.length; i++) {
        const char = control.value[i];
  
        if (validCharacter.includes(char)) {
          specialCharCount++;
        }
  
        if (i < control.value.length - 2) {
          const substring = control.value.substr(i, 3).toLowerCase();
          if (validNephews.includes(substring)) {
            nephewCount++;
          }
        }
  
        if (char === char.toUpperCase() && char !== char.toLowerCase()) {
          uppercaseCount++;
        }
      }
  
      if (
        control.value.length >= minLength &&
        uppercaseCount >= 1 &&
        specialCharCount >= 2 &&
        nephewCount >= 2
      ) {
        return null;
      }
  
      return { invalidPassword: control.value };
    };
  }
  

}
