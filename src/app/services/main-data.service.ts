import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // se importa HttpClientModule en el servicio y en el app.module.ts

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  info:any = {};  //para llamarlo en el html
  cargada = false; //no estoy claro por que

  constructor( private http: HttpClient ) { // se importa HttpClientModule en el servicio y en el app.module.ts

    this.http.get('assets/data/main-data.json')
      .subscribe( resp => {
        this.info = resp;
        this.cargada = true;
        //console.log(resp);
        console.log("main data .OK!");

      // .subscribe( (resp:any) => {
      // console.log(resp.tw);

      // .subscribe( resp => {
      //   console.log(resp['tw']);
      });
    
  }
}
