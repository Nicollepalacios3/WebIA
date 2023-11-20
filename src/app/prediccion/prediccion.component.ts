import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prediccion',
  templateUrl: './prediccion.component.html',
  styleUrls: ['./prediccion.component.css']
})
export class PrediccionComponent {
  selectedFile: File | null;
  text1: string = '';
 
  contactos: any[] = []; 
  constructor(private http: HttpClient,
    
    ) { 
      this.selectedFile = null;
     
      
    }
    onFileSelected(event: any) {
      this.selectedFile = event.target.files[0];
    }
   
    uploadFile() {
      if (this.selectedFile) {
        const formData = new FormData();
        formData.append('file', this.selectedFile, this.selectedFile.name);
        formData.append('text1', this.text1); 
    
        this.http.post('http://127.0.0.1:5000/predecir', formData)
          .subscribe(response => {
            alert("Tu resultado puede ver tambien en consola inpeccion web")
            alert(JSON.stringify(response)); // Recibe la respuesta del servidor
            console.log(response)
          });
      }
    }
  
 

 
 
}
