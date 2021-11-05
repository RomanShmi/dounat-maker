const DonatButton = document.getElementById("bake");
const BakerButton = document.getElementById("baker");
const KooffButton = document.getElementById("kooff");
const TimerButton = document.getElementById("timerButton");
const StopBotton= document.getElementById("stop");


let bakery = new Bakery();
DonatInput.value = bakery.getSpeed();
BakerInput.value = bakery.getBaker();
KooffInput.value = bakery.powerCounter;
TimeInput.value = bakery.getKooff();


StopBotton.addEventListener("click", function(){
  
    window.location.reload();
    
});


DonatButton.addEventListener("click", function () {
   
    bakery.accelerate();
    if (bakery.donats>=bakery.kooffprice) 
    KooffButton.disabled=false;
    else
    KooffButton.disabled=true;

    if (bakery.donats>=bakery.bakerprice) 
    BakerButton.disabled=false;
    else
    BakerButton.disabled=true;
    
});

BakerButton.addEventListener("click", function () {
    bakery.bakerbaker();
    BakerButton.textContent = bakery.bakerprice;
    functionX();

});
KooffButton.addEventListener("click", function () {
    bakery.kooffM();
    KooffButton.textContent = bakery.kooffprice;
    
});



function updateDashboard() {
    spawnSpinningDonut();
    bakery.donats = (bakery.donats + Math.round((bakery.bakerr*bakery.kooff)));

    console.log(bakery.time, "  ", bakery.donats, "   ", bakery.bakerr, " update changes");
    DonatInput.value = bakery.donats;
    BakerInput.value = bakery.bakerr;
    KooffInput.value = bakery.powerCounter;
    TimeInput.value = bakery.getKooff();

    if (bakery.donats>=bakery.kooffprice) 
    KooffButton.disabled=false;
    else
    KooffButton.disabled=true;

    if (bakery.donats>=bakery.bakerprice) 
    BakerButton.disabled=false;
    else
    BakerButton.disabled=true;


}


function functionX(){
    console.log("===", bakery.time, "  ", bakery.donats, "   ", bakery.bakerr, "  ",bakery.kooff," ===");
    console.log("  +++++++++++++  ");
    if (bakery.frictionId == undefined) {
        bakery.frictionId = setInterval(updateDashboard, bakery.time * 1000);
      
    }
    


}






