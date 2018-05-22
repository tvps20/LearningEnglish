export class Pergunta {   
    public id: number;
    public perguntaEng: string; 
    public perguntaPtBr: string;

    constructor(id: number, fraseENG: string, frasePtBr: string){
        this.id = id;
        this.perguntaEng = fraseENG;
        this.perguntaPtBr = frasePtBr;
    }
}