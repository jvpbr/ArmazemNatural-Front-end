import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BlogComponent } from './blog/blog.component';
import { ArmazemComponent } from './armazem/armazem.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDeleteComponent } from './delete/categoria-delete/categoria-delete.component';
import { CategoriaEditComponent } from './edit/categoria-edit/categoria-edit.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutosEditComponent } from './edit/produtos-edit/produtos-edit.component';
import { ProdutosDeleteComponent } from './delete/produtos-delete/produtos-delete.component';
import { CategoriaProdutosComponent } from './categoria-produtos/categoria-produtos.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { UserEditComponent } from './edit/user-edit/user-edit.component';
import { TodosProdutosComponent } from './todos-produtos/todos-produtos.component';

const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'home', component: HomeComponent},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'user-edit/:id', component: UserEditComponent},

  {path: 'blog', component: BlogComponent},
  {path: 'armazem', component: ArmazemComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'fornecedor', component: FornecedorComponent},

  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria-edit/:id', component: CategoriaEditComponent},
  {path: 'categoria-delete/:id', component: CategoriaDeleteComponent},

  {path: 'categoria-produtos/:nome', component: CategoriaProdutosComponent},

  {path: 'produtos', component: ProdutosComponent},
  {path: 'produtos-delete/:id', component: ProdutosDeleteComponent},
  {path: 'produtos-edit/:id', component: ProdutosEditComponent},
  {path: 'todos-produtos', component: TodosProdutosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }