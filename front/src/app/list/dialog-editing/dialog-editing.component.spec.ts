import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditingComponent } from './dialog-editing.component';

describe('DialogEditingComponent', () => {
  let component: DialogEditingComponent;
  let fixture: ComponentFixture<DialogEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
