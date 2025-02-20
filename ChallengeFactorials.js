/**Challenge: Factorials  */

function faktoriyel(n) {
    // Tip kontrolü 
    if (typeof n !== "number" || !Number.isInteger(n)) {
        return "Lütfen geçerli bir tam sayı girin.";
    }

    // Negatif-Pozitiflik kontrolü 
    if (n < 0) {
        return "Lütfen pozitif bir tam sayı girin.";
    }

    let sonuc = 1;
    for (let i = n; i > 1; i--) {
        sonuc *= i;
    }
    return sonuc;
}

console.log(faktoriyel(5)); // 120
console.log(faktoriyel(0)); // 1
console.log(faktoriyel("emre")); //Lütfen pozitif bir tam sayı girin.
console.log(faktoriyel(4.5)); //Lütfen pozitif bir tam sayı girin.
console.log(faktoriyel("5")); //Lütfen pozitif bir tam sayı girin.



