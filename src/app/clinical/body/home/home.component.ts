import { Component, OnInit } from '@angular/core';
import { Analysis } from 'src/app/model/types';
import { EndpointService } from 'src/app/services/endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  items : Analysis [] = [];
  name = "" ;

  constructor( private endpointServices : EndpointService ){

  }

  ngOnInit(): void {
    this.getAnalysis();
  }

  getAnalysis (){
    this.endpointServices.loadAnalysis().subscribe(
      (data: Analysis []  ) => {
        console.log(data);
        this.items = data;
      }
    )
  }
  getAnalysisById( analysisId : number ){
    this.endpointServices.getAnalysisById(analysisId).subscribe(
      (analysis: Analysis) =>{
        console.log("Analysis:", analysis);
      },
      (error) => {
        console.log("Error", error);
      }
    )
  }
  postAnaalysis(){
    this.endpointServices.postAnalysis(this.name).subscribe(
    response => {
      console.log("Se ha enviado el nombre correctamente", response);
      this.getAnalysis();
    },
    error =>{
      console.log("No se ha enviado", error);
    }
    )
  }
}
