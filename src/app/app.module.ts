import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SortableModule } from 'ngx-bootstrap/sortable';

import { AppComponent } from './app.component';
import { TunnelComponent } from './python/tunnel/tunnel.component';
import { HistogramComponent } from './python/histogram/histogram.component';
import { AppRoutingModule } from './app-routing-module';
import { AngularSplitModule } from 'angular-split';
import { PythonComponent } from './python/python.component';
import { TopbarComponent } from './python/topbar/topbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LeftMenuComponent } from './python/left-menu/left-menu.component';
import { DropdownDirective } from './python/left-menu/dropdown.directive';
import { TypeScriptComponent } from './typescript/typescript.component';

@NgModule({
  declarations: [
    AppComponent,
    TunnelComponent,
    HistogramComponent,
    PythonComponent,
    TopbarComponent,
    SidebarComponent,
    LeftMenuComponent,
    DropdownDirective,
    TypeScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonsModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    SortableModule.forRoot(),
    AngularSplitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
