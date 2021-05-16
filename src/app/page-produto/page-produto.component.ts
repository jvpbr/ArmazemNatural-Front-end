import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-page-produto',
  templateUrl: './page-produto.component.html',
  styleUrls: ['./page-produto.component.css']
})
export class PageProdutoComponent implements OnInit {

  produto: Produto = new Produto()
  listaProdutos: Produto[]

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id']
    this.findByIdProduto(id)
  }

  findByIdProduto(id: number) {
    this.produtoService.getByIdProdutos(id).subscribe((resp: Produto) => {
      this.produto = resp
    })
  }

  comprar() {
    this.alertas.showAlertSuccess("Compra realizada!")
  }

  carrinho() {
    this.alertas.showAlertSuccess("Produto adicionado ao carrinho!")
  }

}
