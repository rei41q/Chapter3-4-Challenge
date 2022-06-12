let player1 = document.querySelectorAll(".player1");

console.log(player1.length);

player1[1].setAttribute("style","background-color : red");
player1[2].setAttribute("style","background-color : blue");
player1[3].setAttribute("style","background-color : red");


function prosespilih(terpilih){
    let targetTerpilih1 = terpilih.targetTerpilih1;
    targetterpilih1.setAttribute("style","background-color : black");
}
function startgame(){
    player1.forEach((pilih) =>{
        pilih.addEventListener("click", prosespilih);
    });
}
let parent = document.getElementById("player2");
let child = parent.childNodes[0];
let childval = child.value;

console.log(parent.child[0]);
