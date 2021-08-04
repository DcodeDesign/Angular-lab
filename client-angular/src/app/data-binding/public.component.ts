import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  public text: string[] = ['text'];
  public textBis: string[] = ['textBis'];


  constructor() { }

  ngOnInit(): void {
  }

  public myTextChange($event){
    this.text = $event
  }

  public myTextChangeBis($event){
    this.textBis= $event
  }

}
