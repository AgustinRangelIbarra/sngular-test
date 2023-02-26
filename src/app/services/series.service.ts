import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private resultOfSeries: number;
  private _resultOfSeries$: BehaviorSubject<number>;

  constructor() {
    this._resultOfSeries$ = new BehaviorSubject<number>(0);
    this.resultOfSeries = 0;

    this._resultOfSeries$.next(this.resultOfSeries);
  }

  get getResult$(): Observable<number> {
    return this._resultOfSeries$.asObservable();
  }

  resetResult() {
    this._resultOfSeries$.next(0);
  }

  getResult(inputValue: number): void {
    this._resultOfSeries$.next(this.calculateSeries(inputValue));
  }

  calculateSeries(inputValue: number): number {
    let res =
      4 * this.calculateTriangular(inputValue) -
      2 * this.calculatePrimeNumber(inputValue) +
      this.calculateFibonacci(inputValue);

    console.log({ res });

    return res;
  }

  calculateFibonacci(userValue: number): number {
    let fib = userValue + 2;
    if (fib <= 1) {
      console.log('Fib> ', fib);
      return fib;
    }

    const result = [0, 1];
    for (let i = 2; i <= fib; i++) {
      result[i] = result[i - 2] + result[i - 1];
    }
    console.log('Fib> ', parseFloat(result[result.length - 1].toFixed(2)));
    return parseFloat(result[result.length - 1].toFixed(2));
  }

  calculateTriangular(userValue: number): number {
    let input = userValue - 1;
    let triangular = 0;
    if (input <= 0) {
      console.log('Tri>', 0);
      return 0;
    }
    for (let i = 1; i <= input; i++) {
      triangular += i;
    }
    console.log('Tri>', triangular);
    return triangular;
  }

  calculatePrimeNumber(userValue: number): number {
    let input = userValue - 1;
    if (input <= 0) {
      console.log('Prime > ', 0);
      return 0;
    }

    let i,
      primes = [2, 3],
      n = 5;
    const isPrime = (n: number) => {
      let i = 1,
        p = primes[i],
        limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
        if (n % p === 0) {
          return false;
        }
        i += 1;
        p = primes[i];
      }
      return true;
    };
    for (i = 2; i <= input; i += 1) {
      while (!isPrime(n)) {
        n += 2;
      }
      primes.push(n);
      n += 2;
    }

    console.log('Prime> ', primes[input - 1]);
    return primes[input - 1];
  }
}
