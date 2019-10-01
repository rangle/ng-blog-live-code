import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new-article', component: NewArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
