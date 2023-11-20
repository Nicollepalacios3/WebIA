import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  text1: string = '';
  respuestas: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://127.0.0.1:5000/getpre').subscribe(
      (data) => {
        this.respuestas = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}

