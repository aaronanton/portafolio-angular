import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //se importa el servicio ActivatedRoute URL://#/params
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit { 

  producto:any;
  id:string;

  constructor( private route: ActivatedRoute,  //se importa el servicio ActivatedRoute ActivatedRoute URL://#/params
               public _productoId:MainDataService ) { } //se inyecta el servicio MainDataService en la propiedad _mainData

  ngOnInit(): void {

    this.route.params
      .subscribe( parametros => { //ActivatedRoute URL://#/params
        //console.log(parametros.id);
        this._productoId.getProducto(parametros.id) // getProducto() se encuentra en MainDataService o _productoId
          .subscribe( resp => {
            this.id =  parametros.id;
            this.producto = resp;
            //console.log(resp);        
          });
        
      });
  }

}
