import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  seriesN: number | null;
  title: string;

  constructor() {
    this.title = `series(n) = 4triangular(n-1) - 2primo(n-1) + fibonacci(n+2)`;
    this.seriesN = null;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  calculateSeries() {
    console.log('qsdf');
  }
}
