import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-redneuronal',
  templateUrl: './redneuronal.component.html',
  styleUrls: ['./redneuronal.component.css']
})
export class RedneuronalComponent {
  ngOnInit() {}


  mensaje: string = '';
  

  constructor(private http: HttpClient) {}
  
 

  async dato() {
    const credentials = {
      mensaje: this.mensaje,
      
    };

    
    this.http.post('http://127.0.0.1:5000/celcius', credentials).subscribe(
      (response: any) => {
        
          alert(response);
         
        
      },
    
    );
  }
}
