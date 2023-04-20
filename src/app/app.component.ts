import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { RickMortyService } from './services/rick-morty.service';
import { Personaje } from './models/personaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'my-project';
  name: any = "";
  listPersonajes: Personaje [] = [];
  displayDialog: boolean = false;
  personaje: Personaje = new Personaje();

  constructor(
    private primengConfig: PrimeNGConfig,
    private rickMortyService: RickMortyService
  ){
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getPersonajes();
  }

  getPersonajes() {
    if(this.name != ""){
      this.rickMortyService.getlistPersonajes(this.name).subscribe(data => {
        if (data) {
          this.listPersonajes = data.results;
          console.log("PERSONAJE: ", this.listPersonajes);
        }
      });
    }
    
  }
  enviar(){
    this.getPersonajes();
  }

  verPersonaje(persona:Personaje){
    this.rickMortyService.getPersonajeById(persona.id).subscribe(data => {
      if (data) {
        this.personaje = data;
        this.displayDialog = true;
      }
    });
    
  }
}
