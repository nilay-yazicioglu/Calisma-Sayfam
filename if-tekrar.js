//ternary if dediğimiz bir yapı var bu yapı tek satırda koşullu ifade yazmak için gerekli. Pratik bir yöntem.
// koşul ? ifade1 : ifade2;  formul bu 


let yas = prompt("lütfen yaşını gir"); // kullanıcadan veri girdisi istedim.
let age = Number(yas); //prompt() metodu sayı bile girsen string döndürür, string ifadeyi number ifadeye dönüştürdüm.
let kontrol = age > 25 ? "older than me" : "younger than me"; // ternary if ile koşul yazdım
console.log(kontrol) // konsola yazdırdım.


// başka bir örnek verelim;
let yaş = 20;
let mesaj = yaş >= 18 ? "Reşitsiniz" : "Reşit değilsiniz";
console.log(mesaj);  
 


