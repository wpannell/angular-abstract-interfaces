import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../services/calculator-service.service';

@Component({
  selector: 'app-child-of-app',
  templateUrl: './child-of-app.component.html',
  styleUrls: ['./child-of-app.component.scss']
})
export class ChildOfAppComponent implements OnInit {

  constructor(
    private service: CalculatorService,
  ) { };

  ngOnInit(): void {
    
  }

  useInComponent() {
    console.log(`ChildOfApp Component => `);
    this.service.getByCalc();
  }

}
