import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdventurousComponent } from './adventurous/adventurous.component';
import { ServicesComponent } from './services/services.component';
import { NatureComponent } from './nature/nature.component';
import { WayComponent } from './way/way.component';
import { LIFEComponent } from './life/life.component';
import { TheSeaComponent } from './the-sea/the-sea.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdventurousComponent,
    ServicesComponent,
    NatureComponent,
    WayComponent,
    LIFEComponent,
    TheSeaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
