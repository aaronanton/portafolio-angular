import { Component, OnInit } from '@angular/core';
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //PROPIEDAD. instruccion de angular para el anio dinamico del footer
  anio: number = new Date().getFullYear();

  constructor( public _mainData: MainDataService ) { } //se inyecta el servicio MainDataService en la propiedad _mainData

  ngOnInit(): void {
  }

}
