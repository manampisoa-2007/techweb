var canvas=document.getElementById("canvas1");
var contexte=canvas.getContext("2d");
contexte.font="bold 55px verdana,Arial,serif";
contexte.fillStyle="blue";
contexte.fillText("l'environnement et la santé",30,190);

contexte.linewidth="100";
contexte.strokeStyle="red";
contexte.strokeRect(20,138,745,85);
contexte.stroke();

var salut="bonjour! Bienvenue dans mon site.c'est une site qui consiste à l'environnement et la santé.Je choisie le thème environnement et la santé,car nous sommes dans le pays sous développer et pauvre.Ces pauvrétés entraine l'homme a détruire l'evironnement et de cherher leur besoins dans les resources naturel.Par conséquents l'environnement est plus dégrader,mais ces dégradations presentes des incovenients trés grâves sur la vie humaine surtout la santé et si la dégradation n'est pas limiter,ni stoper, notre pays est irrespirable aprés quelques annéés.";
let x=0;
function afficher(){
    if(x<salut.length){
        document.getElementById("prati").innerHTML+=salut[x];
        x++;
        setTimeout(afficher, 100);
    }
}
afficher();