export class Coracao {

    constructor(
        public cheio: boolean,
        public iconCoracaoCheio: string = String.fromCharCode(0xf004),
        public iconX: string = String.fromCharCode(0xf00d)
    ){}

    public exibrCoracao(): string {
        if(this.cheio){
            return this.iconCoracaoCheio
        } else {
            return this.iconX
        }
    }
}