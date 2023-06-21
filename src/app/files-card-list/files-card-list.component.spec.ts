import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesCardListComponent } from './files-card-list.component';

describe('FilesCardListComponent', () => {
  let component: FilesCardListComponent;
  let fixture: ComponentFixture<FilesCardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilesCardListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
