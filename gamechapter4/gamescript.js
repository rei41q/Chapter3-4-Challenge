
let player1 = document.getElementsByClassName("player1")
let player2 = document.getElementsByClassName("bot");
let reset = document.getElementById("refresh");


class dataawal{
    static indexplayer1=0;
    static indexplayer2=0;
    static keteranganmenangplayer1 = "PLAYER 1 WIN";
    static keteranganmenangplayer2 = "COM WIN";
    static keterangandraw = "DRAW";
}
function startgame(){
    for(let i = 1 ; i<player1.length ; i++){
        player1[i].addEventListener("click", handleClick.bind( null, i) );
    }
}
function komputermemilih(i){
   let randommemilih = Math.floor(Math.random() * 3) + 1;
    gantibackgroundbot(randommemilih);
    cekpemenang(i, randommemilih);
}
reset.onclick = function(){
    resetbackground();
}
function handleClick(i) {
        resetbackground(); 
        gantibackground(i);
        dataawal.indexplayer1 = i;
        komputermemilih(i);
}
function gantibackground(i){
    player1[i].setAttribute("style","background-color : #c4c4c4");
}
function resetbackground(){
    for(let i = 1 ; i<player1.length ; i++){
          player1[i].setAttribute("style","background-color : none");
          player2[i].setAttribute("style","background-color : none");
    }
    pemenang.innerHTML = "V S";
    pemenang.setAttribute("style","background-color : none;color: red");
}
function gantibackgroundbot(i){
    player2[i].setAttribute("style","background-color : #c4c4c4");
}
function consolelogterminal(indexplayer,indexkomputer){
    console.log(player1[indexplayer].id," X ", player2[indexkomputer].id," ",pemenang.innerHTML );
}
function setAttributemenang(){
    pemenang.setAttribute
    ("style",
    "background-color : green;color: white;transform: rotate(-15deg);margin-left: 25%;");
}
function cekpemenang(indexplayer1, indexplayer2){
    if(indexplayer1 == 1 && indexplayer2 ==1){
        pemenang.innerHTML = dataawal.keterangandraw;
        setAttributemenang();
       
    }
    else if(indexplayer1 == 1 && indexplayer2 ==2){
        pemenang.innerHTML = dataawal.keteranganmenangplayer2;
        setAttributemenang();
    }
    else if(indexplayer1 == 1 && indexplayer2 ==3){
        pemenang.innerHTML =   dataawal.keteranganmenangplayer1;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==1){
        pemenang.innerHTML =   dataawal.keteranganmenangplayer1;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==2){
        pemenang.innerHTML =  dataawal.keterangandraw;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==3){
        pemenang.innerHTML =   dataawal.keteranganmenangplayer2;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==1){
        pemenang.innerHTML =   dataawal.keteranganmenangplayer2;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==2){
        pemenang.innerHTML =   dataawal.keteranganmenangplayer1;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==3){
        pemenang.innerHTML =  dataawal.keterangandraw;
        setAttributemenang();
    }
    consolelogterminal(indexplayer1, indexplayer2);
    }
startgame();

