import { Component, OnInit } from '@angular/core';
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _mainData: MainDataService ) { } //se inyecta el servicio MainDataService en la propiedad _mainData

  ngOnInit(): void {
  }

}
