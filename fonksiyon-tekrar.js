// arrow fonksiyon kullanarak toplama ve çıkarma yaptım.
let topla = (a,b) => a+b;
let sonuc = topla(6,7); 
console.log(sonuc)

let cikar = (a,b) => a-b;
let sonuc2 = cikar(6,1);
console.log(sonuc2)

// bir sayının çift sayı mı değil mi onu kontrol eden bir fonksiyon döndürdüm.

function checkDouble(a) {
  if (a % 2 === 0) {  // bu satırda a sayısının 2 ye bölümünden kalan 0 ise çift sayıdır, değilse çift sayı değildir.
    return `It's DOUBLE  `
  } else {
    return `It's not DOUBLE :( `
  }
} 
 console.log(checkDouble(a))





// if ile fonksiyon kullanımını birleştirdim.

function selamla() {
  return ("selamlar ben Nilay")
}

function checkenter(kullanici, sifre) {
  if (kullanici === "Nilay" && sifre === "1234") {
    return selamla() + ` bugün sizlere mousse tarifi vereceğim`
  } else {
    return "Hatalı şifre!"
  }  
}

let mesaj = checkenter("Nilaay", "1234");
 console.log(mesaj)

//  arrow fonksiyon tekrarı ve propmt girdisi tekrarım 
//sistem fonksiyonuna isim diye parametre atadım sonrasında fonksiyonu çağırırken isim() kullandım.
// çünkü isim bir fonksiyon ve çağrıldığında gelir. ama parametre olarak isim yazdım, 
// yani isim = isim() oldu otomatikmen.

const selamla = () => `Welcome to our wonderful page !!!! `
const isim = () => prompt("isminizi giriniz")

function sistem(isim, pass) {
  
  if( isim === "Nilay" && pass === "1234" ) {
    return `succesfully entered ` + selamla() 
  } else {
    return `try again, invalid user name or pass`
  }
}
 console.log(sistem(isim(), "1234"))



