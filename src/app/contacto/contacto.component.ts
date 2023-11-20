import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent  implements OnInit {
  ngOnInit() {}

  name: string = '';
  email: string = '';
  message: string = '';

  constructor(
    private http: HttpClient,
  
   
  ) {}

  async enviar() {
    const credentials = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.http.post('http://127.0.0.1:5000/enviar', credentials).subscribe(
      async (response: any) => {
          localStorage.setItem('token', response.token);
          alert("se ha enviado el mensaje");
        
      },
      async error => {
       alert("Se ha producido un error")
      }
    );
  }
}
