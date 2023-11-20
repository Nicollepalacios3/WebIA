import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.css']
})
export class NotificacionComponent {

  text1: string = '';
 
  contactos: any[] = []; 
  
  constructor(private http: HttpClient,
    ) {

      
    }

  ngOnInit(): void {

      this.http.get<any[]>('http://127.0.0.1:5000/getn').subscribe(
        (data) => {
          this.contactos = data;
          console.error(data);
        },
        (error) => {
          console.error(error);
        }
      );
    
  }
  
  responder: string[] = [];
  deleteNotification(id: number,index: number, email: string): void {
    const url = `http://127.0.0.1:5000/eliminar`;
    const body = { id: id, responder: this.responder[index], email: email };

    this.http.post(url, body).subscribe(
      (data) => {
        alert(data);
        
        
        
      },
    
    );
  }
  
}
