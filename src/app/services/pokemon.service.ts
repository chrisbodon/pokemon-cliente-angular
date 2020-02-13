import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IPokemonService } from './IPokemonService';


@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {


  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }


  getPokemon(): Observable<any> {
    const url = `http://localhost:8080/pokemon-rest/api/pokemon/`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }


  getPokemonByName(nombre: string): Observable<any> {
    const url = `http://localhost:8080/pokemon-rest/api/pokemon/?nombre=${nombre}`;
    console.trace('PokemonService getPokemon ' + url);
    return this.http.get(url);
  }

  /*getHabilidad(nombreHabilidad: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${nombreHabilidad}/`;
    console.trace('PokemonService getHabilidad ' + url);
    return this.http.get(url);
  }*/


}
