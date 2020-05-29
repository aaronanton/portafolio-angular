import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // se importa HttpClientModule en el servicio y en el app.module.ts

@Injectable({
  providedIn: 'root'
})
export class MainDataService {

  info:any = {};  //para llamarlo en el html
  data:any = {};
  cargada = false; //para el SVG loading icon

  productoFiltrado = [];

  constructor( private http: HttpClient ) { // se importa HttpClientModule en el servicio y en el app.module.ts

    this.cargarInfo();   //se cargan las dos funciones creadas abajo para hacer las consultas http
    this.cargarData();    
  }

  private cargarInfo()  {

    this.http.get('assets/data/main-data.json')
      .subscribe( resp =>  {
        this.info = resp;
        //console.log(resp);
      });
  }
  private cargarData()  {
    
    return new Promise( (resolve, reject) => {
      this.http.get('https://angular-portafolio-2c2e6.firebaseio.com/.json')
      .subscribe( resp =>  {
        this.data = resp;
        //console.log(resp);

        setTimeout(() => {
          this.cargada = true;  //para el SVG loading icon
        }, 1000);

        console.log("mainData .OK!");
        resolve();


      // .subscribe( (resp:any) => {
      // console.log(resp.tw);

      // .subscribe( resp => {
      //   console.log(resp['tw']);
      });      
    });

  }
  getProducto(id:string){
    return this.http.get(`https://angular-portafolio-2c2e6.firebaseio.com/productos/${ id }.json`);
  }

  buscarProducto(termino:string){

    if ( this.data.productos_idx === 0 ) {
      //cargar producto
      this.cargarData().then(()=>{
        //ejecutar despues de tener los productos
        //aplicar filtro
        this.filtrarProductos( termino );
      })
    } else {
      //aplicar el filtro
      this.filtrarProductos( termino );
      }    
    }

    private filtrarProductos( termino:string ){
      
      console.log(this.data.productos_idx);
      this.productoFiltrado = [];

      termino = termino.toLowerCase();
      
      //**NEW probar con filter instead forEach*/
      this.data.productos_idx.forEach( prod => {
        
        const tituloLower = prod.titulo.toLowerCase();

        if ( prod.categoria.indexOf(termino) >= 0 || tituloLower.indexOf(termino) >= 0 ) {
          this.productoFiltrado.push(prod);
        }
      });
    }
}
