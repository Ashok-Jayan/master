a=10
console.log(a)
let str = "Ashok ";
let str2 = 'Jayan';
let str3 = `Name of the person is ${str}`;
console.log(str3);

//Creating object
let name = new String("Ashok Jayan");
console.log(name)

let stuname = "   Ashok jayan   ";
//charat()
console.log(stuname.charAt(4));
//indexof()
console.log(stuname.indexOf('k'));
//concat()
concat= str.concat(stuname);
console.log(concat)
//tolowercase()
lwcase = stuname.toLocaleLowerCase();
console.log(lwcase);
//touppercase()
console.log(stuname.toUpperCase());
//slice()
strslice = stuname.slice(2,7);
console.log(strslice);
//trim
strtrim = stuname.trim();
console.log(strtrim);
//split()
let projectname = "now we are in project1";
console.log(projectname.split(" "));
//substring()
console.log(str2.substring(0,2));
//includes()
console.log(projectname.includes("we"));
console.log(projectname.includes("yes"));
//length property
console.log(projectname.length);

//program using forloop
let check = "Keep your eyes open"
for(i=0; i<=check.length; i++){
    // console.log(check[i]);
   if (check.includes("a","e","i","o","u")){
    
   }
}

