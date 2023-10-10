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

  static isPasswordValid(){
    return (control: AbstractControl): ValidationErrors | null => {
      //min: 8 caratteri,
      //almeno una maiuscola,
      //almeno uno dei nipoti di Paperino,
      //deve includere due dei caratteri speciali (!£$?@#*€)

      const validCharacter = ['!', '£', '$', '@', '#', '*', '€']
      const validNephews = ['qui', 'quo', 'qua']

      if (control.value.length >= 8 && control.value !== control.value.toLowerCase()) {

        return null
      }

      //control.value !== control.value.toLowerCase()
      //control.value.length >= 8
      return {invalidPassword: control.value}
    }

  }

}
