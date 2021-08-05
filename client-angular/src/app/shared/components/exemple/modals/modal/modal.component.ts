import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  ComponentFactory, AfterViewInit, AfterContentInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import {ModalDirective} from "./modal-directive/modal.directive";
import {ModalItem} from './modal-item/modal-item';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ModalComponent implements OnInit, AfterContentInit, OnDestroy {
  @Input() ads: any;
  currentAdIndex = -1;
  @ViewChild(ModalDirective, {static: true}) adHost!: ModalDirective;
  private componentRef: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.componentRef = null
    this.loadComponent();
  }

  loadComponent() {
      const adItem = this.ads[0];
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory((adItem.component as any));

      const viewContainerRef = this.adHost.viewContainerRef;
      this.ref.detectChanges();

      viewContainerRef.clear();

      this.componentRef = viewContainerRef.createComponent((componentFactory as ComponentFactory<any>));
      this.componentRef.instance.data = adItem.data;

  }

  ngAfterContentInit(): void {
    this.loadComponent();
  }

  ngOnDestroy(): void {
    this.componentRef.destroy()
    this.componentRef.instance.destroy()
  }

}
