import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';
import { MathsyService } from './Services/mathsy.service';

@Directive({
  selector: '[appMathsyValidator]'
  
})

export class MathsyValidatorDirective implements Validator {


  constructor(
    private mathsyService: MathsyService
  ) { }


  validate(control: FormControl): ValidationErrors {
       return this.validateMathsExpression(control);
       
    }

  

  validateMathsExpression(control: FormControl): ValidationErrors | null {
    if (!(this.mathsyService.isValidMathExpression(control.value)) ) {   
      // Return error if expression is not valid     
      return {mathsyExpression : this.mathsyService.error}; }
    
    // If no error, return null  
    return null;
  }

}
