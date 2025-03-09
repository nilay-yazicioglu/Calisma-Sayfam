/*
Bir sayfaya tıkladığımızda karşımıza çıkan pop-uplar, sayfada olmayan görünen şeyler DOM'dur. twitterdaki üç noktalı alan var ya gizle gizleme yazan yer o da bir DOM.
DOM sayesinde html dosyasını sürekli sürekli değiştirmek zorunda kalmıyoruz.Pratik bir yol sunuyor bize DOM.
HTML = Ev planı DOM = Ev (evün boyasını değiştiririz, balkonu kapatırız falan ya ama bunlar ev planında yazmaz onun gibi düşün )
JS kullanarak html dosyasını maniple etmemizi sağlıyor DOM.
DOM=document object model ( temsili bir html modeli oluşturuyor ağaç şeklinde. ) 
DOM ile interaktif sayfalar oluşturabiliriz. 
DOM oluşturmak ; 
-her bir html tagini, onu temsil eden bir objeye dönüştürür. Bu objede o html elemanının içindeki yazı, classları ve diğer tüm propertyleri yer alır. 
-bu objeleri, taglerin arasındaki parent-child ilişkisine göre ağaca yerleştirir. Html, body gibi elemanlar ağacın ana gövdesine yakın olur, bunların içindekiler ise 
ağacın daha üstündeki dallarında yer alır (h1,p,h2 gibi) 

-Dom ağacının kökünde document objesi bulunur. Bu objelerin ağaçtaki yerlerine node denir.Tagler, html dosyasında bulundukları konuma göre, yani sahip oldukları parent-child 
ilişkisine göre dom ağacına yerleştirilir.

html dosyasına nasıl js dosyası eklenir ? 
-html dosyası içinde <script> </script> taglari arasına ve BODY TAGİ KAPANMADAN HEMEN ÖNCE YAZILMALI.(jsye açılan bir kapı düşünebilirsin ) 
-bir diğer yol ise; <script src="dosyaYolu/dosyaAdi.js"> </script> ile de bağlanabilir. Bu yöntem daha iyi 

DOM EVENTLERİ 
-Günlük hayatta bir internet sayfasında yaptığımız her şey. Bir kullanıcının yaptığı tüm interactionlar event sayılır. Kullanıcın fareyi nereye götürdüğü bile dahil buna !
Events = kullanıcın sayfada yaptığı eylemler ( tıklamak, kaydırmak, sağ tıklamak, klavye tuşlarına basmak.... )
EventHandlers = Bu eylemler gerçekleştiğinde yapılması istenenler
örn:sayfanın en başına git bir dom eventi 


EventListener nedir? 
kahve dükkanına girdin baristaya bir kahve lütfen dedin ve barista siparişi aldı ve kahveyi hazırlamaya gitti. Yani, barista sipariş eventlerini dinler 
ve gerekli fonksiyonu çalıştırır. Domda ise bunu eventListener yapar.Bunlar bir dom eventini dinleyen yani o event gerçekleştiğinde bir fonksiyonu tetikleyen
elemanlardır. eventListener kullanmak için 3 şey lazım: 1-)eleman 2-)event türü  3-) çalışacak fonksiyon 
-addEventListener ile eklenir.

const buton = document.getElementById("AcKapa");
buton.addEventListener("click", toggleTheme) = EVENTLISTENER 
buton = eleman
clicl = event tipi (string)
toggleTheme = fonksiyon (cb fonksiyon + eventHandler)

DOM elemanı oluşturmak, eklemek, silmek bunlar nasıl yapılır ? 

const yeniParagraf = document.createElement("p") ====>>>> P tagi oluşturur.
yeniParagraf.textContent = "karanlık temayı denediğiniz için teşekkürler" ===>>> paragrafın içerğini değiştirir.
document.querySelector(".description").appendChild(yeniParagraf) ====>>> description classının içine ve en sonuna ekler bu yeniParagrafı

createElement = Yeni eleman oluşturmak için 
appendChild = elemanı child olarak ekler 
remove = silmek için 
## NOT: ELEMANI OLUŞTURDUN AMA SAYFAYA EKLEYENE KADAR GÖREMEZSİN.APPENDCHILD İLE SAYFAYA EKLEMEYİ UNUTMA.

###NOT: document. dersen HTML dosyasını kastedersin. blabla. dersen o elemanı kast edersin mesela yeniParagraf. gibiii 

#####querySelector ile seçim yaaprsan karşısına çıkacak ilk elemanı getirir. querySelectorAll dersen o zamanda yazdığın tüm elemnaları getirir.

click eventi = tıklandığında bir işlem yaptırır
dblclick eventi = çift tıklandığında bir işlem yaptırır
mouseover eventi = fare üzerinde geldiğinde yapılacak işlem 
mouseout eventi = fare üzerinden çıktığında yapılacak işlem 
keydown eventi = klavye tuşun abasıldığında yapılacak işlem 
keypress = Bir tuşa basıldığında, karakter girildiğinde tetiklenir (artık önerilmez).
keyup =  Bir tuş bırakıldığında tetiklenir.


form oluşturmak: 
-kredi kartı bilgilerini girdiğin sayfa bir form örneği, kullanıcı ve sistem arasındaki köprü formdur.
<form> = kullanıcıdan veri almak için kullanılır. kendine özgü bir görüntüleri yok 
<label> = etiket eklemek için kullanılır. kullanıcadan neyi girmesini istiyorsanız o, kullanıcı adı,şifre gibi
<textarea> = kullanıcın çok satırlı metin girişi yapmasını sağlar.Yorum gibi. 
<button> = kullanıcının tıklamasıyla bir işlemi başlatmak için kullanılır. Genelde form verilerini göndermek için kullanılır,
form dışında da kullanılabilir.
## yukarıdaki bilgiler kullanıcıdan aldıkları bilgileri işlemek için bir arayüz sağlar. 
## arayüz (interface)= İki tane farklı şeyi biribiriyle konuşturan, haberleştiren sistem. 
Kullanıcı ve sistem arasındaki iletişimi sağlayan sistem de form. 


Event Objesi : olayla ilgili verileri tutan object yani obje
Örnek:bir fare tıklama olayı için, event nesnesine tıklamanın tam olarak nerede gerçekleştiğini (x y koordinatları ile) 
hangi düğmenin tıklanmış olduğunu (sağ-sol-orta) ve tıklama da hangi tuşların basılı olduğunu (shift, ctrl) içerir.
barista=eventListener, kahve yapmak=callback function, adisyon=event objesi










