import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmeSenha: string
  tipoUsuario: string

  token = localStorage.getItem('token')

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (this.token == null) {
      this.router.navigate(['/entrar'])
    } else {
    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUser(this.idUsuario)
    }
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value
  }

  tipoUser(event: any){
    this.tipoUsuario = event.target.value
  }

  atualizar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmeSenha) {
      this.alertas.showAlertDanger("As senhas estão incorretas.")
    } else {
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(["/home"])
        this.alertas.showAlertSuccess("Usuário atualizado com sucesso! Faça o login novamente.")
        this.token = null
        environment.nome = ""
        environment.tipo = ""
        environment.id = 0

        this.router.navigate(["/entrar"])
      })
    }
  }

  findByIdUser(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}