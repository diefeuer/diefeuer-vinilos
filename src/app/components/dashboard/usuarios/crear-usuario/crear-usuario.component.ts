import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../../services/usuario.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

 

  entrega: string[] = [
    'Retiro', 'Envío'
  ];
  form: FormGroup;

  constructor(private fb: FormBuilder, 
              private _usuarioService:UsuarioService,
              private router: Router,
              private _snackBar: MatSnackBar ) { 
    this.form = this.fb.group({
      correo: ['',Validators.required],
      fono: ['',Validators.required],
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      direccion: ['',Validators.required],
      comuna: ['',Validators.required],
      entrega: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }

  agregarUsuario(){

    const user: Usuario = {
      correo: this.form.value.correo,
      fono: this.form.value.fono,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      direccion: this.form.value.direccion,
      comuna: this.form.value.comuna,
      entrega: this.form.value.entrega,
    }
    this._usuarioService.agregarUsuario(user);

    this.router.navigate(['dashboard/usuarios'])
    // this.router.navigate(['dashboard'])
    this._snackBar.open('Usuario ha sido agrgado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })

   }
  
   volver(){
    this.router.navigate(['dashboard/usuarios']);
   }

}
