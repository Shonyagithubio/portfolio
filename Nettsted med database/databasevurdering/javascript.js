//Referanser til HTML-elementer
const main = document.querySelector("main");


//Skriv referanser til database under her:
const db = firebase.database();
const kaker = db.ref("Varer/Kaker");
const boller = db.ref("Varer/Boller");
const brød = db.ref("Varer/Brød");

// Javascript-funksjon for å generere HTML-kode for varer
function genererHTML(snapshot){
  let key = snapshot.key;
  let varer = snapshot.val();
  let parent= snapshot.ref.parent.key;
  console.log(varer);
  main.innerHTML +=`
      <article class="Varer">
        <h1>${varer.Navn}</h1>
        <img src="bilder/${varer.Bilde}" alt="">
        <p>Pris: ${varer.Pris}</p>
        <p>Type: ${varer.Type}</p>
        <a href= "valgtVare.html?key=${key}&parent=${parent}">Les mer</a>
      </article>
  `;
}

// Funksjon som viser alle varer
function visAlle(){
  main.innerHTML = ""; // sletter innholdet i main.
  kaker.on("child_added",genererHTML);
  boller.on("child_added", genererHTML);
  brød.on("child_added", genererHTML);
}
function visKaker(){
  main.innerHTML = ``;
  kaker.orderByChild("Navn").on("child_added", genererHTML);
}
function visBursdag(){
  main.innerHTML = ``;
  kaker.orderByChild("Type").equalTo("Bursdag").on("child_added", genererHTML);
}
function visKonfirmasjon(){
  console.log("visKonfirmasjon");
  main.innerHTML = ``;
  kaker.orderByChild("Type").equalTo("Konfirmasjon").on("child_added", genererHTML);
}
function visBryllup(){
  main.innerHTML = ``;
  kaker.orderByChild("Type").equalTo("Bryllup").on("child_added", genererHTML);
}
function visKakerPris(){
  main.innerHTML = ``;
  kaker.orderByChild("Pris").on("child_added", genererHTML);
}
function visBoller(){
  main.innerHTML = ``;
  boller.orderByChild("Navn").on("child_added", genererHTML);
}
function visBollerPris(){
  main.innerHTML = ``;
  boller.orderByChild("Pris").on("child_added", genererHTML);
}
function visGlutenfriBoller(){
  main.innerHTML = ``;
  boller.orderByChild("Type").equalTo("Glutenfri").on("child_added", genererHTML);
}
function visGlutenfri(){
  main.innerHTML = ``;
  boller.orderByChild("Type").equalTo("Glutenfri").on("child_added", genererHTML);
    brød.orderByChild("Type").equalTo("Glutenfri").on("child_added", genererHTML);
}
function visBrød(){
  main.innerHTML = ``;
  brød.orderByChild("Navn").on("child_added", genererHTML);
}
function visBrødPris(){
  main.innerHTML = ``;
  brød.orderByChild("Pris").on("child_added", genererHTML);
}
