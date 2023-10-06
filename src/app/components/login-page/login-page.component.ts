import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public formLogin: FormGroup


  constructor(private fb: FormBuilder, private router: Router, private toast: ToastrService,
    private loginService: LoginserviceService) {
    this.formLogin = this.createLoginForm();
  }

  public createLoginForm(): FormGroup {
    return this.fb.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required]]
    })
  }

  public submitForm() {
    const { username, password } = this.formLogin.value;
    this.formLogin.reset();
    
    this.loginService.login(username, password).subscribe(
      {
          next: () => {
            this.toast.success("Bem vindo!");
            this.router.navigate(['']);
          },
          error: (erro) => {
                  alert("Usuário ou Senha inválido(s)!");
                  console.log(erro)
          }
      }
  )
  }
}
