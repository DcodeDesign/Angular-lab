import {AfterContentInit, Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { ModalService} from "./modal/modal.service";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss']
})
export class ModalComponentComponent implements OnInit, AfterContentInit {
  bodyText: string;

  @ViewChild("body", {static: true}) bodyElem: ElementRef;
  private readonly window: any;

  constructor(private modalService: ModalService,
              @Inject(DOCUMENT) private document: Document) {

    this.window = this.document.defaultView;
  }

  ngOnInit() {
    console.log(this.document.querySelector('body'));
    console.log(this.window);
    this.bodyText = 'This text can be updated in modal 1';
  }

  ngAfterContentInit(): void {
    console.log(this.bodyElem)
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
