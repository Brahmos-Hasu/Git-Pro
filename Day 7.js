//string methods

let data = " Brahmos Hasu ";
let con = " hello "

console.log(data.length);
console.log(data.toUpperCase());
console.log(data.toLowerCase());
console.log(data.charAt(8));
console.log(data.indexOf("h"));
console.log(data.lastIndexOf("s"));

//slice
console.log(data.slice(1,8));

//substring
console.log(data.substring(9,13))

//replace
console.log(data.replace("Hasu","H"));

//replaceall
console.log(data.replaceAll("a","b"));

//split
console.log(data.split(" "));

//Trim
console.log(data.trim());

//startswith
console.log(data.startsWith("B"))

//endswith
console.log(data.endsWith(" "))

//includes
console.log(data.includes("v"));

//concat
console.log(con.concat(data));

//repeat
console.log(con.repeat(2));

//match
console.log(data.match("Ha"));

//search 
console.log(data.search("Ha"));



