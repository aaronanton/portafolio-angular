import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // se importa HttpClientModule en el servicio y en el app.module.ts

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  info:any = {};  //para llamarlo en el html
  data:any = {};
  cargada = false; //no estoy claro por que

  constructor( private http: HttpClient ) { // se importa HttpClientModule en el servicio y en el app.module.ts

    this.cargarInfo();   //se cargan las dos funciones creadas abajo para hacer las consultas http
    this.cargarEquipo();
  }
  private cargarInfo()  {

    this.http.get('assets/data/main-data.json')
      .subscribe( resp =>  {
        this.info = resp;
        //this.cargada = true;
        console.log("cargarEquipo .OK!");
        console.log(resp);

      // .subscribe( (resp:any) => {
      // console.log(resp.tw);

      // .subscribe( resp => {
      //   console.log(resp['tw']);
      });
  }
  private cargarEquipo()  {

    this.http.get('https://angular-portafolio-2c2e6.firebaseio.com/.json')
      .subscribe( resp =>  {
        this.data = resp;
        console.log("cargarData .OK!");
        console.log(resp);
        
      });
  }
}
