import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataUser: User= {
    "user": "",
    "pass": ""
  };

  usuarios:Array<User> = [];
  
  
  constructor() {
    const usuariosLocalStorage = localStorage.getItem('users');
    if (usuariosLocalStorage) {
      this.usuarios = JSON.parse(usuariosLocalStorage);
    }
   }

  ngOnInit() {
  }

  register() {
    const newUser: User = {
      user: this.dataUser.user,
      pass: this.dataUser.pass
    };

    this.usuarios.push(newUser);
    localStorage.setItem('users', JSON.stringify(this.usuarios));

    this.dataUser.user = '';
    this.dataUser.pass = '';
  }
    

}
