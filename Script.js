
let cliques = 0;

function contador(){
   cliques ++;
   atualizador();
} 

function zerador() {
   cliques = 0;
   atualizador();
}

function atualizador() {
   document.getElementById("resultado").textContent = "Cliques" + cliques;
}

