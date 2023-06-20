import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NihilAddComponent } from './nihil-add.component';

describe('NihilAddComponent', () => {
  let component: NihilAddComponent;
  let fixture: ComponentFixture<NihilAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NihilAddComponent]
    });
    fixture = TestBed.createComponent(NihilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
