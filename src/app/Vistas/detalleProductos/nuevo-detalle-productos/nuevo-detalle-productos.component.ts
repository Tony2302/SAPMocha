import { ActivatedRoute, Router } from '@angular/router';
import { detalleCategorias } from './../../../Clases/detalleProductos';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Productores } from 'src/app/Clases/productores';
import { Productos } from 'src/app/Clases/productos';
import { DetalleCategoriasService } from 'src/app/Servicios/detalle-categorias.service';
import Swal from 'sweetalert2';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-nuevo-detalle-productos',
  templateUrl: './nuevo-detalle-productos.component.html',
  styleUrls: ['./nuevo-detalle-productos.component.css']
})
export class NuevoDetalleProductosComponent implements OnInit {

  proved = new FormGroup({

    idProductos: new FormControl('', Validators.required),
    stock: new FormControl('', Validators.required),
    precioUnidad: new FormControl('', Validators.required),
    precioDocena: new FormControl('', Validators.required),
    idProductores: new FormControl('', [Validators.required, Validators.email]),


  });


  productorObj: Productores[] = [];
  productosObj: Productos[] = [];
  idDetalle:number=0;

  constructor(private detalleCategoria: DetalleCategoriasService, private ra:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {


    this.idDetalle = this.ra.snapshot.params.id;






    this.listarProductor();
    this.listarProductos();



    if (this.idDetalle != null) {
      this.cargar(this.idDetalle);

    }
  }


  guardar(pro:any)
  {






    if(pro.invalid)
    {

     
      Swal.fire('Productos','Todos los campos son requeridos','warning');

      return
    }


    if(this.idDetalle==null)

    {

    



       this.detalleCategoria.nuevo(pro).subscribe(res=>{

        
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Guardado con exito',
          showConfirmButton: false,
          timer: 1500,



        });
        this.router.navigate(['menu/listarDetalle'])

       },error=>{

         console.log(error);

       });
      }else

      {

        pro.idDetalleCategorias = this.idDetalle;
       
  
  
  
  
        this.detalleCategoria.editar(this.idDetalle, pro).subscribe(res => {
  
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Editado con exito',
            showConfirmButton: false,
            timer: 1500,
  
  
  
          })
  
          this.router.navigate(['/menu/listarDetalle']);
  
        }, error => console.log(error))
           

      }
     
  }


  
  listarProductos() {

    // this.spinner = 1;

    this.detalleCategoria.listarProductos().subscribe(res => {

      this.productosObj = res;


  
      // this.spinner = 0;


    }, error => {

      alert(error);

      // this.spinner = 1;

    });





  }




  listarProductor() {

    // this.spinner = 1;

    this.detalleCategoria.listarProductor().subscribe(res => {

      this.productorObj = res;


      // this.spinner = 0;


    }, error => {

      alert(error);

      // this.spinner = 1;

    });





  }



  
  cargar(id: number) {



    this.detalleCategoria.cargar(id).subscribe(res => {




      this.proved.patchValue(Object.assign({}, res));



    });



  }

}
