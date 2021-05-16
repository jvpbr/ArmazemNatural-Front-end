import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { Produto } from '../model/Produto';
import { AlertasService } from '../service/alertas.service';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-todos-produtos',
  templateUrl: './todos-produtos.component.html',
  styleUrls: ['./todos-produtos.component.css']
})
export class TodosProdutosComponent implements OnInit {

  listaProdutos: Produto[]



  constructor(
    private router: Router,
    private produtoService: ProdutoService,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    this.getAllProdutos()
  }

  getAllProdutos(){
    this.produtoService.getAllProdutos().subscribe((resp: Produto[])=>{
      this.listaProdutos = resp
    })
  }

  comprar(){
    this.router.navigate(['/page-produto'])
   /*  this.alertas.showAlertSuccess("Compra realizada!") */
  }

  carrinho(){
    this.alertas.showAlertSuccess("Produto adicionado ao carrinho!")
  }

}
