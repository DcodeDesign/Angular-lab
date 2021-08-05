import {ComponentFixture, TestBed} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {DebugElement} from "@angular/core";
import {By} from "protractor";

describe('AppComponent', () => {
  /*let comp:     AppComponent;
  let fixture:  ComponentFixture<AppComponent>;
  let debug:    DebugElement;
  let el:       HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ comp ],
    });

    fixture = TestBed.createComponent(comp);

    debug = fixture.debugElement.query(By.css('h1'));
    el = debug.nativeElement;
  });*/

  // declaration du module
  beforeEach(async ()=>{
   await TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents() // chargement asynchrone des fichier html et css
  })

  // test
  it('App title', () => {
      const fixture = TestBed.createComponent(AppComponent)
      console.log(fixture.nativeElement.querySelector('span'));
      console.log(fixture.nativeElement.querySelector('span').innerText);
  })
})
