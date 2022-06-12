
// const pargraf1 = document.getElementById("p1");
// pargraf1.innerText = "hei there";
// pargraf1.style.backgroundColor = 'orange';

// const pargraf2 = document.getElementsByName("p2");
// pargraf2[0].style.backgroundColor = 'blue';
// pargraf2[1].style.backgroundColor = 'yellow';

// let button1 = document.getElementById("button1");
// let paragraf = document.getElementById("p1");
// let color;

// button1.onclick = function () {
//   alert("button 1 clicked");
//   if (color === "yellow") {
//     paragraf.style.backgroundColor = "white";
//     color = 'white';
//   } else {
//     paragraf.style.backgroundColor = "yellow";
//     color = 'yellow';
//   }
//   //   paragraf.style.backgroundColor = "yellow";
// };

// let button2 = document.getElementById("button2");
// button2.addEventListener("click", () => {
//   alert("button 2 clicked");
//   paragraf.style.backgroundColor = "red";
// });
let idnambah = 1;
let button = document.getElementById("add");
// let paragraf1 = document.getElementById("wrapper").getElementsByClassName("c1")[idtag];

let tagsementara = document.getElementById("p1").id;
let paragraf1 = document.getElementById("p1");
// let newElement = document.createElement("div");
// newElement.innerText = "New Element";
let parent = document.getElementById("wrapper");

button.onclick = function () 
{

let clonedElement = paragraf1.cloneNode(true);


idnambah++;
clonedElement.setAttribute('id', "p"+idnambah);
parent.append(clonedElement);
// parent[0][1] = document.getElementById(tagsementara).id = idnambah;
// document.getElementById(tagsementara).id = idnambah;
// }



// document.getElementById(tagsementara-1).id = idnambah+1;
console.log("tag sementara",tagsementara);
tagsementara = parseInt(tagsementara)+ 1;


//   let clonedElement = parent.append(newElement);
}


;

