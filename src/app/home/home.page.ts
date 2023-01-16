import { Component } from '@angular/core';
import {  AutentificarService } from './../services/autentificar.service';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public formulario : FormGroup

  constructor(
    public auth : AutentificarService,
    public builder : FormBuilder
  ) {
    this.formulario = builder.group({
      username : [''],
      password : [''],
      activo : [false]
    })
  }

  public ionViewWillEnter(){

  }

  public autenticar(){
    this.auth.authenticar({
      ...this.formulario.value
    }, this.formulario.get('activo')?.value);
    // console.log(this.formulario.value)
  }

}
