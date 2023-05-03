import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryIssuelistComponent } from './repository-issuelist.component';

describe('RepositoryIssuelistComponent', () => {
  let component: RepositoryIssuelistComponent;
  let fixture: ComponentFixture<RepositoryIssuelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryIssuelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositoryIssuelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
