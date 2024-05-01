import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCardComponent } from './your-card.component';

describe('YourCardComponent', () => {
  let component: YourCardComponent;
  let fixture: ComponentFixture<YourCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourCardComponent]
    });
    fixture = TestBed.createComponent(YourCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
