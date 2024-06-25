import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuArray: {name: string; route: string;}[] = [
    {
      name: 'FullScreen',
      route: 'fullScreen'
    },
    {
      name: 'Markers',
      route: 'markers'
    },
    {
      name: 'Propiedades',
      route: 'props'
    },
    {
      name: 'Zoom',
      route: 'zoom'
    },
  ]

}
