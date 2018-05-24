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
                                                                descricao: "    Entender o verbo to be é o primeiro passo para começar a falar em inglês de forma eficiente.  No entanto, tem muitos estudantes da língua inglesa que andam em círculos em aprendizado e não conseguem sair desse primeiro tempo verbal. \n     Principalmente para quem teve contato com a língua em escolas públicas ou instituições despreparadas o “verbo to be” é tema de todos os anos. A sensação, por tanto, é a impressão de que não está progredindo no idioma. \n    Para aprender efetivamente o verbo to be o primeiro passo que as escolas não ensinam é a serventia desta tempo verbal, Na tradução em português ele significa “ser” e “estar”. Ao contrário da língua portuguesa, quando você fala  que alguém é ou está você usa o mesmo que “sou”. \n\nI am – Eu sou/estou \nYou are – Você é/está \nHe is – Ele é/está \nShe is – Ela é/está \nIt is - Ele e ela (coisas e animais) é/está \nWe are – Nós somos/estamos \nYou are – Vocês são/estão \nThey are – Eles são/estão \n\n Exemplos: \nI am a boy. – Eu sou um menino. \nShe is a journalist. – Ela é jornalista. \nThey are brothers. – Eles são irmãos." },
                        { id:2, nome: "Simple Present", perguntas: [{ id: 1, perguntaEng: "He lives", perguntaPtBr: "Ele vive"},
                                                                { id: 2, perguntaEng: "She kisses", perguntaPtBr: "Ela beija"},
                                                                { id: 3, perguntaEng: "It dies", perguntaPtBr: "Ele morre"},
                                                                { id: 4, perguntaEng: "He goes", perguntaPtBr: "Ele vai"}], 
                                                                descricao: "    O Simple Present (presente simples) é um tempo verbal utilizado para indicar ações habituais que ocorrem no presente.\n    Além disso, ele é usado para expressar uma verdade universal, sentimentos, desejos, opiniões e preferências.\n    Por esse motivo, as frases com simple present geralmente acompanham expressões de tempo (advérbios).\n    As mais usuais são: now (agora), always (sempre), never (nunca), today (hoje), every day (todos os dias), daily (diariamente), often (frequentemente), sometimes (às vezes), etc.\n    Em português, esse tempo verbal corresponde ao nosso presente do indicativo.\n\n     ========== Regras ==========\n1. Na terceira pessoa do singular, ou seja, nos pronomes he, she, it, geralmente é acrescido um –s ou –es ao verbo. Os verbos terminados em o, ss, ch, sh, x, são os quais se acrescentam o –es.\n       He teaches (ele ensina)\n       It fixes (ele conserta)\n    She watches (ela assiste)\n\n2. Na terceira pessoa do singular, verbos que terminam em –y e são precedidos de consoante, retira-se o –y e acrescenta-se –ies, por exemplo:\n     To Fry (fritas) - Fries\n    To Fly (voar) - Flies\n    To Study (estudar) - Studies\n\n    Observe que se o verbo não for precedido por consoante, acrescenta-se somente o –s, por exemplo:\n    To say (dizer) - Says\n    Formação do Simple Present\n    Os verbos no simple present são utilizados com os verbos no infinitivo, porém sem a partícula “to”.\n    Confira abaixo a formação do simple present nas frases afirmativas, negativas e interrogativas:\n\n       Forma Afirmativa (Affirmative Form)\n\n    Usado nas frases afirmativas sendo que sua formação é:\n        Sujeito + Verbo Principal + Complemento\n Exemplo: I live in Brazil. (Eu vivo no Brasil).\n\n    Forma Negativa (Negative Form)\n\n    Na forma negativa o verbo “do” é usado como auxiliar. Sua forma é:\n        Sujeito + Verbo Auxiliar + Not + Verbo Principal + Complemento\nExemplo: I do not live in Brazil. (Eu não vivo no Brasil)\n    Obs: A expressão do not ou does not (no caso da terceira pessoa do singular) podem ser escritas de forma contrída:\n    Do not: don’t\n    Does not: doesn’t\n\n    Forma Interrogativa (Interrogative Form)\n\n    Da mesma maneira que nas frases negativas, o verbo “do” é usado como auxiliar. Sua forma é:\n        Verbo Auxiliar + Sujeito + Verbo Principal + Complemento\n        Do you live in Brazil? (Você mora no Brasil?)\n    Obs: Na terceira pessoa do singular (he, she e it) utiliza-se o “does”, ao invés do “do”, por exemplo:\n        Does he go to school? (Ele vai à escola?)" },
                        { id:3, nome: "Simple Past", perguntas: [{ id: 1, perguntaEng: "I liked him very much", perguntaPtBr: "Eu gostava muito dele"},
                                                                { id: 2, perguntaEng: "She traveled alone", perguntaPtBr: "Ela viajou sozinha"},
                                                                { id: 3, perguntaEng: "I played the piano", perguntaPtBr: "Eu tocava piano"},
                                                                { id: 4, perguntaEng: "I preferred the blue shoes.", perguntaPtBr: "Eu preferia os sapatos azuis"}], 
                                                                descricao: "    O Simple Past (passado simples) é um dos tempos verbais do inglês. Ele é equivalente ao passado simples na língua portuguesa.\n\n    Quando Usar?\n\n    O Simple Past é usado para indicar ações passadas, ou seja, para descrever fatos que já aconteceram.\n    Para reforçar o uso desse tempo verbal, muitas expressões temporais são utilizadas nas frases.\n    Os exemplos mais usuais são: yesterday (ontem), the day before yesterday (antes de ontem), last night (ontem à noite), last year (ano passado), last month (mês passado), ago (atrás), etc.\n\n    Formação do Simple Past\n\n    A formação básica do simple past é realizada sem o “to” e com o acréscimo de –ed, –ied ou –d ao final dos verbos regulares.\n    No entanto, para os verbos irregulares é necessário consultar uma tabela e treiná-los, uma vez que modificam bastante sua forma.\n\n    Forma Afirmativa (Affirmative Form)\n\n    A forma afirmativa no simple past segue a estrutura abaixo:\n        Sujeito+verbo+complemento\nExemplo: I loved my english teacher. (Eu amei minha professora de inglês).\n\n    Forma Negativa (Negative Form)\n\n    Para construção de frases negativas no simple past, o verbo “do” é empregado como verbo auxiliar.\n    Sendo assim, utiliza-se o “did”, que representa o verbo irregular “do” no passado. O verbo principal não é conjugado no passado, uma vez que o auxiliar já indica o tempo verbal.\n    Sua estrutura frasal é da seguinte forma:\n        Sujeito+did+ not+verbo principal+ complemento\nExemplo: I did not love my english teacher. (Eu não amei minha professora de inglês)\n    Obs: A contração do did not é didn’t.\n\n    Forma Interrogativa (Interrogative Form)\n\n    Da mesma maneira que na forma negativa, o “do” é o verbo auxiliar utilizado no simple past para as frases interrogativas.\n    Assim, usa-se o “did”, a forma do passado do “do” no começo da pergunta. Veja sua estrutura abaixo:\n        Did+sujeito+verbo principal+complemento\nExemplo: Did I love my English teacher? (Eu amava minha professora de inglês?)\n    Obs: Somente o verbo auxiliar é conjugado no simple past “Did”. Não é necessário conjugar o verbo principal." } ];
    }
    
}