//DATA GLOBAL DIPANGGIL
let player1 = document.querySelectorAll(".player1");
let player2 = document.querySelectorAll(".bot");
let reset = document.getElementById("refresh");
let scorplayer1 = document.getElementsByClassName("pemain11");
let scorcom = document.getElementsByClassName("com");
class dataawal{ //CLASS DATA AWAL YG SIAP DIPAKE
    static keterangandraw = "DRAW";
}
class datapemain{ //CLASS CONSTRUCTOR DATA PLAYER 1 DAN BOT
    constructor(indexplayer,keteranganmenang,scor){
        this.indexplayer = indexplayer;
        this.keteranganmenang = keteranganmenang;
        this.scor = scor;
    }
}
let pemain1 = new datapemain(0,"PLAYER 1 WIN",0); //OBJEK PEMAIN 1
let bot1 = new datapemain(0,"COM WIN",0) //OBJEK BOT

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
    pemain1.scor =0;
    bot1.scor=0;
    datascor(0,0);
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
    datascor(pemain1.scor,bot1.scor);
}

function datascor(pemain1scor,bot1scor){
    scorplayer1[0].innerHTML ="PLAYER 1-SCOR: "+ pemain1scor;
    scorcom[0].innerHTML ="COM-SCOR: "+ bot1scor;
}
function cekpemenang(indexplayer1, indexplayer2){ //LOGIKAN PENGECEKAN PEMENANGAN MENGGUNAKAN 2 INDEX DARI PLAYER 1 DAN BOT
    if(indexplayer1 == 1 && indexplayer2 ==1){
        pemenang.innerHTML = dataawal.keterangandraw;
        setAttributemenang();
       
    }
    else if(indexplayer1 == 1 && indexplayer2 ==2){
        pemenang.innerHTML = bot1.keteranganmenang;
        bot1.scor++;
        setAttributemenang();
    }
    else if(indexplayer1 == 1 && indexplayer2 ==3){
        pemenang.innerHTML =   pemain1.keteranganmenang;
        pemain1.scor++;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==1){
        pemenang.innerHTML =   pemain1.keteranganmenang;
        pemain1.scor++;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==2){
        pemenang.innerHTML =  dataawal.keterangandraw;
        setAttributemenang();
    }
    else if(indexplayer1 == 2 && indexplayer2 ==3){
        pemenang.innerHTML =   bot1.keteranganmenang;
        bot1.scor++;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==1){
        pemenang.innerHTML =   bot1.keteranganmenang;
        bot1.scor++;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==2){
        pemenang.innerHTML =   pemain1.keteranganmenang;
        pemain1.scor++;
        setAttributemenang();
    }
    else if(indexplayer1 == 3 && indexplayer2 ==3){
        pemenang.innerHTML =  dataawal.keterangandraw;
        setAttributemenang();
    }
    consolelogterminal(indexplayer1, indexplayer2);
    }
startgame();
