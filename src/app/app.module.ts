import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FaqsComponent } from './faqs/faqs.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { PriceComponent } from './price/price.component';
import { TeamComponent } from './team/team.component';
import { TransportComponent } from './transport/transport.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { StorageComponent } from './storage/storage.component';
import { DomesticComponent } from './domestic/domestic.component';
import { IntercityComponent } from './intercity/intercity.component';
import { FleetComponent } from './fleet/fleet.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    HomeComponent,
    FaqsComponent,
    BlogComponent,
    ContactComponent,
    PriceComponent,
    TeamComponent,
    TransportComponent,
    LogisticsComponent,
    StorageComponent,
    DomesticComponent,
    IntercityComponent,
    FleetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
