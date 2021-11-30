import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form_login: FormGroup;
  loading  = false;

  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form_login = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })

  }

  ngOnInit(): void {
  }

  ingresar(){
    const user = this.form_login.value.usuario;
    const pass = this.form_login.value.password;
    console.log(user+pass);

    if (user == 'mauri' && pass == '123') {
      // Redireccion al dashboard
      this.fakeLoading();
      // this.router.navigate(['dashboard']);

    } else {
      // Mensaje
      this.error();
      this.form_login.reset();
    }
   }

    error(){
      this._snackBar.open('Usuario o Contraseña ingresadas son invalidas','',{
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
     }

    fakeLoading(){
      this.loading = true;
      setTimeout(() => {        
        // Se redirecciona al dahsboard
        this.router.navigate(['dashboard'])
        // this.loading = false;
      }, 500);
    }
}
