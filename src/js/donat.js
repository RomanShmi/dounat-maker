
class Bakery {
    constructor(){
      this.donats = 90;
      this.bakerr = 0;
      this.kooff = 1;
      this.time = 2 ;
      this.bakerprice= 100;
      this.kooffprice=10;
      this.frictionId = undefined;
      this.powerCounter=0;
    }
    bakeDonat()
    {this.donats=this.donats+1;}
    
    Donat
    
    accelerate(){
      console.log(this.time," = ",this.donats," = ",this.bakerr,"   acceleration")
    
      for(var i=1; i <=(Math.round(this.kooff)); i++ )
      {

        this.bakeDonat();
      }
      DonatInput.value = this.donats;      
      BakerInput.value = this.bakerr;
      KooffInput.value = this.powerCounter;
      TimeInput.value = this.getKooff();
    }
  
  
   
    bakerbaker(){
      console.log(this.time,"  ",this.donats,"   ",this.bakerr,"   bakerbaker");
      if(this.donats>=this.bakerprice )
      {
        this.donats= this.donats-this.bakerprice; 
        this.bakerr=this.bakerr+1 ;
        this.bakerprice=Math.round(this.bakerprice*1.1);
      
      }
      DonatInput.value = this.donats;
      BakerInput.value = this.bakerr;
      KooffInput.value = this.powerCounter;
      TimeInput.value = this.getKooff();
    }
  
    kooffM(){
      console.log(this.time,"  ",this.donats,"   ",this.bakerr,"   kooffM");
     
      if (this.donats >= this.kooffprice)
      {
       
        this.donats=this.donats-this.kooffprice;  
        this.kooffprice=Math.round(this.kooffprice*1.1); 
        this.kooff=this.kooff*1.2;
        this.powerCounter++;
      }
      DonatInput.value = this.donats;
      BakerInput.value = this.bakerr;
      KooffInput.value = this.powerCounter;
      TimeInput.value = this.getKooff();
    }


     getTime(){
     return this.time;}
      
     getKooff(){
      return this.kooff;}
    
      getBaker(){
      return this.bakerr;}
    
      getSpeed(){
      return this.donats;}
  
     
}