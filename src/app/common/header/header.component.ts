import { Component, OnInit } from '@angular/core';
import { MainDataService } from '../../services/main-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _mainData: MainDataService, //se inyecta el servicio MainDataService en la propiedad _mainData
               private router: Router) { }       //se inyecta el servicio Router de @angular/router

  ngOnInit(): void {
  }

  buscarProducto( termino:string ){
    //console.log(termino);
    if (termino.length < 1) { // validacion para no hacer busqueda en blanco
      return;
    }

    this.router.navigate(['/search' , termino]);
  }
}
