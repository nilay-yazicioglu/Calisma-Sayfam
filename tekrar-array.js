//Arrayleri ortak noktası bulunan birden fazla çok veriyi saklamak için kullanırız.
//Arraylere erişmek için değişken ismi(arr adı) ve [] ile indeks numarasını yazarız + indeksler 0'dan başlar. Asansörler gibi.
//Metotlar bizim alet çantalarımız gibidir.

const katilimcilar = ["abba", "michael", "nicki", "rihanna", "eminem"]

console.log(katilimcilar[0] + ` ve `+ katilimcilar[1] +` birlikte konser verecekler` )

//arr elemnalarını nasıl değiştiririz? Değişken adı ve indeks numarası ile o elemanı çağır ve = koy ardından güncel değeri yaz.  
//restaurant listesi bir arraydir, ödeme seçenekleri bir arraydir, yada twitter bir arraydir son taklip ettikleriniz son postlar twitter takipçiler bunların hepsi arr.


katilimcilar[2] = "nova"

console.log(katilimcilar)

// push() metodu arrayin sonuna bir eleman ekler ve arrayin güncel halini listeler. 


katilimcilar.push(" justin ") 
console.log(katilimcilar)
