import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator-service.service';
import { IStrategy } from '../models/strategy.model';
import { PlusStrategy } from '../models/plus-strategy.model';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss'],
  providers: [
    {
      provide: IStrategy, useClass: PlusStrategy
    },
    CalculatorService,
  ]
})
export class OtherComponent implements OnInit {

  constructor(
    private service: CalculatorService) {};

  ngOnInit(): void {
  }

  useInComponent() {
    console.log(`Other Component => `);
    this.service.getByCalc();
  }

}
