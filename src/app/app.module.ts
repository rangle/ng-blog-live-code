import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { BlogRollComponent } from './blog-roll/blog-roll.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { HomeComponent } from './home/home.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ControlErrorComponent } from './control-error/control-error.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app.effects';
import { metaReducers } from './store/logger';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    BlogRollComponent,
    ArticleItemComponent,
    HomeComponent,
    NewArticleComponent,
    ControlErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      app: appReducer,
    }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
