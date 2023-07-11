import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomNgIfDirective } from './custom-ng-if.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, CustomNgIfDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
