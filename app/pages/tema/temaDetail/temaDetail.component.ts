import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from "@angular/router"
import { RouterExtensions } from 'nativescript-angular';

import { Tema } from '../../../shared/tema.model'
import { TemaService } from '../../../services/tema.service'

@Component({
  selector: 'temaDetail',
  moduleId: module.id,
  templateUrl: './temaDetail.component.html',
  styleUrls: ['./temaDetail.component.css']
})
export class TemaDetailComponent implements OnInit {
    
  tema: Tema;
  id: number;

  constructor(private temaService: TemaService, private router: ActivatedRoute, private navigation: RouterExtensions){
    this.id = +this.router.snapshot.params["id"];    
  }
  
  ngOnInit(): void {
    this.tema = this.temaService.getTema(this.id);
  }

  public removerTema(): void {
    this.temaService.removeTema(this.id);
    this.navigation.backToPreviousPage();
  }

  public treinar(){

    if(this.tema.perguntas.length > 0){
      this.navigation.navigate(["/treino", this.tema.id]);
    } else{
      alert("Não existe exercícios para esse tema");
    }
  }
}