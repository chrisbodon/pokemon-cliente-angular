import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  pokemonList: Array<any>;
  pokemon: Pokemon;
  mensaje: string;

  constructor(private pokemonService: PokemonService) {
    console.trace('InicioComponent constructor');

    this.mensaje = '';

    this.pokemonList = [];
    this.pokemon = new Pokemon('');
    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemonRestComponent ngOnInit');

    //llamadas a los servicios

    // a un Observable nos tenmos que suscribir
    // cuando llamamos a un Obervable tenemos 3 posibles metodos
    // solo 1 es obligatorio

    this.pokemonService.getPokemon().subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        this.pokemonList = data;

        this.mensaje = 'Listado cargado desde pokemon-rest';

      },
      error => {
        console.warn('petición ERRONEA data %o', error);
        this.mensaje = 'No existen pokemons';
      },
      () => {
        console.trace('esto se hace siempre');
      }
    );

    this.pokemonService.getPokemonByName('pikachu').subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        // mapear de Json a Pokemon
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.nombre;

        const habilidadesNames = data.habilidades.map(el => el.habilidades.nombre);
        console.debug('habilidades %o', habilidadesNames);


        this.mensaje = 'Pokemon cargado desde pokemon-rest';

      },
      error => {
        console.warn('petición ERRONEA data %o', error);
        this.mensaje = 'No existe ese pokemon';
      },
      () => {
        console.trace('esto se hace siempre');
      }
    );

  }

}
