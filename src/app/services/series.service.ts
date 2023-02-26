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
      4 * this.calculateTriangular(inputValue - 1) -
      2 * this.calculatePrimeNumber(inputValue - 1) +
      this.calculateFibonacci(inputValue + 2);

    console.log('-----');

    return res;
  }

  calculateFibonacci(userValue: number): number {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    for (let i = 1; i <= userValue; i++) {
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }

    console.log('calculateFibonacci: ', n1);
    return n1;
  }

  calculateTriangular(userValue: number): number {
    let input = userValue;
    let triangular = 0;
    if (input <= 0) {
      return 0;
    }
    for (let i = 1; i <= input; i++) {
      triangular += i;
    }

    console.log('calculateTriangular', triangular);
    return triangular;
  }

  calculatePrimeNumber(userValue: number): number {
    let input = userValue;
    if (input <= 0) {
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
    console.log('calculatePrimeNumber', primes[input - 1]);
    return primes[input - 1];
  }
}
