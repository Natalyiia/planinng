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
import { MenuComponent } from './menu/menu.component';
import { AddButtonComponent } from './add-button/add-button.component';

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
    MenuComponent,
    AddButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
