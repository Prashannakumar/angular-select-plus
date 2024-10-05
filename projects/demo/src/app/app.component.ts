import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSelectComponent } from '@ng-select/ng-select';
import { AngularSelectPlusComponent } from 'angular-select-plus';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AngularSelectPlusComponent, NgSelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo';
  selectedCar: number | null = null;

  cars = [
    {
      "title": "3000 GT"
    },
    {
      "title": "ASX"
    },
    {
      "title": "Canter"
    },
    {
      "title": "Carisma"
    },
    {
      "title": "Colt"
    },
    {
      "title": "Cordia"
    },
    {
      "title": "Cosmos"
    },
    {
      "title": "Diamante"
    },
    {
      "title": "Eclipse"
    },
    {
      "title": "Galant"
    },
    {
      "title": "Galloper"
    },
    {
      "title": "Grandis"
    },
    {
      "title": "Electric Vehicle (i-MiEV)"
    },
    {
      "title": "L200"
    },
    {
      "title": "L300"
    },
    {
      "title": "L400"
    },
    {
      "title": "Lancer"
    },
    {
      "title": "Mirage"
    },
    {
      "title": "Montero"
    },
    {
      "title": "Outlander"
    },
    {
      "title": "Pajero"
    },
    {
      "title": "Pajero Pinin"
    },
    {
      "title": "Pick-up"
    },
    {
      "title": "Plug-in Hybrid Outlander"
    },
    {
      "title": "Santamo"
    },
    {
      "title": "Sapporo"
    },
    {
      "title": "Sigma"
    },
    {
      "title": "Space Gear"
    },
    {
      "title": "Space Runner"
    },
    {
      "title": "Space Star"
    },
    {
      "title": "Space Wagon"
    },
    {
      "title": "Starion"
    },
    {
      "title": "Tredia"
    }
  ];

}
