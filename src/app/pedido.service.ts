import {Injectable} from '@angular/core';
import {PlatoPedido} from './plato-pedido';
import {Plato} from './plato';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private lastInsertedId: number = 0;

  constructor() {
  }

  addPlatoAlPedido(plato: Plato): Promise<PlatoPedido> {
    return new Promise((resolve) => {
      resolve(new PlatoPedido(this.lastInsertedId++, plato));
    });
  }
}
