class Corredores{
    constructor(numCorredor){
        this._numero=numCorredor;
        this._posicion = 0;
    }

    avanzar(){
        return  Math.trunc(Math.random()*90+1);

    }

    get posicion(){
        return this._posicion;
    }
    
}

class Tortuga extends Corredores{
    constructor(numCorredor){
        super(numCorredor);
    }

    avanzar(){
        let avanTortuga = super.avanzar();

        if(avanTortuga <= 45){
            this._posicion += 3;

        }else if(avanTortuga >= 46 && avanTortuga <= 63){
            this._posicion -= 6;

        }else{
            this._posicion += 1;
        }
        
    }
}


class Liebre extends Corredores{
    constructor(numCorredor){
        super(numCorredor);
    }
    avanzar(){
        let avanceLiebre = super.avanzar();
        
        if(avanceLiebre <= 18){
            this._posicion += 0;

        }else if(avanceLiebre >= 19 && avanceLiebre <= 36){
            this._posicion += 9;

        }else if(avanceLiebre >= 37 && avanceLiebre <= 45){
            this._posicion -= 12;

        }else if(avanceLiebre >= 46 && avanceLiebre <= 76){
            this._posicion += 1;
        
        }else{
            this._posicion -= 2;
        }

    }
}

    let l1=new Liebre(5);
    l1.avanzar();
    let l2= new Tortuga(6);
    l2.avanzar();
    



let nuevaCarrera = new Corredores();
resultadoCarrera();

function resultadoCarrera (){
    
   
    while(l1.posicion<= 90 && l2.posicion <= 90){
       

        console.log("Tortuga: " + l2.posicion + "-" + "Liebre: " + l1.posicion);

        if(l2.posicion >= 90 && l1.posicion >= 90){
            console.log("Quedaron empate");
            
        }else if (l2.posicion >= 90){
            console.log("Gano la tortuga");
        
        }else if(l1.posicion >= 90){
            console.log("Gano la liebre");
        
        }
    }
   
}