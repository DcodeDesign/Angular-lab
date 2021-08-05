import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = "Title"
  public selected: Date;
  public text: string;
  public text2: string;

  ngOnInit(): void {
    this.text = "Lorem ipsum dolor."
    this.text2 = "Lorem ipsum dolor velit, finibus et viverra non, scelerisque in purus."
  }

  private test() {
    console.log('test')
  }
}
