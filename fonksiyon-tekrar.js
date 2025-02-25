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
