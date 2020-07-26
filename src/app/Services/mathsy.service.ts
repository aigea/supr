import { Injectable } from '@angular/core';
import * as mathsy from 'mathjs';

@Injectable({
  providedIn: 'root'
})
export class MathsyService {

  constructor() { }

  isValidMathExpression(mathsyExpression: string) : boolean {
    
    try {
      mathsy.parse(mathsyExpression);
      return true;
      
    } catch (error) {    
      return false;
    }

  }





}
