import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent {
  result: Observable<number>;

  constructor(private _seriesService: SeriesService) {
    this.result = this._seriesService.getResult$;
  }
}
