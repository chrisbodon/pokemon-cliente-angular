import { Observable } from "rxjs";

export interface IPokemonService {


  /**
   * Recuperamos los datos en JSON del listado de Pokemon
   * @returns {Observable<any>}
   * @see GET pokemon-rest/api/pokemon/
   */
  getPokemon(): Observable<any>;

  /**
   * Recuperamos los datos en JSON de un Pokemon por su nombre
   * @param nombre: string nombre del pokemon a buscar
   * @see GET pokemon-rest/api/pokemon/?nombre={nombre}
   */
  getPokemonByName(nombre: string): Observable<any>;

  /**
   * recupera el nombre de la habilidad en castellano
   * @param nombreHabilidad: nombre habilidad en ingles
   * @see GET /api/v2/ability/{name}/
   */
  /*getHabilidad(nombreHabilidad: number): Observable<any>;*/

}
