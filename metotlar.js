//string metotları 
toUpperCase() toLowerCase() charAt() slice()
 
const yorum = "BUGÜN GÜNLERDEN PAZAR";
const güncelYorum = yorum.toLowerCase();
console.log(güncelYorum)

//kedimin isminin ilk harfini büyük yapalım.

const kedim = "dumi";
 const kedi2 = kedim.charAt(0).toUpperCase() + kedim.slice(1)

console.log(kedi2)

