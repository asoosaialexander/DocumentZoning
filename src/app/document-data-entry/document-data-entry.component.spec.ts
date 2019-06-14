import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDataEntryComponent } from './document-data-entry.component';

describe('DocumentDataEntryComponent', () => {
  let component: DocumentDataEntryComponent;
  let fixture: ComponentFixture<DocumentDataEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentDataEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentDataEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
