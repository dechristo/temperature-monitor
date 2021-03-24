import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorStatisticsComponent } from './sensor-statistics.component';

describe('SensorStatisticsComponent', () => {
  let component: SensorStatisticsComponent;
  let fixture: ComponentFixture<SensorStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorStatisticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
