
(function(){
    const lienLireSuite = document.createElement("a");
const lesParagraphs = document.querySelectorAll("p");

lienLireSuite.setAttribute("href" , "#");
lienLireSuite.setAttribute("class", "lien");

lienLireSuite.innerHTML = "Read more to know";
lesParagraphs[0].appendChild(lienLireSuite);

function cacherTexte() {
for(let i = 0; i < lesParagraphs.length; i++){
    if (i === 0){
        continue;
    } else if (i >= 1) {
        lesParagraphs[i].style.display = "none";
    }
}
}
function apparaitreTexte(){
for(let i = 0; i < lesParagraphs.length; i++){
    
    lesParagraphs[i].style.display = "block";

}
this.remove();
}
cacherTexte()
lienLireSuite.addEventListener('click', apparaitreTexte);
console.log(lesParagraphs)
})();