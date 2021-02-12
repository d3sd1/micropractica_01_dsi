import {Plato} from './plato';

export class PlatoPedido {
  id: number;
  plato: Plato;


  constructor(id: number, plato: Plato) {
    this.id = id;
    this.plato = plato;
  }
}
