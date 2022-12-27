import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import { DatePipe } from './shared';
import { ElementModule } from './element.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, DatePipe],
  imports: [BrowserModule, BrowserAnimationsModule, ScrollingModule, ElementModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
