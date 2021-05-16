import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categoria } from '../model/Categoria';
import { AlertasService } from '../service/alertas.service';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-categoria-produtos',
  templateUrl: './categoria-produtos.component.html',
  styleUrls: ['./categoria-produtos.component.css']
})
export class CategoriaProdutosComponent implements OnInit {

  categoria: Categoria = new Categoria()
  listaCategoria: Categoria[]

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){
    let nome = this.route.snapshot.params['nome']
    this.filterCategoria(nome)
  }

  filterCategoria(nome: string){
    this.categoriaService.getByCategoriaProdutos(nome).subscribe((resp: Categoria[])=>{
      this.listaCategoria = resp
    })
  }

  comprar(){
    /* this.alertas.showAlertSuccess("Compra realizada!") */
    this.router.navigate(['/page-produto'])
  }

  carrinho(){
    this.alertas.showAlertSuccess("Produto adicionado ao carrinho!")
  }

}
