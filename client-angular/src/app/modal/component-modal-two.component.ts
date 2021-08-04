import {Component, OnInit} from '@angular/core';

import {TempateModalComponent} from "./tempate-modal/tempate-modal.component";
import {NewModalService} from "./new-modal/new-modal.service";

@Component({
  selector: 'app-component-modal-two',
  templateUrl: './component-modal-two.component.html',
  styleUrls: ['./component-modal-two.component.scss']
})
export class ComponentModalTwoComponent implements OnInit {

  constructor(private newModalService: NewModalService) {
  }

  ngOnInit() {
  }

  openModalOne() {
    this.newModalService.open(TempateModalComponent, {name: 'Jhon', bio: 'persona'})
    this.newModalService.closeDataEmit().subscribe((data)=>{
      console.log('AfterClose', data);
    })
  }

  openModalTwo() {
    this.newModalService.open(TempateModalComponent, {name: 'Thomas', bio: 'Heros'})
    this.newModalService.closeEmit().subscribe((data)=>{
      console.log('AfterClose', data);
    })
  }

}
