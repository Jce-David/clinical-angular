import { Component, OnInit } from '@angular/core';
import { Analysis, ApiResponse, ServerResponse } from 'src/app/model/types';
import { EndpointService } from 'src/app/services/endpoint/endpoint.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit{
  analysisIdNumber: number = 0;

  itemId = 0;
  nameId = "";
  auditCreate = new Date(); 
  state = 0 ;


  message = ""
  analysisId: number = 0;
  items: Analysis[] = [];
  name = "";
  NameColums: string[] = ['Id', 'name', 'state', 'auditCreateDate']; // Asegúrate de que estos nombres coincidan con los definidos en el HTML

  constructor(private endpointServices: EndpointService) {}

  ngOnInit(): void {
    this.getAnalysis();
  }

  getAnalysis() {
    this.endpointServices.loadAnalysis().subscribe(
      (data: Analysis[]) => {
        console.log(data);
        this.items = data;
      }
    );
  }

  getAnalysisById(id: number) {
    this.endpointServices.getAnalysisById(id).subscribe(
      (analysis: ApiResponse ) => {
        if( analysis.data !== null ){
          const analysisData = analysis.data
          console.log("Name", analysisData.name )
          console.log("Analysis:", analysis);
          this.nameId = analysisData.name;
          this.itemId = analysisData.analysisId;
          this.message = analysis.message;
        }
        console.log("message:", analysis.message )
      },
      (error) => {
        console.log("Error", error);
      }
    );
  }

  postAnalysis() {
    this.endpointServices.postAnalysis(this.name).subscribe(
      response => {
        console.log("Se ha enviado el nombre correctamente", response);
        this.getAnalysis();
      },
      error => {
        console.log("No se ha enviado", error);
      }
    );
  }
}
