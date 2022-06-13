//DATA GLOBAL DIPANGGIL
let player1 = document.getElementsByClassName("player1")
let player2 = document.getElementsByClassName("bot");
let reset = document.getElementById("refresh");


class dataawal{ //CLASS DATA AWAL YG SIAP DIPAKE
    static keterangandraw = "DRAW";
}
class datapemain{ //CLASS CONSTRUCTOR DATA PLAYER 1 DAN BOT
    constructor(indexplayer,keteranganmenang){
        this.indexplayer = indexplayer;
        this.keteranganmenang = keteranganmenang;
    }
}
let pemain1 = new datapemain(0,"PLAYER 1 WIN"); //OBJEK PEMAIN 1
let bot1 = new datapemain(0,"COM WIN") //OBJEK BOT

function startgame(){
    for(let i = 1 ; i<player1.length ; i++){ //CEK CLIK MENGGUNAKAN ARRAY
        player1[i].addEventListener("click", handleClick.bind( null, i) );
    }
}
function komputermemilih(i){ //KOMPUTER MEMILIH MENGGUNAKAN RANDOM MATH FLOOR
   let randommemilih = Math.floor(Math.random() * 3) + 1;
    gantibackgroundbot(randommemilih);
    cekpemenang(i, randommemilih);
}
reset.onclick = function(){ //ONLCIK MEMANGGIL FUNCTION RESETBACKGROUND
    resetbackground();
}
function handleClick(i) { //SAAT DIKLIK MEMANGGIL RESET BACKGROUND, GANTI BACKGROUND 
    //DAN MENYIMPAN INDEXPLAYER AGAR DILAKUKAN LOGIKA PENGECEKAN
        resetbackground(); 
        gantibackground(i);
        pemain1.indexplayer = i;
        komputermemilih(i);
        //SELANJUTNYA KOMPUTER MEMILIH 
}
function gantibackground(i){ //GANTI BACKGROUND DENG SETATTRIBUTE
    player1[i].setAttribute("style","background-color : #c4c4c4;border-radius: 15px;");
}
function resetbackground(){ //RESET BACKGROUND DENGAN ARRAY DAN PANJANG DARI JUMLAH CLASS PLAYER1
    for(let i = 1 ; i<player1.length ; i++){
          player1[i].setAttribute("style","background-color : none");
          player2[i].setAttribute("style","background-color : none");
    }
    pemenang.innerHTML = "V S";
    pemenang.setAttribute("style","background-color : none;color: #bd0102;");
}
function gantibackgroundbot(i){ //GANTI BACKGROUND MENGGUNAKAN ARRAY
    player2[i].setAttribute("style","background-color : #c4c4c4;border-radius: 15px;");
}
function consolelogterminal(indexplayer,indexkomputer){ //MENAMPILKAN DATA CONSOLE 
    console.log(player1[indexplayer].id," X ", player2[indexkomputer].id," ",pemenang.innerHTML );
}
function setAttributemenang(){ //DATA PEMENANG DITAMPILAN
    pemenang.setAttribute
    ("style",
    "background-color : green;color: white;transform: rotate(-15deg);margin-left: 21%;width: 14vw;font-size: 3vw;border-radius: 5px");
}

function cekpemenang(indexplayer1, indexplayer2){ //LOGIKAN PENGECEKAN PEMENANGAN MENGGUNAKAN 2 INDEX DARI PLAYER 1 DAN BOT
    if(indexplayer1 == 1 && indexplayer2 ==1){
        pemenang.innerHTML = dataawal.keterangandraw;
        setAttributemenang();
       
    }
    else if(indexplayer1 == 1 && indexplayer2 ==2){
        pemenang.innerHTML = bot1.keteranganmenang;
        setAttributemenang();
    }
    else if(indexplayer1 == 1 && indexplayer2 ==3){
        pemenang.innerHTML =   pemain1.keteranganmenang;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==1){
        pemenang.innerHTML =   pemain1.keteranganmenang;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==2){
        pemenang.innerHTML =  dataawal.keterangandraw;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==3){
        pemenang.innerHTML =   bot1.keteranganmenang;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==1){
        pemenang.innerHTML =   bot1.keteranganmenang;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==2){
        pemenang.innerHTML =   pemain1.keteranganmenang;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==3){
        pemenang.innerHTML =  dataawal.keterangandraw;
        setAttributemenang();
    }
    consolelogterminal(indexplayer1, indexplayer2);
    }
startgame();
