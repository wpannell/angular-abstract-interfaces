import { IStrategy } from './strategy.model';

export class MinusStrategy extends IStrategy {

    calculate(a,b): number {
        return a - b;
    }
}