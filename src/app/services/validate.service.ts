import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs' ;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor(private http:HttpClient) { }

  getBikes()
  {
    return this.http.get('/server/api/v1/bikes');
  }

  
  validateYaml(yamlToValidate)
  {
    let body = JSON.stringify(yamlToValidate);
    return this.http.post('/server/api/v1/validate',body,httpOptions);
  }
}
