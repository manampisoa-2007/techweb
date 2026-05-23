var message="les causes de la déstruction de l'environnement";
let x=0;
function afficher(){
    if(x<message.length){
        document.getElementById("prati").innerHTML+=message[x];
        x++;
        setTimeout(afficher, 60);
    }
}
afficher();
