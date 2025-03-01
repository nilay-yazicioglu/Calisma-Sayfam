//burda bir obje tanımladık. değişken tanımlar gibi başladık = den sonra süslü parantez koyduk ve özellikleri sıraladık.
//objeler tıpki bir kimlik kartı gibi işlev görüyor. Kimlik kartına bakıldığında nasıl doğum tarihi-isim-soyiism-kütük bu bilgilere
//erişebiliyorsak objelerde de böyle. 
//objeler key-value tipindedir.

let kedi = {
  color:"yellow",
  type:"scottish", //objelerde her key-value çiftinden sonra VİRGÜL konur bunu unutma.
  birth:"2001",
  
}

kedi.color ="red";
kedi["birth"]="2002";
kedi.kilo = 12;
kedi.["göz rengi"] = "kahverengi"; // objelerde dot ve köşeli parantezle erişim sağlarsın.Eğer keyler iki kelimeden oluşuyorsa köşeli parantez tercih etmelisin.
delete kedi.color // objelerde bir key silmek için önce delete yazarız sonra bir boşluk ve neyi sileceğimizin adresini yazarız.
delete kedi.kilo

console.log(kedi)
console.log(kedi.color)
console.log(kedi[kilo]

// obje içinde obje de açabilirsin, aşağıdaki gibi 
            
let hastane = {
  adres:"Ankara",
  "kaç şubesi var?":12,
  "çalışan sayısı":{
      fizyoterapist:14,
      ergoterapist:4,
      "konuşma terapisti":2, }
}

console.log(hastane["çalışan sayısı"])
