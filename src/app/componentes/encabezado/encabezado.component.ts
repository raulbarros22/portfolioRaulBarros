import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  miPortfolio: any;
  infoHeader: any;
  constructor(private datosPortfolio:PortfolioService){}
    ngOnInit(): void{
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
        console.log(data);
        this.miPortfolio=data;
      });
      this.datosPortfolio.obtenerDatos().subscribe(data =>{
       this.infoHeader = data.infoHeader;
       console.log(this.infoHeader);
    });
  }
}
