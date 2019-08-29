class Dado{
    constructor(){
    }
    lanzar(){
        return Math.trunc(Math.random()*6+1);
    }
}

class Carrera{
    constructor(){
        this.dado = new Dado();
        this.numCorredor1 = 0;
        this.numCorredor2 =0;
    }

     AvanzarCorredor1() {
         var x =  this.dado.lanzar();
        if(x == 1){
            this.numCorredor1 += 3;
        }
        else if(x == 2 || x == 3){
            this.numCorredor1 += 1;
        }
        else{
            this.numCorredor1 += 2;
        }
    }

    AvanzarCorredor2() {
        var x =  this.dado.lanzar();
       if(x == 1){
           this.numCorredor2 += 3;
       }
       else if(x == 2 || x == 3){
           this.numCorredor2 += 1;
       }
       else{
           this.numCorredor2 += 2;
       }
   }
}
var n = new Carrera();

for(i = 0; i < 100; i++ ){

    n.AvanzarCorredor1();

    n.AvanzarCorredor2();

    console.log(n.numCorredor1, n.numCorredor2);

    if(n.numCorredor2 >= 100 && n.numCorredor1 >= 100){
        console.log("Empataron");break

    }else if(n.numCorredor2 >= 100 ){
       console.log("perdio el uno"); break

    } else if(n.numCorredor1 >= 100){
        console.log("perdio el dos"); break
    }
    
}




