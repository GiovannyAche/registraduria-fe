import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Resultado } from '../../../modelos/resultado.model';
import { ResultadoService } from '../../../servicios/resultado.service';

@Component({
  selector: 'ngx-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  modoCreacion: boolean = true;
  id_resultado: string = "";
  intentoEnvio: boolean = false;
  elResultado: Resultado = {
    numvotos: "",
    candidato: "",
    mesa:""
  }
  constructor(private miServicioResultados: ResultadoService,
    private rutaActiva: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (this.rutaActiva.snapshot.params.id_resultado) {
      this.modoCreacion = false;
      this.id_resultado = this.rutaActiva.snapshot.params.id_resultado;
      this.getResultado(this.id_resultado)
    } else {
      this.modoCreacion = true;
    }
  }
  getResultado(id: string) {
    this.miServicioResultados.getresultado(id).
      subscribe(data => {
        this.elResultado = data;
      });
  }
  agregar(): void {
    if (this.validarDatosCompletos()) {
      this.intentoEnvio = true;
      this.miServicioResultados.crear(this.elResultado).
        subscribe(data => {
          Swal.fire(
            'Creado',
            'El resultado ha sido creado correctamente',
            'success'
          )
          this.router.navigate(["pages/resultados/listar"]);
        });
    }

  }
  editar(): void {
    this.intentoEnvio = true;
    if (this.validarDatosCompletos()) {
      this.miServicioResultados.editar(this.id_resultado, this.elResultado).
        subscribe(data => {
          Swal.fire(
            'Actualizado',
            'El resultado ha sido actualizado correctamente',
            'success'
          )
          this.router.navigate(["pages/resultados/listar"]);
        });
    }

  }
  validarDatosCompletos():boolean{
    this.intentoEnvio=true;
    if(this.elResultado.numvotos=="" || 
       this.elResultado.candidato==""||
       this.elResultado.mesa==""){
        
      return false;
    }else{
      return true;
    }
  }
}
