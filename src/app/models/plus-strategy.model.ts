import { IStrategy } from './strategy.model';

export class PlusStrategy extends IStrategy {
    calculate(a,b): number {
        return a + b;
    }
}