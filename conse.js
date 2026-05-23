var olga="LES CONSEQUENCES DE LA DESTRUCTION DE L'ENVIRONNEMENT";
let x=0;
function manampy(){
    if(x<olga.length){
        document.getElementById("conseque").innerHTML+=olga[x];
        x++;
        setTimeout(manampy, 50);
    }
}
manampy();

