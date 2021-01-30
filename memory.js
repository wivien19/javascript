//Voros Vivien, J4VDGE, h986160, emeljetek ki, mert beleolvad a szovegbe
function tokeletes(szam){
    if (typeof szam !== "number" || szam === 0){
        return false;
    }
    let i = 1;
    let osszeg = 0;
    while (i < szam){
        if (szam % i === 0){
            osszeg += i;
        }
        i++;
    }
    if (osszeg === szam){
        return true;
    }
    return false;
}

class Webbongeszo{

    lapok = [];
    _memoriafogyasztas = 0;


    constructor(memoria = 8192, memoriafogyasztas = 0) {
        this.memoria = memoria;
        this._memoriafogyasztas = memoriafogyasztas;
    }


    get memoriafogyasztas() {
        return this._memoriafogyasztas;
    }


    set memoriafogyasztas(value) {
      console.log(value + "eeee");
        if (value > this.memoria){

            this._memoriafogyasztas = this.memoria;
        }else if (value < 0){
            this._memoriafogyasztas = 0;
        }
        else {
            this._memoriafogyasztas = value;
        }
    }


    ujLap(url){
        let szam = Math.floor(Math.random()*1401)+100;
        this.lapok.push(url);
        this._memoriafogyasztas += szam;

    }
    lapBezar(){
        this.lapok.pop();
        let szam = Math.floor(Math.random()*971)+30;
        this._memoriafogyasztas -= szam;

    }
    panik(){
        this.lapok = [];
        this._memoriafogyasztas = 10;
    }
}

/*
let web = new Webbongeszo();
web.memoriafogyasztas = 10000;

console.log(web.memoria);
console.log(web._memoriafogyasztas);*/


