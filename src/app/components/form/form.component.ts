import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  seriesN: number;
  title: string;

  constructor(private _seriesService: SeriesService) {
    this.title = `series(n) = 4•triangular(n-1) - 2•prime(n-1) + fibonacci(n+2)`;
    this.seriesN = 0;
  }

  ngOnInit(): void {}

  calculateSeries(value: number) {
    this._seriesService.getResult(value);
  }

  resetResult() {
    this.seriesN = 0;
    this._seriesService.resetResult();
  }
}
