import { TableComponent } from './generic-components/table/table.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './generic-components/button/button.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MaterialModule } from './matreial.module';
import { SpinnerComponent } from './generic-components/spinner/spinner.component';
import { TextboxComponent } from './generic-components/textbox/textbox.component';
import { DropdownComponent } from './generic-components/dropdown/dropdown.component';
import { ToolbarComponent } from './generic-components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TableComponent,
    SpinnerComponent,
    TextboxComponent,
    DropdownComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
