import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  listUsuarios: Usuario[] = [];
  
  displayedColumns: string[] = ['correo','fono','nombre','direccion','comuna','entrega','acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuario();
  }

    cargarUsuario(){
      this.listUsuarios = this._usuarioService.getUsuario();
      this.dataSource = new MatTableDataSource(this.listUsuarios);
    }
  // Paginator
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  
  // filtro
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

    // Eliminar con id base de datos
  eliminarUsuario(index:number){
    console.log(index);
    this._usuarioService.eliminarUsuario(index);
    this.cargarUsuario();

    this._snackBar.open('Usuario ha sido eliminado con exito','',{
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }

}
