import { Component } from '@angular/core';

import { CalculatorService } from './services/calculator-service.service';
import { IStrategy } from './models/strategy.model';
import { MinusStrategy } from './models/minus-strategy.model';
import { HttpClient } from '@angular/common/http';
import { PlusStrategy } from './models/plus-strategy.model';
import { Statement } from '@angular/compiler';

let calculatorServiceFactory = (httpClient: HttpClient, ourStrategy: IStrategy) => {
  return new CalculatorService(httpClient, ourStrategy);
};

// let StrategyFactory = () => {
//   return new MinusStrategy();
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: IStrategy, useClass: MinusStrategy
    },
    CalculatorService,
  ]
})
export class AppComponent {
  title = 'test-v9';

  constructor(
    private service: CalculatorService) {};
    
    useInComponent() {
      console.log(`App Component => `);
      this.service.getByCalc();
    }
}
