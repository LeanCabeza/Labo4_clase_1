import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  edadUno: number = 0;
  edadDos: number = 0;
  promedio: number = 0;
  suma: number = 0;
  constructor() { }

  ngOnInit() {
  }

  calcular() {
    if (this.edadUno == 0 && this.edadDos == 0){
      Swal.fire(
        'Error: Datos Insuficientes',
        'Completa las edades' ,
        'error'
      )
    }else if (this.edadDos == 0)  {
      Swal.fire(
        'Error: Matematico',
        'No podes dividir por CERO' ,
        'error'
      )
    } else {
      this.suma = this.edadUno + this.edadDos;
      this.promedio = this.suma / 2;
    }
  }

  limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.promedio = 0;
    this.suma = 0;
  }
}