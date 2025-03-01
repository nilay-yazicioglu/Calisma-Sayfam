//fonksiyonların kısayol tuşları gibidir. Ardı ardına yapılan işlemleri tekrar tekrar baştan yazmak yerine 
//bir kere yazıp onu çağırırız. 
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


//for döngülerinde önce sayiyi tanımlarsan sayi sadece bir kez oluşturulur, her defasında yeni bir 
//sayı oluştursun istersen sayi değişkenini for döngüsünün içerisine yazman gerekir. UNUTMA BUNU.

//FONSKİYON 1 BU KOD 10 TANE YAZI VEYA 10 TANE TURA YAZDIRIR.
function yaziTura10defa() {
  let sayi = Math.random()
  for(let i=0; i<10; i++) {
    if(sayi<0.5) {
      console.log("tura")
    } else {
      console.log("yazı")
    }
  }
}
 yaziTura10defa()

//FONSKİYON 2 BU KOD HER DEFASINDA FARKLI BİR SAYI OLUŞTURUR.
function yaziTura10defa() {
  for(let i=0; i<10; i++) {
    let sayi = Math.random()
    if(sayi<0.5) {
      console.log("tura")
    } else {
      console.log("yazı")
    }
  }
}
 yaziTura10defa()




