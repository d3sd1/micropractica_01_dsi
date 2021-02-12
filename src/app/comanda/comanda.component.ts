import {Component, OnInit} from '@angular/core';
import {PlatosMockService} from '../platos-mock.service';
import {Plato} from '../plato';
import {PlatoPedido} from '../plato-pedido';
import {PedidoService} from '../pedido.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.scss']
})
export class ComandaComponent implements OnInit {
  totalPrice = 0;
  pedirPlatoId: number;
  platosDisponibles: Plato[];
  pedido: PlatoPedido[] = [];

  constructor(private platosMockService: PlatosMockService, private pedidoService: PedidoService) {
  }

  async ngOnInit() {
    this.platosDisponibles = await this.platosMockService.getPlatos();
    this.pedirPlatoId = 1;
  }

  async addPlato() {
    const plato: Plato = await this.platosMockService.getPlatoById(this.pedirPlatoId);
    this.pedido.push(await this.pedidoService.addPlatoAlPedido(plato));
    this.totalPrice += plato.precio;
  }

  async rmPlato(platoPedidoId: number) {
    this.pedido = this.pedido.filter((platoPedido: PlatoPedido) => {
      if (platoPedido.id == platoPedidoId) {
        this.totalPrice -= platoPedido.plato.precio;
        return false;
      }
      return true;
    });
  }

}
