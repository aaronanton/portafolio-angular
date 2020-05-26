import { Component, OnInit } from '@angular/core';
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public _mainData: MainDataService ) { } //se inyecta el servicio MainDataService en la propiedad _mainData

  ngOnInit(): void {
  }

}
