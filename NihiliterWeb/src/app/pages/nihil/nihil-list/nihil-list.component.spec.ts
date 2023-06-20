import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NihilListComponent } from './nihil-list.component';

describe('NihilListComponent', () => {
  let component: NihilListComponent;
  let fixture: ComponentFixture<NihilListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NihilListComponent]
    });
    fixture = TestBed.createComponent(NihilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
