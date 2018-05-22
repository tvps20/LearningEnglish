import { Tema } from '../shared/tema.model'
import { Injectable } from '@angular/core';
import { Pergunta } from '~/shared/pergunta.model';

@Injectable()
export class TemaService {
   
    private temas: Tema[];

    constructor(){
        this.loadTemas();
    }
  
    public getTemas(): Tema[] {
       return this.temas;
    }

    public getTema(id: number){
       return this.temas.filter(item => item.id === id)[0];
    }

    public setTema(tema: Tema){
        this.temas.unshift(tema);
    }

    public removeTema(id: number){    
        for(var i=0; i<this.temas.length; i++){
            if(this.temas[i].id === id){
                this.temas.splice(i, 1);
                break;
            }
        }
    }

    private loadTemas(){
        this.temas = [ { id:1, nome: "Verbo To Be", perguntas: [{ id: 1, perguntaEng: "How are you?", perguntaPtBr: "Como vai você?"},
                                                                { id: 2, perguntaEng: "He is cool", perguntaPtBr: "Ele é legal"},
                                                                { id: 3, perguntaEng: "She is fast", perguntaPtBr: "Ela é rápida"},
                                                                { id: 4, perguntaEng: "We are young", perguntaPtBr: "Nós somos jovens"}], 
                                                                descricao: "    Entender o verbo to be é o primeiro passo para começar a falar em inglês de forma eficiente.  No entanto, tem muitos estudantes da língua inglesa que andam em círculos em aprendizado e não conseguem sair desse primeiro tempo verbal. \n     Principalmente para quem teve contato com a língua em escolas públicas ou instituições despreparadas o “verbo to be” é tema de todos os anos. A sensação, por tanto, é a impressão de que não está progredindo no idioma. \n    Para aprender efetivamente o verbo to be o primeiro passo que as escolas não ensinam é a serventia desta tempo verbal, Na tradução em português ele significa “ser” e “estar”. Ao contrário da língua portuguesa, quando você fala  que alguém é ou está você usa o mesmo que “sou”. \n\nI am – Eu sou/estou \nYou are – Você é/está \nHe is – Ele é/está \nShe is – Ela é/está \nIt is - Ele e ela (coisas e animais) é/está \nWe are – Nós somos/estamos \nYou are – Vocês são/estão \nThey are – Eles são/estão \n\n Exemplos: \nI am a boy. – Eu sou um menino. \nShe is a journalist. – Ela é jornalista. \nThey are brothers. – Eles são irmãos." } ];
    }
    
}