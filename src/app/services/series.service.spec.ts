import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should calculateSeries value n = 1; equals 2 ', () => {
    expect(service.calculateSeries(1)).toBe(2);
  });

  it('Should calculateSeries value n = 2; equals 3', () => {
    expect(service.calculateSeries(2)).toBe(3);
  });

  it('Should calculateSeries value n = 3; equals 11', () => {
    expect(service.calculateSeries(3)).toBe(11);
  });

  it('Should calculateSeries value n = 4; equals 22', () => {
    expect(service.calculateSeries(4)).toBe(22);
  });

  it('Should calculateSeries value n = 5; equals 39', () => {
    expect(service.calculateSeries(5)).toBe(39);
  });

  it('Should calculateSeries value n = 6; equals 59', () => {
    expect(service.calculateSeries(6)).toBe(59);
  });

  it('Should calculateSeries value n = 7; equals 92', () => {
    expect(service.calculateSeries(7)).toBe(92);
  });

  it('Should calculateSeries value n = 8; equals 133', () => {
    expect(service.calculateSeries(8)).toBe(133);
  });

  it('Should calculateSeries value n = 9; equals 195', () => {
    expect(service.calculateSeries(9)).toBe(195);
  });

  it('Should calculateSeries value n = 10; equals 278', () => {
    expect(service.calculateSeries(10)).toBe(278);
  });
});
