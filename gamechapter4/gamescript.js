//DATA GLOBAL DIPANGGIL
let player1 = document.querySelectorAll(".player1");
let player2 = document.querySelectorAll(".bot");
let reset = document.getElementById("refresh");
let scorPlayer1 = document.getElementsByClassName("pemain11");
let scorCom = document.getElementsByClassName("com");
class dataAwal{ //CLASS DATA AWAL YG SIAP DIPAKE
    static keteranganDraw = "DRAW";
}
class dataPemain{ //CLASS CONSTRUCTOR DATA PLAYER 1 DAN BOT
    constructor(indexPlayer,keteranganMenang,scor){
        this.indexPlayer = indexPlayer;
        this.keteranganMenang = keteranganMenang;
        this.scor = scor;
    }
}
let pemain1 = new dataPemain(0,"PLAYER 1 WIN",0); //OBJEK PEMAIN 1
let bot1 = new dataPemain(0,"COM WIN",0) //OBJEK BOT

function startgame(){
    for(let i = 1 ; i<player1.length ; i++){ //CEK CLIK MENGGUNAKAN ARRAY
        player1[i].addEventListener("click", handleClick.bind( null, i) );
    }
}
function komputerMemilih(i){ //KOMPUTER MEMILIH MENGGUNAKAN RANDOM MATH FLOOR
   let randomMemilih = Math.floor(Math.random() * 3) + 1;
    gantiBackgroundBot(randomMemilih);
    cekPemenang(i, randomMemilih);
}
reset.onclick = function(){ //ONLCIK MEMANGGIL FUNCTION resetBackground
    resetBackground();
    pemain1.scor =0;
    bot1.scor=0;
    dataScor(0,0);
}
function handleClick(i) { //SAAT DIKLIK MEMANGGIL RESET BACKGROUND, GANTI BACKGROUND 
    //DAN MENYIMPAN indexPlayer AGAR DILAKUKAN LOGIKA PENGECEKAN
        resetBackground(); 
        gantibackground(i);
        pemain1.indexPlayer = i;
        komputerMemilih(i);
        //SELANJUTNYA KOMPUTER MEMILIH 
}
function gantibackground(i){ //GANTI BACKGROUND DENG SETATTRIBUTE
    player1[i].setAttribute("style","background-color : #c4c4c4;border-radius: 15px;");
}
function resetBackground(){ //RESET BACKGROUND DENGAN ARRAY DAN PANJANG DARI JUMLAH CLASS PLAYER1
    for(let i = 1 ; i<player1.length ; i++){
          player1[i].setAttribute("style","background-color : none");
          player2[i].setAttribute("style","background-color : none");
    }
    pemenang.innerHTML = "V S";
    pemenang.setAttribute("style","background-color : none;color: #bd0102;");

}
function gantiBackgroundBot(i){ //GANTI BACKGROUND MENGGUNAKAN ARRAY
    player2[i].setAttribute("style","background-color : #c4c4c4;border-radius: 15px;");
}
function consoleLogTerminal(indexPlayer,indexKomputer){ //MENAMPILKAN DATA CONSOLE 
    console.log(player1[indexPlayer].id," X ", player2[indexKomputer].id," ",pemenang.innerHTML );
}
function setAttributemenang(){ //DATA PEMENANG DITAMPILAN
    pemenang.setAttribute
    ("style",
    "background-color : green;color: white;transform: rotate(-15deg);margin-left: 21%;width: 14vw;font-size: 3vw;border-radius: 5px");
    dataScor(pemain1.scor,bot1.scor);
}

function dataScor(pemain1scor,bot1scor){
    scorPlayer1[0].innerHTML ="PLAYER 1-SCOR: "+ pemain1scor;
    scorCom[0].innerHTML ="COM-SCOR: "+ bot1scor;
}
function cekPemenang(indexPlayer1, indexPlayer2){ //LOGIKAN PENGECEKAN PEMENANGAN MENGGUNAKAN 2 INDEX DARI PLAYER 1 DAN BOT
    if(indexPlayer1 == 1 && indexPlayer2 ==1){
        pemenang.innerHTML = dataAwal.keteranganDraw;
        setAttributemenang();
       
    }
    else if(indexPlayer1 == 1 && indexPlayer2 ==2){
        pemenang.innerHTML = bot1.keteranganMenang;
        bot1.scor++;
        setAttributemenang();
    }
    else if(indexPlayer1 == 1 && indexPlayer2 ==3){
        pemenang.innerHTML =   pemain1.keteranganMenang;
        pemain1.scor++;
        setAttributemenang();
    }
    else if(indexPlayer1 == 2 && indexPlayer2 ==1){
        pemenang.innerHTML =   pemain1.keteranganMenang;
        pemain1.scor++;
        setAttributemenang();
    }
    else if(indexPlayer1 == 2 && indexPlayer2 ==2){
        pemenang.innerHTML =  dataAwal.keteranganDraw;
        setAttributemenang();
    }
    else if(indexPlayer1 == 2 && indexPlayer2 ==3){
        pemenang.innerHTML =   bot1.keteranganMenang;
        bot1.scor++;
        setAttributemenang();
    }
    else if(indexPlayer1 == 3 && indexPlayer2 ==1){
        pemenang.innerHTML =   bot1.keteranganMenang;
        bot1.scor++;
        setAttributemenang();
    }
    else if(indexPlayer1 == 3 && indexPlayer2 ==2){
        pemenang.innerHTML =   pemain1.keteranganMenang;
        pemain1.scor++;
        setAttributemenang();
    }
    else if(indexPlayer1 == 3 && indexPlayer2 ==3){
        pemenang.innerHTML =  dataAwal.keteranganDraw;
        setAttributemenang();
    }
    consoleLogTerminal(indexPlayer1, indexPlayer2);
    }
startgame();
