import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FetchService } from './../fetch.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  articleFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private fetchService: FetchService, private router: Router) {}

  ngOnInit() {
    // this.articleFormGroup = new FormGroup({
    //   title: new FormControl('', [Validators.required, Validators.minLength(10)]),
    //   author: new FormControl(''),
    //   body: new FormControl('', [Validators.required, Validators.minLength(10)]),
    //   date: new FormControl('', [Validators.required]),
    // });
    this.articleFormGroup = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(10)]],
      author: [''],
      body: ['', [Validators.required, Validators.minLength(10)]],
      date: ['', [Validators.required]],
    });
  }

  saveArticle() {
    console.log(this.articleFormGroup);
    const article = {
      title: this.articleFormGroup.controls.title.value,
      author: this.articleFormGroup.controls.author.value,
      date: new Date(2019, 10, 2),
      body: this.articleFormGroup.controls.body.value,
      id: -1,
      isPublished: true,
    };
    this.fetchService.save(article)
      .subscribe(() => {
        this.router.navigateByUrl('');
      });
  }
}
