function zombi (szamhaboru) {
    tomb1 = szamhaboru.substring(0,szamhaboru.length/2);
    tomb2 = szamhaboru.substring(szamhaboru.length/2 + 1, szamhaboru.length);
    bazis = parseInt(szamhaboru[szamhaboru.length/2 - 0.5]);
    bal = 0;
    jobb = 0;
    result = "sehonnan";
    if(szamhaboru.length% 2 == 0 || szamhaboru.length < 3) {
        result = "hiba";
    }
    for (let i = 0; i < szamhaboru.length/2 - 1; i++) {
        if(parseInt(tomb1[i]) > bazis) {
            result = "balrol";
            bal = 1;
        }
        if (parseInt(tomb2[i]) > bazis) {
            result = "jobbrol";
            jobb = 1;
        }
        if(jobb == 1 && bal == 1) {
            return "mindenhonnan"
        }
    }
    return result;
}
class Konyvtar{

nyitvatartas = [];
konyvek = [];
kikolcsonozve = [];
    constructor(nyit, zar) {
        this.nyitvatartas.push(nyit);
        this.nyitvatartas.push(zar);

    }

    get nyitasiOra() {
        return this.nyitvatartas[0];
    }

    set nyitasiOra(value) {
        this.nyitvatartas[0] = value;
    }
    ujKonyv(konyv){
        this.konyvek.push(konyv);
    }
    nyitva(ora){
        if (this.nyitvatartas[0] <= ora && this.nyitvatartas[1] >= ora){
            return true;
        }
        return false;
    }
    kikolcsonoz(cim, ora){
        if (!this.nyitva(ora)){
            return "Zarva vagyunk";
        }
        let counter = 0;
        for (let i in this.kikolcsonozve){
            if (this.kikolcsonozve[i] === cim){
                return "Epp nincs a konyvtarban";
            }
        }
        for (let i in this.konyvek){
            if (this.konyvek[i] === cim){
                counter++;
            }
        }
        if (counter === 0) return "Ismeretlen konyv";



        let uj = [];
        let index = 0;
        for (let i in this.konyvek){
            if (this.konyvek[i] !== cim){
                uj[index] = this.konyvek[i];
                index++;
            } else {
                this.kikolcsonozve[this.kikolcsonozve.length] = this.konyvek[i];
            }
        }
        this.konyvek = uj;
        return "kikolcsonozve";

    }
    visszahoz(cim, ora){
        if (!this.nyitva(ora)){
            return "Zarva vagyunk";
        }
        let uj = [];
        let index = 0;
        for (let i in this.kikolcsonozve){
            if (this.kikolcsonozve[i] !== cim){
                uj[index] = this.kikolcsonozve[i];
                index++;
            }
        }
        this.kikolcsonozve = uj;
        this.konyvek.push(cim);
        return "Ok";
    }


}

let k = new Konyvtar(12, 16);
console.log(k.nyitva(17));
k.kikolcsonozve=["d", "e"];
k.konyvek = ["a", "b", "c"];
console.log(k.kikolcsonoz("a", 12));
console.log(k.visszahoz("d", 13));
//console.log(k.kikolcsonozve);
console.log(k.kikolcsonoz("af", 12));
//console.log("hetfo");
console.log(k.kikolcsonozve);
console.log(k.konyvek);