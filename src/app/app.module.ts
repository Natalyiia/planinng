import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TitleComponent } from './title/title.component';
import { TabComponent } from './tab/tab.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { FilterFieldComponent } from './filter-field/filter-field.component';
import { SessionRowComponent } from './session-row/session-row.component';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';
import {FormsModule} from "@angular/forms";
import { EventComponent } from './event/event.component';
import { SelectFieldComponent } from './select-field/select-field.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckBoxComponent } from './check-box/check-box.component';
import {DragDropModule} from "@angular/cdk/drag-drop";

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TitleComponent,
    TabComponent,
    SearchFieldComponent,
    FilterFieldComponent,
    SessionRowComponent,
    ModalComponent,
    ButtonComponent,
    EventComponent,
    SelectFieldComponent,
    RadioButtonComponent,
    CheckBoxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
