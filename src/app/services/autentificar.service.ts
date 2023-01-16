import { Injectable } from '@angular/core';
import {Auth, AuthResponse} from './models/Auth';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AlmacenamientoService} from'../services/almacenamiento.service'

@Injectable({
  providedIn: 'root'
})
export class AutentificarService {

  public URL_AUTH = 'https://dummyjson.com/auth/login';
  // public datosUsuario : AuthResponse | null | Observable<null> = null;
  public datosUsuario : AuthResponse | null = null;


  constructor(
    private client : HttpClient,
    private almacen : AlmacenamientoService
  ) { }

  public authenticar({username , password}: Auth, activo : boolean){
    this.client.post<AuthResponse | null>(this.URL_AUTH, {
      username,
      password
    },{
      headers : {
        'Content-Type':'application/json',
      }
    })
    .pipe(
      catchError(async (error)=>{

        //en esta parte del codigo de pueden mostrar mensajes, con alert
        error.status
        return null;
      })
    )
    .subscribe((datosDeInternet)=>{
      if(datosDeInternet){
        this.datosUsuario = datosDeInternet;
        if(activo){
          this.almacen.guardarToken(datosDeInternet.token)
        }
      }
    })
  }




}
