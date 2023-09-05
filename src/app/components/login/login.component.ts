import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataUser: User= {
    "user": "",
    "pass": ""
  };
  usuarios:Array<User> = [
    {
      id: "1",
      user: 'test',
      pass: 'test'
    }
  ];
  
  
  constructor() {
   }

  ngOnInit() {
  }

  login(){
    const usuarioEncontrado = this.usuarios.filter(u => u.user === this.dataUser.user && u.pass === this.dataUser.pass);

    if (usuarioEncontrado.length > 0) {
      Swal.fire(
        'Loggeado con exito!',
        'Accediste correctamente' ,
        'success'
      )
    } else {
      Swal.fire(
        'Error: Datos invalidos',
        'Proba con el usuario test y la contraseña test...' ,
        'error'
      )
    }
  }

}
