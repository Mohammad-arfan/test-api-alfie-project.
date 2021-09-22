// const btn = document.querySelector("button"); 

// function alerte(){
//     alert('Hello!!');
// }
// btn.addEventListener("click", alerte);
// // console.log(btn); 
// function salutation(nom){
//     alert("Bonjour " + nom);
// }
// // salutation(" Mun i love You!!!")
// function donneeVisiteur(callBack){
//     let nom = prompt("Enter you Name");
//     callBack(nom);
// }
// donneeVisiteur(salutation);


// const divElement = document.createElement('div');
// const conatainer = document.querySelector('.diva');
// const h2Element = conatainer.querySelector('h2')
// divElement.className = 'Alfie';
// divElement.setAttribute('id', 'alfiemun');
// divElement.setAttribute('title', 'love');
// conatainer.insertBefore(divElement , h2Element); 

// event Listener

const time = new Date();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
document.getElementById("demo").innerHTML = time;

//sorting alphabetically
const student = ["mAlfa", "eta", "beta", "celta","etano"];
console.log(student.sort());
//sorting numerically
const rollNumber = [1,2,3,10,72,8,5,9]
console.log(rollNumber.sort(function(a, b){
    return a-b;
}))


function isLeapYear(year){
    if(year % 400 ===0 || ((year % 4 === 0) && (year % 100 !== 0))){
        console.log(`${year} is not leap year`);
    }else{
        console.log(`${year} is leap year`);
    }


}

isLeapYear(2026);

//For loop
const numbers = Date();

for( let i= 0; i<numbers.length; i++){
    console.log(i)
}
console.log("i am web developer")
document.getElementById("demo").innerHTML = numbers
//for loop in for loopoing in object property§!!!
const person = {
    firstName: "Alfie",
    lastName:"Arfan",
    age: 32

}
for(let x in person){
    console.log(person[x])
}
//For loop in Arrays! Dont use for in loop for Array 

const nombers = [1,2,22,21,41]
for(let number in nombers){
    console.log(nombers[number])
}

  
document.querySelector("#cp").addEventListener('input', function(){
    if(this.value.length==5){
    let url = `https://geo.api.gouv.fr/communes?codePostal=${this.value}`
    fetch(url).then((Response) => 
    Response.json().then((data) => 
    {console.log(data);
        let text = '<ul>';
        for(let ville of data){
            text +=`<li>${ville.nom} - ${ville.population} habitants.</li>`
        }
        text += '</ul>';
        document.querySelector('#ville').innerHTML = text;
        
    })
    );
    }
});