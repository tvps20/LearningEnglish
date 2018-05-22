import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from "@angular/router"
import { RouterExtensions } from 'nativescript-angular';


import { Tema } from '../../shared/tema.model'
import { TemaService } from '../../services/tema.service'
import { Pergunta } from '~/shared/pergunta.model';

@Component({
    selector: 'tema',
    moduleId: module.id,
    templateUrl: './tema.component.html',
    styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

    public perguntas: Pergunta[];
    public icons: Map<string, string> = new Map<string, string>();
    public pergunta: Pergunta;
    public countPergunta: number;
    public countTema: number;
    public tema: Tema;


    constructor(private temaService: TemaService, private router: ActivatedRoute, private navigation: RouterExtensions) {
        this.countPergunta = 1;
        this.countTema = 2;
        this.pergunta = new Pergunta(this.countPergunta, "", "");
        this.tema = new Tema(this.countTema, "", "");
    }

    ngOnInit(): void {
        this.loadPerguntas();
        this.steIcons();
    }

    public createPergunta() {
        // Retirando os espaços em branco nas laterais da frase
        this.pergunta.perguntaEng = this.pergunta.perguntaEng.trim();
        this.pergunta.perguntaPtBr = this.pergunta.perguntaPtBr.trim();

        if ((!this.pergunta.perguntaEng) || (!this.pergunta.perguntaPtBr)) {
            alert("Deve-se informar ambas as frases");
        } else {
            this.perguntas.unshift(this.pergunta);
            this.countPergunta++;
            this.pergunta = new Pergunta(this.countPergunta, "", "");
        }
    }

    public deletePergunta(item: Pergunta) {
        for (var i = 0; i < this.perguntas.length; i++) {
            if (this.perguntas[i].id === item.id) {
                this.perguntas.splice(i, 1);
                break;
            }
        }
    }

    public createTema() {
        // Retirando os espaços em branco nas laterais da frase
        this.tema.nome = this.tema.nome.trim();
        this.tema.descricao = this.tema.descricao.trim();

        if ((!this.tema.nome) || (!this.tema.descricao)) {
            alert("Deve-se informar nome e descrição");
        } else {
            this.tema.id = this.countTema;
            this.tema.perguntas = this.perguntas;
            this.temaService.setTema(this.tema);
            this.countTema++;
            
            this.navigation.backToPreviousPage();
        }
    }


    private steIcons() {
        this.icons.set('trash', String.fromCharCode(0xf014));
        this.icons.set('add', String.fromCharCode(0xf067));
    }

    private loadPerguntas() {
        this.perguntas = [ { id: 1, perguntaEng: "This is exemple", perguntaPtBr: "Isso é um exemplo" } ];
    }
}