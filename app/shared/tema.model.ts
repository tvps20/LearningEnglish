import { Pergunta } from './pergunta.model'

export class Tema {
    public id: number
    public nome: string 
    public descricao: string 
    public perguntas: Pergunta[]

    constructor(id: number, nome: string, descricao: string){
        this.id = id
        this.nome = nome
        this.descricao = descricao
        this.perguntas = []
    }
}