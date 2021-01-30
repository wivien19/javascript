class Nyuszi {

    constructor(repa = 0, vendegek = []) {
        this._repa = repa;
        this.vendegek = vendegek;
    }


    get repa() {
        return this._repa;
    }

    ultet(darab){
        if (darab ===  undefined){
         return this._repa++;
        }
        this._repa += darab;

        return darab;
    }
    vendeg(vendeg){
        if (typeof vendeg === "string") {
            this.vendegek[this.vendegek.length] = vendeg;
        }
        return this.vendegek;
    }
    etet(){
        let uj = [];
        let index = 0;
        let a = -1;
       /* for(let i in this.vendegek){
            uj[i]= this.vendegek[i];
        }*/
        if (this.vendegek === 0){
            return this.vendegek;
        }
      for (let i in this.vendegek) {
          if (typeof this.vendegek[i] === "string") {
              if (this._repa >= 1) {
                  this._repa--;
              } else {
                  a++;
                  uj[a] = this.vendegek[i];
              }

          }
      }
             this.vendegek = uj;
             return this.vendegek;
        }

}
// nincs répája Nyuszinak.
var nyusz = new Nyuszi(2, ["Jancsi", "peri", "mair"]);

console.log(nyusz.vendegek);
console.log(nyusz.vendeg("anti"))
console.log(nyusz.repa); // 1.
console.log(nyusz.etet());
