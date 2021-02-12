import {Injectable} from '@angular/core';
import {Plato} from './plato';

@Injectable({
  providedIn: 'root'
})
export class PlatosMockService {

  // This should be fetched from an API ;)
  private hardcodedPlatos: Plato[] = [
    new Plato(1, 'CERDO AGRIDULCE', 5.5),
    new Plato(2, 'POLLO GONG BAO', 4.5),
    new Plato(3, 'MA PO TOFU', 3),
    new Plato(4, 'WONTON', 2.5),
    new Plato(5, 'CHOW MEIN', 7.8),
    new Plato(6, 'DUMPLINGS', 9.9),
    new Plato(7, 'PATO PEKÍN', 7.9),
    new Plato(8, 'ROLLITOS PRIMAVERA', 8.5),
    new Plato(9, 'NIANGAO', 4.3),
    new Plato(10, 'TANGYUAN', 5.6)
  ];

  constructor() {
  }

  getPlatos(): Promise<Plato[]> {
    return new Promise((resolve) => {
      resolve(this.hardcodedPlatos);
    });
  }

  getPlatoById(id: number): Promise<Plato> {
    return new Promise((resolve) => {
      resolve(this.hardcodedPlatos.find((plato) => {
        return plato.id == id;
      }));
    });
  }
}
