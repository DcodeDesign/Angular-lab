import {
  ApplicationRef, ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef, EmbeddedViewRef,
  Injectable,
  Injector
} from '@angular/core';
import {ModalComponent} from "./modal.component";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private componentRef: ComponentRef<any>;
  private componentFactory: ComponentFactory<ModalComponent>;
  public isExist = new BehaviorSubject('open');
  private modalComponent: HTMLElement;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private injector: Injector,
              private appRef: ApplicationRef) {
  }

  public open(templateModalComponent, data) {
    this.create(templateModalComponent, data);
  }

  public create(templateModalComponent, data) {
    if (!this.componentFactory) {
      this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(ModalComponent);
      this.componentRef = this.componentFactory.create(this.injector);
      this.componentRef.instance.data = data
      this.componentRef.instance.component = templateModalComponent
      this.appRef.attachView(this.componentRef.hostView);
      const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      const element: HTMLElement = document.body.appendChild(domElem); // Component needs to be added here
      this.modalComponent = document.body.appendChild(element);
      this.closeEmit();
      this.closeDataEmit();
    }
  }

  public closeEmit() {
    const componentEmitClose$ = this.componentRef.instance.close
    componentEmitClose$.subscribe((close) => {
      if(close){
        this.modalComponent.remove();
        this.componentRef.destroy();
        this.componentFactory = null;
      }
    })
    return componentEmitClose$;
  }

  public closeDataEmit() {
    const componentEmitClose$ = this.componentRef.instance.closeData;
      componentEmitClose$.subscribe((close) => {
        if(close){
          this.modalComponent.remove();
          this.componentRef.destroy();
          this.componentFactory = null;
        }
      })
      return componentEmitClose$;
  }


}
