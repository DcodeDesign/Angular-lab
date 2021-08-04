import {
  AfterViewInit,
  Component,
  ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter,
  Input, OnDestroy,
  OnInit, Output, ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-new-modal',
  templateUrl: './new-modal.component.html',
  styleUrls: ['./new-modal.component.scss']
})
export class NewModalComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("containerModal", {static: true, read: ViewContainerRef}) container;
  @ViewChild("customModal", {static: true}) modal;
  @Input() data: any;
  @Input() component: any;
  @Output() public close:EventEmitter<string> = new EventEmitter();
  @Output() public closeData:EventEmitter<string> = new EventEmitter();

  private componentRef: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver,
              private el : ElementRef) {
  }

  ngOnInit(): void {
    this.createdContentModal()
  }

  ngAfterViewInit() {
    this.animationModal();
  }

  public createdContentModal(){
    let childComponent = this.resolver.resolveComponentFactory(this.component);
    this.componentRef = this.container.createComponent(childComponent);
    this.componentRef.instance.data = this.data;
  }

  public animationModal() {
    setTimeout(() => {
      const overlay =  this.el.nativeElement.querySelectorAll(".overlay")[0]
      const customModal = this.el.nativeElement.querySelectorAll(".custom-modal")[0];
      overlay.classList.add('anim-modal-bg');
      customModal.classList.add('anim-modal');
    }, 1)
  }

  public onCloseModal() {
    this.close.next('close');
  }

  ngOnDestroy() {
    // this.componentRef.destroy();
  }
}
