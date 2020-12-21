import { Injectable, Inject } from '@angular/core';
import { IStrategy } from '../models/strategy.model';
import { HttpClient } from '@angular/common/http';  
import { inject } from '@angular/core/testing';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

  constructor(
    private http: HttpClient, 
     private calcStrategy: IStrategy) {};
    
    getByCalc() {
        console.log(`Result is: ${this.calcStrategy.calculate(1,1)}`);
    }
}
