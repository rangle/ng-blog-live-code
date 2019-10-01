import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { ArticleComponent } from './article/article.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { HomeComponent } from './home/home.component';
import { NewArticleComponent } from './new-article/new-article.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        ArticleComponent,
        BlogRollComponent,
        ArticleItemComponent,
        HomeComponent,
        NewArticleComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular Training!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Training!');
  });

  it('should render nav bar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.app-nav').textContent).toContain('Angular Training!HomeNew Article');
  });
});
