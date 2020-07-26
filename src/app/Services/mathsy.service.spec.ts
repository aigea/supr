import { TestBed } from '@angular/core/testing';

import { MathsyService } from './mathsy.service';

describe('MathsyService', () => {
  let service: MathsyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathsyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('3+2+4 should be a valid expression', () => {
    expect(service.isValidMathExpression("3+2+4")).toBeTruthy();
  });

  it('+2 should be a valid expression', () => {
    expect(service.isValidMathExpression("+2")).toBeTruthy();
  });

  it('-2 should be a valid expression', () => {
    expect(service.isValidMathExpression("-2")).toBeTruthy();
  });

  it('sin(30) + cos(20) should be a valid expression', () => {
    expect(service.isValidMathExpression("sin(30) + cos(20)")).toBeTruthy();
  });

  it('sin(30 should NOT be a valid expression', () => {
    expect(service.isValidMathExpression("sin(30")).toBeFalsy();
  });

  it('3++ should NOT be a valid expression', () => {
    expect(service.isValidMathExpression("3++")).toBeFalsy();
  });

  it('3+ should NOT be a valid expression', () => {
    expect(service.isValidMathExpression("3+")).toBeFalsy();
  });

  it('sin(30) + cos(20) should be approximately equal to −0.5799495623', () => {
    expect(service.evaluateExpression("sin(30) + cos(20)")).toBeCloseTo(-0.5799495623);
  });


});
