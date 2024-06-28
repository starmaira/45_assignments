// /////QUESTION 2: Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”//.
// let personName: string = "Eric";
// let message1: string = `Hello ${personName}, would you like to learn some Python today?`;
// console.log(message1);
// //////////////QUESTION 3 :Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
// let personName1: string = "Eric";
// //to upper case//
// console.log("lowercase:", personName1.toLowerCase());
// //to lower case//
// console.log("uppercase:", personName1.toUpperCase());
// //to title case//
// ////////////////ERIC////////////////////E///////+ ///Eric//////ric//(from index number 1 whole string is extracted)////
// console.log("titlecase methode 1:", personName1.toUpperCase().charAt(0) +  personName1.slice(1));           //E + ric//
// //////////////SECOND METHOD TO CONVERT STRING INTO TITLE CASE////////////
// let personName2: string = "eric";
// console.log("titlecase methode 2:", personName2.replace(/\bw/g,c => c.toUpperCase()));
// //////////////////////QUESTION 4 : Famous Quote://///////
// let message2 :string = "Steve Jobs once said, “The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.” "
// console.log(message2);
// ///////////////QUESTION 5 : Famous Quote 2:///////////////////////
// let famous_person :string = "Steve Jobs";
// let quote :string =  "“The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.” "
// let message3 :string = `${famous_person} once said that, ${quote} `
// console.log(message3);
// /////////////////QUESTION 6: Stripping Names: ////////////
// let name1 :string = "\n  Maira  \n";
// console.log("Name with whitespace:", name1);         //with whitespace \n //
// console.log("Name after stripping whitespace:", name1.trim());          //without whitespace ///
// ////////////other whitespace//////////////////////////////////////////////
// let name2 :string = "\t  Maira  \t";
// console.log(`with whitespace :  ${name2}`);             //with whitespace////
// console.log(`without whitespace :  ${name2.trim()}`);       //without whitespace//
// /////////////////QUESTION 7 and 8 : Number Eight///////
// //ADDITION//
// console.log(5+3);
// //SUBTRACTION//
// console.log(11-3);
// //MULTIPLICATION//
// console.log(4*2);
// //DIVISION//
// console.log(16/2);
// ///////QUESTION NUMBER 9 : Favorite Number////////
// let favoriteNumber :number = 5;
// console.log(`My favorite number is ${favoriteNumber}`);
// /////////QUESTION NUMBER 10 : Adding Comments:///
// //progrmm 1//
// let myName :string = "Maira";
// console.log(myName);
// /////////////////////////////////////////////////////////////
// // //programm 2//addition/
// // let a :number =12;
// // let b:number =8;
// // console.log(a+b);
// ////////QUESTION NUMBER 11 : Names in array//////
// let names :string[] = ["Maira", "Ayesha", "Fatima", "Aqsa", "Ayesha"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// ///////QUESTION NUMBER 12 : Greetings///////
// let names1 : string[] = ["Maira", "Ayesha", "Fatima", "Aqsa", "Ayesha"];
//  let message : string = "Hello how are you?";
// console.log( names1 [0] +" " + message);
// console.log( names1 [1] +" " + message);
// console.log( names1 [2] +" " + message);
// console.log( names1 [3] +" " + message);
// console.log( names1 [4] +" " + message);
// ////////////////QUESTION NUMBER 13 : Your Own Array:///
// let myTransport : string [] = ["car","van","bike","bus"];
// myTransport.map((items) => {console.log(`I used to go to university through ${items}`)});
// ///////////////QUESTION NUMBER 14: Guest List////////////
// let guest: string[] = ["Maira", "Ayesha", "Fatima", "Aqsa", "Ayesha"];
// guest.map((items) => {
//     console.log(`Dear ${items} You are inited to my party!!!!!!!`)
// });
// ///////////////////QUESTION NUMBER 15 :Changing Guest List:
// let guestList: string[] = ["Maira", "Ayesha", "Aqsa", "Shanza"];                  //guest list
// let cannotAttend :string[] = ["Aqsa"];
// //////////////////////////////////// DIFFICULT METHOD  /////////////////////////////////////
// let updatedList :string[] = guestList.filter((items) => !cannotAttend.includes(items) )
// let replacedGst :string[] = ["Laiba"];
// let newList :string[] = updatedList.concat(replacedGst)
// console.log(newList)
// newList.map((newList) => {
//     console.log(`Dear ${newList} You are invited to my party!!!!!!!`)
// })
// ////////////////////////////// EASY METHOD ///////////////////////////////////////////////////
// ////////////////////////////////////////////I.N//one word is deleting//"addition of laiba"
// ////let canNotAttend : string[] = guestList.splice(1, 1, "laiba");                 
// guestList.map((items) => 
//     {
//         console.log(`Dear ${items} You are invited to my party!!!!!!!`)
//     })
// /////////////////////// QUESTION 16 : MORE GUESTS  ///////////////////////////
// let guestList1 :string[] = ["Maira", "Ayesha", "Aqsa", "Shanza"];
// guestList1.map((items)=> {
//     console.log(`Dear ${items} guest what I have found a bigger dinner table!!!!!!!!`)
// })
// let newGuest: string[] = ["Hazel" , "Senora","Sania"]
// guestList1.unshift("Hazel");
// guestList1.splice(3,0,"Senora");
// guestList1.push("Sania");
// console.log(guestList1);
// guestList1.map((items)=>{
//     console.log(`Dear ${items} since now is a bigger table more friends and more fun are invited along with you to join!!!!!!!`)
// })
// //////////////////////////////////// QUESTION NUMBER 17 : Shrinking Guest List: //////////
// let guest00: string[ ] = ["Hazel" ,"Maira", "Ayesha", "Senora","Aqsa", "Shanza","Sania"];
// console.log(`original guest list was ${guest00}`);
// guest00.map((items) => {
//     console.log(`Dear ${items} sorry to inform you that due to unavoidable circumstances only two people can be invite`);
// });
// while(guest00.length > 2) {
//    let removedGst = guest.pop();
//    if(removedGst){
//     console.log(`Dear ${removedGst} appologies for cancellation`)
//    }
// };
// guest00.map((items) => {
//     console.log(`Dear ${items} you are still invited`)
// });
// guest00.pop()
// guest00.pop()
// console.log(`final list would be ${guest00} {}`);
// ////////////////////////////////    QUESTION NUMBER 18: Seeing the World: ///////////
// let famousPlaces : string[] = ["Eiffel Tower", "Great Wall of China", "Statue of Liberty" ,"Taj Mahal","Sydney Opera House"];
// console.log(`Original list of places: ${famousPlaces}`);                    //original///
// let sortedArr = famousPlaces.sort();                
// console.log(`Alphabetically sorted list of places: ${sortedArr}`);          ///alphabetical//original not changed///
// console.log(`Original list of places: ${famousPlaces}`);                 //still original//
// let reverseSortArr = famousPlaces.sort(function(a,b){
//     return b.localeCompare(a);                                 
// });
// console.log(`Reversely alphabetical list of places: ${reverseSortArr}`);      //reverse alphabetical order///original not changed/
// console.log(`Original list of places: ${famousPlaces}`);          // original//
// famousPlaces.reverse();
// console.log(`Reverse${famousPlaces}`);                              ///just reverse//
// console.log(`Original list of places: ${famousPlaces}`);          //original//
// famousPlaces.sort();                                                //alphabetical //original is changed////
// console.log(`Alphabetically sorted list of places: ${famousPlaces}`);
// famousPlaces.reverse();                                             //reverse alphabetical////original is changed////
// console.log(`Reversed list of places: ${famousPlaces}`);            
// // /////////////////////////////// QUESTION NUMBER 19:Dinner Guests:////
// console.log(`The number of people invited to dinner are ${guest00.length} {}`);
///////////QUESTION NUMBER 20: //////////////////////////////////////
// let countries :string[] = [
//     'USA',
//     'Canada',
//     'Brazil',
//     'Japan',
//     'Australia',
//     'Germany',
//     'South Africa',
//     'India',
//     'France',
//     'Mexico'];
// console.log(`original array ${countries}`);                         ////original///
// countries.push("Italy");                                           /////push//
// console.log(`push array ${countries}`);
// console.log(`original array ${countries}`);                         ///original///
// countries.splice(7,1,"Pakistan");                             ///splice//india to pakistan//
// console.log(`splice array ${countries}`);
// console.log(`original array ${countries}`);                         ///original//
// countries.shift()                                                       ///shift array//eliminate USA from start/// 
// console.log(`shift array ${countries}`)
// console.log(`original array ${countries}`);                         //original///
// countries.unshift("China");                                          //unshift array//add china to start///
// console.log(`unshift array ${countries}`);                             //unshift// add china in start///
// console.log(`unshift array ${countries}`);
// console.log(`original array ${countries}`);                         //original///
// countries.sort()                                                    ///sorted in alphabetical order//
// console.log(`sort array ${countries}`);
// console.log(`original array ${countries}`);                         //original///
// countries.slice().sort(function(a,b) {                                //opposite alphabetical without disturbing original using slice //
//     return b.localeCompare(a);
// })
// ////////////////////////////////////// QUESTION NUMBER 21//////////
// // Define a TypeScript interface for a Country
// interface Country {
//     name: string;
//     capital: string;
//     population: number;
//     language: string;
// }
// // Define an array of countries using the Country interface
// let countries00: Country[] = [
//     {
//         name: 'USA',
//         capital: 'Washington D.C.',
//         population: 331449281, // Example population in 2020
//         language: 'English'
//     },
//     {
//         name: 'India',
//         capital: 'New Delhi',
//         population: 1380004385, // Example population in 2020
//         language: 'Hindi, English'
//     },
//     {
//         name: 'Brazil',
//         capital: 'Brasília',
//         population: 213993437, // Example population in 2020
//         language: 'Portuguese'
//     },
//     {
//         name: 'France',
//         capital: 'Paris',
//         population: 65273511, // Example population in 2020
//         language: 'French'
//     }
// ];
// // Print information about each country
// countries00.forEach(country => {
//     console.log(`Country: ${country.name}`);
//     console.log(`Capital: ${country.capital}`);
//     console.log(`Population: ${country.population}`);
//     console.log(`Language: ${country.language}`);
//     console.log("------------");
// });
// //////////////////////QUESTION NUMBER 22//////////////
// // Define an array of fruits
// let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// // Attempt to access an index that doesn't exist (index 5)
// console.log("Accessing index 5:", fruits[5]); // This line will produce an error
// // Correct the error by accessing an existing index (index 4)
// console.log("Accessing index 4:", fruits[4]); // Correct index
// // Output the entire array
// console.log("Fruits array:", fruits);
// console.log(fruits.indexOf("kiwi"))
/////////////////////////////////////////QUESTION NUMBER 23: Conditional Tests: ///////////////////
// let car = 'subaru';
// console.log("is car == 'honda'? I predict False");
// console.log(car == 'honda');                                        ///False//
// console.log("Is car == 'civic'? I predict False")
// console.log(car == 'civic');                                        ///False///
// console.log("Is car == 'toyota'? I predict False");
// console.log(car=='toyota');                                         ///False///
// console.log("Is car == 'corola'? I predict False");
// console.log(car=='corola');                                         ///False///
// console.log("Is car =='Aulto'? I predict False");
// console.log(car =='Aulto');                                         ///False///
// console.log("Is car == 'Toshiba'? I predict False");
// console.log(car =='Toshiba')                                        ///False//
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru');                                          ///True///
// console.log("Is car != 'toyota'? I predict True");
// console.log(car != 'toyota');                                          ///True////
// console.log("Is car != 'Aulto;? I predict True");
// console.log(car != 'Aulto');                                           ///True///
// console.log("Is car != 'Toshiba'? I predict True");
// console.log(car !='Toshiba')                                        ///True//
// console.log("Is car != 'civic'? I predict True")
// console.log(car != 'civic');                                        ///True///
// console.log("Is car != 'corola'? I predict True");
// console.log(car !='corola');                                        ///True///
///////////////////////////// QUESTION NUMBER 24: More Conditional Tests://////////
////Equality and inequality//////////
// let city1 :string = "Karachi";
// let city2 :string = "Lahore";
// console.log("I predict False"); 
// console.log(city1 ==city2);                                  ///False//
// console.log("I predict True");                              
// console.log(city1 != city2);                                 ///True///
// ////////////lower case function/////
// let country1 :string = "PAKISTAN";
// let country2 :string = "pakistan";
// console.log("I predict True");                                
// console.log(country1.toLowerCase() == country2 );                 ///True//
// console.log("I predict True");
// console.log(country2.toUpperCase() == country1);                    ///True///
// console.log("I predict to False");
// console.log(country1 == country2);                                  ///False// 
// //////////greater than and less than///////
// let a :number = 10;
// let b:number = 15;
// console.log("I predict False");
// console.log(a > b);                                               ///False//
// console.log("I predict True");
// console.log(a < b);                                             ///True///
// console.log("I predict False");
// console.log(a >= b);                                               ///False//
// console.log("I predict True");
// console.log(a <= b);                                                ///True//                
// console.log("I predict True");
// console.log(a != b);                                                ///True///
// console.log("I predict False");
// console.log(a == b);                                               ///False///
// /////Tests using "and(&&)" and "or(||)" operators///
// let x :number = 20;
// let y:number = 55;
// let z :number = 36;
// console.log( x < z && y > z);                                   ///True , both//True///
// console.log(x > y && y < z );                                   ///False, both///False///
// console.log( x < z || y < z);                                   ///true||False///True///
// console.log(x < z && y < z );                                  ///true && False///  False
// console.log( x < z || y > z);                                   //True ||True/// True
/////////////////////Test whether an item is in a array/////
// let arr :string[] = ["apple", "banana", "orange", "grape", "kiwi"];
// console.log(arr.includes("grape"));                         ///True////
// console.log(arr.includes("mango"));                         ///False////
////////////////////////Test whether an item is not in a array//////
// let num :number[] = [1, 2, 3, 4, 5];
// console.log( !num.includes(1));                     ///False//
// console.log( !num.includes(6));                     ///True///
////////////// QUESTION NUMBER 25 :Alien Colors #1://///
// let alien_color1 : string =  "green";
// if(alien_color1 === "green"){
//     console.log("the player just earned 5 points.")
// }
// /////////////////////////////////////////////////////////
// let alien_color2 : string =  "green";
// if(alien_color2 === "White"){
//     console.log("Alien color is White")
// }
////////////////// QUESTION NUMBER : 26 Alien Colors #2///////////////
// let alien_color3 : string = "Green";
// /////version 1/////
// if ( alien_color3 === "Green"){
//     console.log("the player just earned 5 points for shooting the alien.")
// }else {
//     console.log("Alien color is not green")
// };
// /////version 2///////////////
// if ( alien_color3 === "Blue"){
//     console.log("the player just earned 5 points for shooting the alien.")
// }else {
//     console.log("the player just earned 10 points.")
// };
//////////////// QUESTION NUMBER 27: Alien Colors #3:///////////
// let alien_color4 :string = "green";
// /////version 1////
// if (alien_color4 === "green" ){
//     console.log("the player earned 5 points.")
// }else {
//     console.log("Alien is not green")
// };
// /////version 2/////////
// let alien_color5 :string = "Yellow";
// if (alien_color5 === "Yellow"){
//     console.log("the player earned 10 points.")
// } 
// else {
//     console.log("Alien is not yellow")
// };
// ////version3/////
// let alien_color6 :string = "Red";
// if  (alien_color6 === "Red") {
//     console.log("the player earned 15 points.")
// } else {
//     console.log("Alien color is not red")
// };
/////////////////// QUESTION NUMBER 28 :Stages of Life//////////
// let age :number = 3;
// if ( age < 2 ){
//     console.log("the person is a baby.");
// } 
// else if ( age <= 2 || age < 4){
//     console.log("the person is a toddler.");
// }
// else if ( age <= 4 || age < 13 ){
//     console.log(" the person is a kid.");
// }
// else if ( age <= 13 || age <20 ){
//     console.log("the person is a teenager.");
// }
// else if ( age <= 20 || age < 65){
//     console.log("the person is an elder.");
// }
////////////////////////////// QUESTION NUMBER 29 : Favorite Fruit:
// let favorite_fruits :string[] = ["Banana","Apple","Kiwi"];
// if ( favorite_fruits.includes("Banana")){
//     console.log("You really like bananas!!");
// }
// if ( favorite_fruits.includes("Apple")){
//     console.log("You really like apple!!");
// }
// if ( favorite_fruits.includes("Kiwi")){
//     console.log("You really like kiwi!!");
// }
// if ( favorite_fruits.includes("Pineapple")){
//     console.log("You do not  Like it that much?!!");
// }
// if ( favorite_fruits.includes("Strawberry")){
//     console.log("You do not Like it that much?!!");
// }
//////////////////////////QUESTION NUMBER 30 : Hello Admin: ///////////
// let userName : string[] =["admin","nisa","lisa","fiza","maya"];
// userName.forEach(oneUser =>{
//     if(oneUser.includes("admin")){
//         console.log("Hello admin, would you like to see a status report?")
//     }else {
//            console.log(`Hello ${oneUser}, thank you for logging in again.`)
//     }
// });
//////////////////////////QUESTION NUMBER 31:No Users: 
// let userName00 : string[] =["admin","nisa","lisa","fiza","maya"];
// //////version1///////////
// if(userName00.length === 0 ){                                           ///empty array finding method//
//     console.log("We need to find some users!")
// }
// else {                                                                //for each method to do a task with each element of this array///
//     userName00.forEach( oneUser00 =>{
//       if (oneUser00.includes("admin")){
//         console.log("Hello admin, would you like to see a status report?")
//       }else {
//         console.log(`Hello ${oneUser00}, thank you for logging in again.`)
//       }
//     })
// }
// //////////////version2//////
// userName00 = [];
// if(userName00.length === 0 ){                                           ///empty array finding method//
//     console.log("We need to find some users!")
// }
// else {                                                                //for each method to do a task with each element of this array///
//     userName00.forEach( oneUser00 =>{
//       if (oneUser00.includes("admin")){
//         console.log("Hello admin, would you like to see a status report?")
//       }else {
//         console.log(`Hello ${oneUser00}, thank you for logging in again.`)
//       }
//     })
// }
///////////////////////QUESTION NUMBER 32:Checking Usernames//////////
// let current_Users : string[] = ["nisa","lisa","fiza","maya","izie"];
// let new_Users : string[] = ["fiza","maya","meredith","frank","james"];
/////////////no uppercase condition/////////
// new_Users.forEach( oneUser1 => {
//     if (current_Users.includes(oneUser1)){
//         console.log(`The user name ${oneUser1} is unavailablethe person will need to enter a new username.`)
//     }
//     else {
//         console.log(`the username ${oneUser1} is available.`)
//     }
// } );
////////////////////////Uppercase is not accepted condition////////
// new_Users.forEach(oneNewUser00 => {
//     let condition = current_Users.some(curren_Old_user => curren_Old_user.toLowerCase () === oneNewUser00.toLowerCase())
//     if (condition){
//         console.log(`Sorry ${oneNewUser00} is taken`)
//     }else {
//         console.log(`This ${oneNewUser00} is available`)
//     }
// });
///////////////////////QUESTION NUMBER 33:Ordinal Numbers :position numbers 1st, 2nd,3rd etc////
// let numbers = [ 1,2,3,4,5,6,7,8,9]              //numbers are getting stored in oneanumber/////
// for( let oneNumber of numbers){
//     let ordinaEnding :string ;
//     if (oneNumber === 1){
//         ordinaEnding ="st"
//     }else if (oneNumber === 2){
//         ordinaEnding = "nd"
//     }else if (oneNumber === 3){
//         ordinaEnding ="rd"
//     }else {
//         ordinaEnding ="th"
//     }
//     console.log(`${oneNumber}${ordinaEnding}`);
// };
//////////////////QUESTION NUMBER 34: Pizzas:
// let pizza : string[] = ["peperoni" , "arabian","tikka"];
// ////////version 1 /////////
// for (let pizza1 of pizza){
//     console.log(`I like ${pizza1} pizza.`);
// }
// ////////version 2//////////
// console.log("Pizza is love");
///////////////////////// QUESTION NUMBER35 :Animals:////////////
// let petAnimals = ["dog","cat","rabbit"];
// ///////version1////////
// for (let onepet of petAnimals){
//     console.log(`A ${onepet} would make a great pet`);
// }
// /////////version 2////////////////
// console.log("Any of these animals would make a great pet!");
//////////////////////// QUESTION NUMBER 36;  T-Shirt://////////
// function make_shirt (size :string, message :string){
//     console.log(`You selected ${size} sized shirt with message ${message}`);
// }
// make_shirt("medium","hello world!!");
////////////////////// QUESTION NUMBER 37:Large Shirts: ///////////
//////version1///////////
// function make_shirt00 (size:string="large" , message :string = "I love TypeScript"){
//    console.log(`creating a ${size} sized shirt with the message ${message} on it`);
// }
// make_shirt00();
// /////version2//////////
// make_shirt00("medium");
// make_shirt00("small","I love javaScript");
//////////////////// QUESTION NUMBER 38:Cities//////////
// function describe_city (city:string, country:string ="Pakistan"){
//     console.log(`${city} is in ${country}`);
// }
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Tokyo","Japan");
//////////////// QUESTION NUMBER 39:City Names/////////
// function city_country (city :string ,country:string):string {
//      return `${city} ,${country}`
// }
// console.log(city_country("Karachi","Pakistan"));
// console.log(city_country("Tokyo","Japan"));
// console.log(city_country("Berlin","Germany"));
/////////////////// QUESTION NUMBER 40:Album://////////
// function make_album(artist_name: string, album_title: string, tracks?: number) {
//     // Define the album object with only mandatory properties initially
//     let album = {
//         artist: artist_name,
//         title: album_title
//     } as {
//         artist: string;
//         title: string;
//         tracks?: number; // We use type assertion to indicate tracks might be added later
//     };
//     if (tracks !== undefined) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// // Example usage
// console.log(make_album("Taylor Swift", "Midnights"));
// console.log(make_album("Adele", "30", 12));
/////////////////// QUESTION NUMBER 41: Magicians:////////////
// function show_magicians(megicians :string[]){
//     megicians.forEach(name => console.log(name));
// }
// let megicians_names = ["ali","osmama","Asif"];
// show_magicians(megicians_names);
/////////////////// QUESTION NUMBER 42: Magicians:////////////
// function show_magicians1(megicians :string[]){
//     megicians.forEach(name => console.log(name));
// }
// function make_great(megicians :string[]){
//    return megicians.map(name => `the great ${name}`);
// }
// let megicians_names1 = ["ali","osmama","Asif"];
// let great_magicians = make_great(megicians_names1);
// show_magicians1(great_magicians);
// /////////////////// QUESTION NUMBER 43 Unchanged Magicians: /////////////
// function show_magicians2(megicians :string[]){
//     megicians.forEach(name => console.log(name));
// }
// function make_great2(megicians :string[]){
//    return megicians.map(name => `the great ${name}`);
// }
// let megicians_names2 = ["ali","osmama","Asif"];
// let copy_megicians_names = megicians_names2.slice();
// let copy_great_magicians = make_great2(copy_megicians_names);
// console.log("\noriginal array \n")
// show_magicians2(megicians_names2);
// console.log("\ncopied array\n")
// show_magicians2(copy_great_magicians);
/////////////////// QUESTION NUMBER 44: Sandwiches///////////////////////
// function makeSandwitch (...items:string[]){
//     console.log("\n making a sandwitch with the following items:\n");
//     items.forEach(elements => console.log(elements));
//     console.log("\n now enjoy  your sandwitch!!!\n")
// }
// makeSandwitch("bread","spinach","ketchup","lettuce","cocumber","chilies","cheese","chicken");
// makeSandwitch("bread","spinach","lettuce","cocumber","chilies","cheese");
// makeSandwitch("bread","spinach","ketchup","lettuce","cocumber");
/////////////////// QUESTION NUMBER 45: Cars///////////////////////
function creat_Car(manufacturer, model, ...options) {
    // Define the car object with an index signature for dynamic properties
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Iterate over the options to add them as properties to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim(); // Add the dynamic property
    });
    return car;
}
// Example usage
let mycar = creat_Car("Toyota", 2020, "color:Silver", "features:Navigation");
console.log(mycar);
export {};
