import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewArticleComponent } from './new-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorComponent } from '../control-error/control-error.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

describe('NewArticleComponent', () => {
  let component: NewArticleComponent;
  let fixture: ComponentFixture<NewArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule, RouterModule.forRoot([])],
      declarations: [NewArticleComponent, ControlErrorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
