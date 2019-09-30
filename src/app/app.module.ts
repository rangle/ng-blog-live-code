import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { ArticleItemComponent } from './article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    BlogRollComponent,
    ArticleItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
