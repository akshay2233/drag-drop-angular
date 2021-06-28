import { ToolbarComponent } from './generic-components/toolbar/toolbar.component';
import { TextboxComponent } from './generic-components/textbox/textbox.component';
import { DropdownComponent } from './generic-components/dropdown/dropdown.component';
import { SpinnerComponent } from './generic-components/spinner/spinner.component';
import { TableComponent } from './generic-components/table/table.component';
import { ButtonComponent } from './generic-components/button/button.component';
import { ApplicationRef, Component, ComponentFactoryResolver, Injector, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  even = [];
  dataArry: any = [
    { name: 'Button', component: ButtonComponent },
    { name: 'Table', component: TableComponent },
    { name: 'Spinner', component: SpinnerComponent },
    { name: 'Dropdown', component: DropdownComponent },
    { name: 'Textbox', component: TextboxComponent },
    { name: 'Toolbar', component: ToolbarComponent },

  ];

  @ViewChild('component', { read: ViewContainerRef }) component: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private app: ApplicationRef
  ) { }

  drop(event: CdkDragDrop<number[]>, el: Element): any {
    if (event?.item?.data) {
      const factory = this.resolver.resolveComponentFactory(event.item.data.component);
      const newNode = document.createElement('div');
      newNode.id = 'barfoo';
      el.appendChild(newNode);
      const ref = factory.create(this.injector, [], newNode);
      this.app.attachView(ref.hostView);
    }
  }
}
