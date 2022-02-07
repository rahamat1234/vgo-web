import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { DomesticComponent } from './domestic/domestic.component';
import { FaqsComponent } from './faqs/faqs.component';
import { FleetComponent } from './fleet/fleet.component';
import { HomeComponent } from './home/home.component';
import { IntercityComponent } from './intercity/intercity.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { PriceComponent } from './price/price.component';
import { StorageComponent } from './storage/storage.component';
import { TeamComponent } from './team/team.component';
import { TransportComponent } from './transport/transport.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path: 'faqs', component:FaqsComponent},
  {path:'team',component:TeamComponent},
  {path:'price',component:PriceComponent},
  {path:'blog',component:BlogComponent},
  {path: 'contact',component:ContactComponent},
  {path:'transport',component:TransportComponent},
  {path:'logistics', component:LogisticsComponent},
  {path:'storage', component:StorageComponent},
  {path:'domestic', component:DomesticComponent},
  {path:'intercity', component:IntercityComponent},
  {path:'fleet', component:FleetComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
