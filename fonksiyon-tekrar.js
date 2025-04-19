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
//Return fonksiyonların çıkış kapısıdır. Browser returnu görünce fonksiyonun işini bitirdiğini anlar.
//returnden sonraki satırları browser okumaz.

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


// prompt() fonksiyonu her zaman   STRING türünde veri döndürür. 
//Yani, pass === 123 ifadesinde 123 sayısı bir number türü iken, prompt() ile aldığınız değer her zaman bir 
//string olacaktır. Bu yüzden, pass değişkeni "123" (string) olmalı ve karşılaştırmada da string türünde olmalıdır.
//prompt() fonksiyonunu kullanırken bunun sadece string döndürdüğünü unutma.Yoksa kod düzgün çalışmaz.

function giris() {
  let username = prompt("isminizi giriniz")
  let pass = prompt("şifrenizi giriniz")
  if(username === "nilay" && pass === "123") {
   console.log( `${username} olarak `+kartMesajiGöster())
  } else {
    console.log( `şifre veya username yanlış.Lütfen tekrar deneyiniz.`)
  }
}


giris()


//parametreler, fonskiyonda kullanılacak değerleri temsil eden referanslardır. Aşağıdaki kodda mesaj bir parametredir.
// parametrenin yerine geçen gerçek değerlere de arguman denir. Parametreler yer tutuculardır, argumanlar ise gerçektir
// "lütfen şifrenizi giriniz" bu mesela bir argumandır.

function uyari(mesaj) {
  console.log(mesaj)
}

uyari("lütfen kartınızı almayı unutmayın !")

uyari("hoşgeldiniz, size nasıl yardımcı olabilirim ?")
uyari("lütfen şifrenizi giriniz")


// iki parametre de alabilir. Burda uyarı fonksiyonunu çağırırken isim argumanı da "" içinde olamalı 
//yoksa kod çalışmaz çünkü değişken zanneder ve parametrelerin sırası ile argumanların sırası aynı olmalı. 

function uyari(mesaj,isim) {
  console.log(mesaj+ " " + isim)
}
uyari("bankamıza hoşgeldiniz", "Nilay" )

!!! Callback'ler genellikle asenkron işlemlerde çok kullanılır.Mesela bir veri çekme veya bir işlem tamamlandığında
  ne yapılacağını belirtmek için.

  !!! callback fonksiyonları nedir ? = bir fonksiyon çalışması tamamlandıktan sonra başka bir fonksiyonun 
  çalışmasını sağlayan fonsksiyonlardır.

  Klasik cb fonksiyonu matematiği:
  setTimeout(()=>{buraya console.log() yapabilirsin },2000) BU  BİR CBDİR.2000 
    yazan şey ms kaç saniye sonra yazdığın fonksiyonu çalıştıracağını söylüyorsun 
    bu yüzden de asenkron işlemlerde çok kullanılır. 
      
  paramtreli cb fonksiyonu yazımı:
    function işleVeYaz(cb) {
  const isim = "Nilay"; // Örnek veri (sanki bir yerden geldi gibi) 
  cb(isim);             // Callback fonksiyona bu veriyi yolluyoruz
}
!!!Yani isim = "Nilay" kısmı, senin callback fonksiyonuna "Bak ben sana bir bilgi verdim,
  ne yapacağını sen belirle" diyebilmek için orada. Callback'in amacı genelde dışarıdan 
  gelen veriyle bir işlem yapmak ya.
  Burası, fonksiyonun sana bir hediye kutusu gönderdiği kısım 🎁
  Kutunun içinde "Nilay" var.
  Sen de callback fonksiyonla kutuyu açıyorsun ve içindekini nasıl
  kullanacağını sen karar veriyorsun. 
    
    Unutma:
Callback fonksiyon = başkasının çağıracağı fonksiyon

Parametre = çağrıldığında dışarıdan gelecek veri

Arrow ya da normal function olabilir

  !!! length bir metot değil bir propertydir ve () almaz 


// ARROW FONKSİYONU:  () => {}   İŞTE BU KADAR :) 





