import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
})
export class NewArticleComponent implements OnInit {
  articleFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

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
  }
}
