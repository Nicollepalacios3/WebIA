import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {
  ngOnInit() {}

  username: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
   
  ) {}

  async login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://127.0.0.1:5000/login', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/admin']);
        } else {
          alert("¡incorrecto!"); 
        }
      },
      async error => {
      alert("Email o contraseña incorrecta")
      }
    );
  }
}