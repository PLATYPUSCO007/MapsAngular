import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsLayoutComponent } from './Layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './Pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './Pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './Pages/properties-page/properties-page.component';
import { ZoomRangePageComponent } from './Pages/zoom-range-page/zoom-range-page.component';

const routes: Routes = [
  {
    path: '',
    component: MapsLayoutComponent,
    children: [
      {
        path: 'fullScreen',
        component: FullScreenPageComponent
      },
      {
        path: 'markers',
        component: MarkersPageComponent
      },
      {
        path: 'props',
        component: PropertiesPageComponent
      },
      {
        path: 'zoom',
        component: ZoomRangePageComponent
      },
      {
        path: '**',
        redirectTo: 'fullScreen'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
