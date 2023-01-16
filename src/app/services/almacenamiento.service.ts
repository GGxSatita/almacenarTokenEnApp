import { Injectable } from '@angular/core';
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoService {

  public almacen : Storage | null = null;

  constructor(
    private storage : Storage
  ) {
    this.iniciar();
  }

  public async iniciar(){
    this.almacen = await this.storage.create();
  }

  public async guardarToken(token : string){
    await this.almacen?.set('token',token);
  }

  public async obtenerToken(){
    return await this.almacen?.get('token') || null;
  }
}
