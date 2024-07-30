import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './Components/mini-map/mini-map.component';
import { SideMenuComponent } from './Components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './Layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './Pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './Pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './Pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './Pages/zoom-range-page/zoom-range-page.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
  ]
})
export class MapsModule { }
