import { Component, OnInit } from '@angular/core'
import { Progress } from "ui/progress";
import { Router, ActivatedRoute } from "@angular/router"
import { RouterExtensions } from 'nativescript-angular';

import { Tema } from '../../shared/tema.model'
import { TemaService } from '../../services/tema.service'
import { Pergunta } from '~/shared/pergunta.model';
import { Coracao } from '../../shared/coracao.model'

@Component({
    selector: 'treino',
    moduleId: module.id,
    templateUrl: './treino.component.html',
    styleUrls: ['./treino.component.css']
})

export class TreinoComponent implements OnInit{
    public progressValue: number = 0;
    public tentativas: number = 3;

    public id: number;
    public tema: Tema;
    public perguntas: Pergunta[];
    public resposta: string;
    public coracoes: Coracao[] = [ new Coracao(true), new Coracao(true), new Coracao(true) ];

    public rodada: number = 0;
    public rodadaPergunta: Pergunta;

    constructor(private temaService: TemaService, private router: ActivatedRoute, private navigation: RouterExtensions){
        this.id = +this.router.snapshot.params["id"];
        this.tema = this.temaService.getTema(this.id);
    }
    
    ngOnInit(): void {
        this.loadPerguntas()
        this.atualizaRodada()
    }


    // public atualizaResposta(event) {
    //     console.log(event);
    //     console.log("aqui é o certo: " + this.resposta);
    //     //(ngModelChange)="atualizaResposta($event)" Usar na tag
    // }

    public verificarResposta() {

        if(this.rodadaPergunta.perguntaPtBr == this.resposta){
            
            // Tranco a pergunta da rodada
            this.rodada++;

            // Incrementando o progresso
            this.progressValue += (100 / this.perguntas.length);

            // Verificando 
            if(this.rodada == this.perguntas.length){
                alert("Parabéns você completou o exercício.");
                this.navigation.backToPreviousPage();
                // this.navigation.navigate(["/home"], { clearHistory: true });
            }

            this.atualizaRodada()

            // Limpando o campo da resposta
            this.resposta = "";

        } else {
            // Diminuir a variavel tentativas
            this.tentativas--;
            
            if(this.tentativas === -1){
                alert("Você perdeu todas as tentativas, tente treinar novamente.");
                this.navigation.backToPreviousPage();
            }else if(this.tentativas !== this.coracoes.length){
                let indice = this.coracoes.length - this.tentativas;

                this.coracoes[indice -1].cheio = false; 
            }
        }
    }

    public atualizaRodada() {
        // Atualizando a frase
        this.rodadaPergunta = this.perguntas[this.rodada];
    }

    private loadPerguntas(){
        this.perguntas = this.tema.perguntas;
      }
}