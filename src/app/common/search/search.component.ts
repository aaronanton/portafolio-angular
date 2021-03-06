import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainDataService } from '../../services/main-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor( private route: ActivatedRoute,
               public _mainData: MainDataService ) { }

  ngOnInit(): void {

    this.route.params.subscribe( params => {
      console.log(params['termino']);
      this._mainData.buscarProducto( params['termino'] );
      
    } )
  }

}
