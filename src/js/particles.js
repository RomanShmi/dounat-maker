const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let imgs = ["../src/js/donut.png", "../src/js/brownDonut.png"];

const donutImage = new Image();


let particleArray = [];
const maxSize = bakery.donats;

class SpinningDonut{
   
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.xMomentum = Math.random() * 10 - 5;
        this.yMomentum = Math.random() * 10 - 5;
        //angle rotated
        this.rotation = 0;
        this.opacity = 1;
        this.size = 3;
        this.donutSrc = imgs[Math.floor(Math.random()*imgs.length)];
        console.log("donat");
    }

    // draw 
    // update

    draw(){
        context.save();
        context.globalAlpha = this.opacity;
        context.translate(this.x,this.y);
        context.rotate(Math.PI / 180 * this.rotation); // turns our degrees measurement into radians
        donutImage.src = this.donutSrc;
        context.drawImage(donutImage, (-donutImage.width / 4) * this.size, (-donutImage.height / 4) * this.size, (donutImage.width / 2) * this.size, (donutImage.height / 2) * this.size);
        context.restore();
    }

    update(){
        this.opacity = 0.5+Math.random()*0.251;
        this.size =0.6+Math.random()*0.13;
        this.rotation += 1;
        this.x += this.xMomentum;
        this.y += this.yMomentum;

    }
}

function spawnSpinningDonut(){
    particleArray.push(new SpinningDonut());
}

// init 
function init(){
    particleArray = [];
}

// animate 
function animate(){
    requestAnimationFrame(animate);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.clearRect(0,0,canvas.width, canvas.height);
    particleArray.forEach(function(particle){
        setTimeout(particle.update(),1000);
        setTimeout(particle.draw(),1000);
        
        
    });
    particleArray = particleArray.filter(function(particle){
        return particle.opacity >= 0.05 && particle.size >= .1;
    })
}

//document.addEventListener('mousedown', spawnSpinningDonut);
init();
animate();