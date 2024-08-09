import { Component, OnInit } from '@angular/core';
import { Analysis, ApiResponse } from 'src/app/model/types';
import { EndpointService } from 'src/app/services/endpoint/endpoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  items: Analysis[] = [];
  name = "";
  NameColums: string[] = ['analysisId', 'name', 'state', 'auditCreateDate']; // Asegúrate de que estos nombres coincidan con los definidos en el HTML

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

  getAnalysisById(analysisId: number) {
    this.endpointServices.getAnalysisById(analysisId).subscribe(
      (analysis: ApiResponse) => {
        console.log("Analysis:", analysis);
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
