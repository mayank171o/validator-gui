import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import '../../../assets/js/line.js';
import '../../../assets/js/jquery-linedtextarea.js';
import '../../../../node_modules/jquery/dist/jquery.min.js';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','jquery-linedtextarea.css']
  
})



export class HomeComponent implements OnInit {

  yamlform: FormGroup;
  validMessage: string = "";
  isError: string = ''; 
  public response;
 

  constructor(private validateService: ValidateService) { }

  ngOnInit() {

    this.yamlform = new FormGroup({
      unformattedYaml: new FormControl('',Validators.required),
      });

     
  }

  validateYaml()
  {
    if(this.yamlform.valid)
    {
      this.validMessage="your bike registration form has been submitted successfully"
      this.validateService.validateYaml(this.yamlform.value).subscribe(
        data=> {
          this.response = data;
          //this.yamlform.reset();
          console.log("Printing data inside the data block" + data);
          console.log("print in the log ");
         

        },
        error=>{
          this.validMessage="inside error"
          this.response = error.error;
          this.isError="true";
          console.log("inside error , printing the valid message" + this.isError);
          console.log(error.error);
          
          //console.log(error);

          return throwError(error);

        }
      )
    }else
    {
      this.validMessage="Please fill out the form correctly"
    }
  }



}
