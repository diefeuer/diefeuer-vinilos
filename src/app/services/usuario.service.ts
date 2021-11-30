import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { fono: '912341234',correo: 'mau@gmail.com', nombre: 'Mauricio', apellido: 'Gomez', direccion: 'Palena 1253', comuna: 'Pudahuel', entrega: 'Retiro' },
    { fono: '912341234',correo: 'qwertygmail.com', nombre: 'Camila', apellido: 'Gutierrez', direccion: 'Ahumada 86', comuna: 'Santiago', entrega: 'Envío' },
    { fono: '912341234',correo: 'sarita@gmail.com', nombre: 'Mariela', apellido: 'Olave', direccion: 'El parron 1536', comuna: 'La Granja', entrega: 'Envío' },
    { fono: '912341234',correo: 'elrabito@gmail.com', nombre: 'Fabiola', apellido: 'Poblete', direccion: 'Machali 1296', comuna: 'Lo Prado', entrega: 'Retiro' },
    { fono: '912341234',correo: 'tuchiquitito@gmail.com', nombre: 'Hernan', apellido: 'Dario', direccion: 'La estrella 2685', comuna: 'Quinta Normal', entrega: 'Envío' },
    { fono: '912341234',correo: 'donweaspagrande@gmail.com', nombre: 'Patricio', apellido: 'Norambuena', direccion: 'El Melado 2276', comuna: 'Maipu', entrega: 'Envío' },
    { fono: '912341234',correo: 'cassy@gmail.com', nombre: 'Cassandra', apellido: 'Garcia', direccion: 'Keta 1320', comuna: 'Providencia', entrega: 'Envío' },
    { fono: '912341234',correo: 'shopan@gmail.com', nombre: 'Francisco', apellido: 'Rodriguez', direccion: 'Los Palomos 58931', comuna: 'La Florida', entrega: 'Envío' },
    { fono: '912341234',correo: 'negrorico@gmail.com', nombre: 'Mauricio', apellido: 'Gaete', direccion: 'Manuel Rodriguez 889', comuna: 'Maipu', entrega: 'Envío' },
    { fono: '912341234',correo: 'nathalyy@gmail.com', nombre: 'Natalia', apellido: 'Romero', direccion: 'pasaje 8', comuna: 'Conchali', entrega: 'Envío' },
    { fono: '912341234',correo: 'segurito123@gmail.com', nombre: 'Hugo', apellido: 'Duran', direccion: 'Flaco Marin 569', comuna: 'Cerro Navia', entrega: 'Envío' },

  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number) {
    this.listUsuarios.splice(index, 1);
  }
  agregarUsuario(usuario: Usuario) {

    this.listUsuarios.unshift(usuario);


  }

}
