/* 1. zadatak
let br = 10;
for (let i = 0; i<br; i++){
    console.log(i+1);
} */

/* 2. zadatak 
let n = prompt("Unesite broj:");
let sum = 0;
for (let i = 1; i<=n; i++){
    sum += i;
}
console.log(sum); */

/* 3. zadatak
let p = [4, 5, 3, 4, 2];
let sum = 0;
let a;
for (let i = 0; i<p.length; i++){
    sum += p[i];
}
a = sum/p.length;
console.log("Prosjek: " + a); */

/* 4. zadatak
let n = prompt("Unesite broj:");
for (let i = 1; i<=n; i++){
    if (i%2===0){
        console.log(i + " je paran broj.");
    }
    if (i%2===1){
        console.log(i + " je neparan broj.");
    }
} */

/* 5. zadatak
let p = [12, 7, 25, 4, 19];
let max = 0;
for (let i = 0; i<p.length; i++){
    if (p[i]>max){
        max = p[i];
    }
}
console.log("Najveci broj u polju: " + max); */

let p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let br = prompt("Unesite broj koji želite pronaći:");
for (let i = 0; i<p.length; i++){
    if(p[i]===br){
        console.log("Broj je pronaden.");
    }
    else{
        console.log("Broj nije pronaden.");
    }
}