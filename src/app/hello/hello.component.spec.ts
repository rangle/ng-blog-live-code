import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('My Sample Test', () => {
  it('my sample test', () => {
    const x = 1 + 2;
    expect(x).toBe(3);
  });

  it('my sample test2', () => {
    const x = 2 + 2;
    expect(x).toBe(4);
  });
});

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HelloComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render text', () => {
    expect(fixture.elementRef.nativeElement.getElementsByTagName('p').length).toBe(1);
  });

  it('say hello clicked', () => {
    component.sayHello();
    fixture.detectChanges();
    expect(fixture.elementRef.nativeElement.getElementsByTagName('p')[0].innerText).toBe('Say Hello Clicked');
  });
});
