//Program to split string and convert it in to an array
let str = "Robin Singh";
console.log(str.split(" "));
/*function string_to_array(str){
    return str.trim().split(" ");
}
console.log(string_to_array("Robin Singh")); */

let cusname = "Robin singh";
let name_split = cusname.split(" ");
firstname = name_split[0] + (" ");

lastname = name_split[1].charAt(0).toUpperCase();
console.log(firstname + lastname);

//Program to prevent unauthorized access
/*let mail = "ashokjayan@gmail.com";
protectmail = mail.slice(0,4) + "****" + mail.slice(mail.indexOf("@"));
console.log(protectmail)*/
function protectmailid(mail) {
    console.log(mail.slice(0, 4) + "****" + mail.slice(mail.indexOf("@")));
}
protectmailid("ashokjayan@gmail.com");

//Program for paramatize string

/*let str1 = "Robin Singh from USA"
parastr = str1.replaceAll(" ", "-").toLowerCase();
console.log(parastr);*/
function para(str1) {
    console.log(str1.replaceAll(" ", "-").toLowerCase());
}
para("Robin Singh from USA");

/*function protect_mail(email){
    let split = email.split("@");
    let split1 = split[0];
    let avg = split1.length / 2;
    split1 = split1.substring(0, (split1.length - avg));
    split2 = split[1];
    return split1 + "...@" + split2;
}
console.log(protect_mail("ashokjayan@gmail.com"));*/

//Function

/*function msg() {
    alert("Hello! friends...")
}
msg();

//with arguments
function getcube(num) {
    console.log(num * num * num);
}
getcube(3);

//Default values

function gettext(from, text = "blank") {
    console.log(from + ":" + text);
}
gettext("Ashok");

//Function with return value
function retunvalue() {
    return ("Welcome to AI world")
}
let message = retunvalue;
console.log(message);

let userName = 'John';
function showMessage() {
    userName = "Bob";
    let message = 'Hello' + userName;
    alert(message);
}
alert(userName);
showMessage();
alert(userName); */

//Arrays

let arr = ["Ashok", "Jayan", "ALAJ"];
console.log(arr);
let arr1 = [];
document.write(arr1);
let arr3 = new Array();
document.write(arr3);
let arr4 = new Array('Ashok', 'Jayan', 'ALAJ');
document.write(arr4);
let arr5 = new Array();
arr5[0] = 'Ashok';
arr5[1] = 'Jayan';
arr5[2] = 'ALAJ';
document.write(arr5[1]);
console.log(arr4.indexOf("ALAJ"));
console.log(arr.concat(arr4));
console.log(arr.pop());
console.log(arr);
console.log(arr.push("ALAJ", "Jayan"));
console.log(arr);
console.log(arr.reverse());
console.log(arr.slice(0, 1));
console.log(arr.sort());
//for loop
/*for(let i=0; i< arr.length; i++){
    alert(arr[i]);
}
// forin
for(let key in arr){
    alert(arr[key]);
} */

//Object literals
emb_details = { Emb_Name: "Ashok", Emb_id: 1993, Emb_Salary: 40000 }
console.log(emb_details.Emb_Name + " " + emb_details.Emb_id + " " + emb_details.Emb_Salary);

//Instance of object
let stu_details = new Object();
stu_details.Name = "Jayan";
stu_details.Id_no = 81;
stu_details.Rank = 3;
stu_details.attendance = 95.8;
console.log(stu_details.Name + " " + stu_details.Id_no + " " + stu_details.Rank + " " + stu_details.attendance);

//this keyword for object constructor
function stu(id, name, rank) {
    this.id = id;
    this.name = name;
    this.rank = rank;
}
a = new stu(111, 'ALAJ', 3);
console.log(a.id + " " + a.name + " " + a.rank);

//Spread operator

const myVehicle = { brand: 'Ford', model: 'Mustang', color: 'red' };

const updateMyVehicle = { type: 'car', year: 2021, color: 'yellow' };

let ar = ['ashok', 'jayan', 'alaj'];
let newar = { ...ar };
console.log(newar);

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle);
//document.write(myUpdatedVehicle);

let uniqueArray = ['a', 1, 'a', 2, '1', 1].filter(function (value, index, self) {
    return self.indexOf(value) === index;
});
console.log(uniqueArray);

let ar1 = [1, 2, 3, 4, 5];
let ar2 = [6, 7, 8, 9];
let result = [...ar1, ...ar2];
console.log(result);

//forEach
ar1.forEach(function (value) {
    let twoValue = value * 2;
    console.log("2 * value is: " + twoValue);
});

//Write a JavaScript function to check whether an input is an array or not.
function notanarray(nameweb) {
    //let nameweb = 'w3resource';
    //let num = [1, 2, 4, 0];
    //console.log(typeof(nameweb));
    /*if(Array.isArray(nameweb)){
        return true;
    } else {
        return false;
    } */
    if (Object.prototype.toString.call(nameweb) == "[object Array]") {
        return true;
    } else {
        return false;
    }
}
let nameweb = notanarray([1, 2, 3]);
//const result1= isArray();
console.log("Is given value is in Array? " + nameweb);

//Get first element from an array

function firstElement(n, n1) {
    if (n == null) {
        return null;
    }
    if (n1 < 0) {
        return [];
    } else if (n1 == null) {
        return n[0];
    }
    return n.slice(0, n1);
    //Using ternary operator
    //return n1<=0 ? [] : n.slice(0,n1);
}
console.log(firstElement([7, 9, 0, -2]));
console.log(firstElement([], 3));
console.log(firstElement([7, 9, 0, -2], 3));
console.log(firstElement([7, 9, 0, -2], 6));
console.log(firstElement([7, 9, 0, -2], -3));
console.log(firstElement());

//Get last element from an array

function lastElement(array, n) {
    if (array == null) {
        return null;
    }
    if (n < 0) {
        return [];
    } else if (n == null) {
        return array[0];
    }
    return array.slice(array.length - n);
    //Using ternary operator
    //return n<=0 ? [] : array.slice(array.length-n);
}
lastResult = lastElement([1, 2, 3, 4, 5], 3);
console.log(lastResult);

//Class

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    //personDetails(nameoftrv, age, country) {
        personDetails() {
        console.log(`Traveller details: ${this.name} ${this.age} ${this.country}.`);
        //return `Traveller details: ${nameoftrv} ${age} ${country}.`
    }

}
needresult1 = new Person('Jayan', 25, 'Canada');
needresult1.personDetails();
//needresult2.personDetails('Ashok', 29, 'Canada');
//console.log(needresult1.personDetails('Jayan', 25, 'Canada'));
//console.log(needresult1.personDetails('Ashok', 29, 'Canada'));

class Pakage extends Person {
    constructor(name, pakage) {
        super(name);
        this.pakage = pakage;
    }
    personDetails() {
        console.log('Pack added for ' + this.name);
    }
} tourDetails = new Pakage('Kia');
tourDetails.personDetails();
//tourDetails.personDetails();

//Inheritance
class Employee{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    employeeDetails(){
        console.log(`Employee name : ${this.name} , Employee Id : ${this.id}`);
    }
}
document1 = new Employee('Ashok', 50);
document1.employeeDetails();
class NewEmployee extends Employee{
    constructor(name, id, team){
        super(name, id);
        this.team = team;
    }
    employeeDetails(){
        console.log(`Employee name : ${this.name} , Employee Id : ${this.id} , Employee team : ${this.team}`);
        super.employeeDetails();
    }
}
document2 = new NewEmployee('Jayan', 75, 'White');
document2.employeeDetails();





