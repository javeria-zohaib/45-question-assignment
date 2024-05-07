// ques :1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let firstName:string="khadija";
console.log(`Hello ${firstName},would u like to learn some python today?`);

// ques:2 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”

let quote:string="“A person who never made a mistake never tried anything new.”";
let authorName:string="Albert Einstein";
console.log(`${authorName} once said, ${quote}`);

// ques:3 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famous_Person:string="Albert Einstein";

let message:string=`${famous_Person} once said,“A person who never made a mistake never tried anything new.”`;
console.log(message);
//ques 4&5: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// You should create four lines that look like this:
// console.log(5 + 3)
console.log(5 + 3);
console.log(18-10);
console.log(8*1);
console.log(80/10);

// QUES: 6 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName="zohaib";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
// for titlecase
let firstletter=personName .charAt(0).toUpperCase();
let restletters=personName.slice(1).toLowerCase();
let titlecase=firstletter + restletters;
console.log(titlecase);
//QUES:7 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

let personName1="      umer"
console.log(personName1);
console.log(personName1.trim());
let personName2="\n tahira";
console.log(personName2);
console.log(personName2.trim());
let personName3="\t rabia";
console.log(personName3);
console.log(personName3.trim());
//QUES:8 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let value:number=3;
let message1:string=`My favourite number is ${value}`
console.log(message1);
// QUES:9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// this will multiply two numbers and print it to console
console.log(23*12);
// operator we use in this code is airthematic operator

//QUES:10 Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
// accessing each element in the list, one at a time
let myfriends:string[]=["khadija","Ammara","Amber","shagufta"];
console.log(myfriends[0]);
console.log(myfriends[1]);
console.log(myfriends[2]);
console.log(myfriends[3]);
//QUES:11 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let myfriends1:string[]=["khadija","Ammara","Amber","shagufta"];
console.log(`Hello ${myfriends1[0]} how was your day?`);
console.log(`Hello ${myfriends1[1]} how was your day?`);
console.log(`Hello ${myfriends1[2]} how was your day?`);
console.log(`Hello ${myfriends1[3]} how was your day?`);
// QUES:12 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
 let transportationmodes:string[]=["sportsbike" ,"car","yacht","helicopter"];
 transportationmodes.forEach(vehicle=> console.log(`I would like to own a ${vehicle}`));
 
// QUES:13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestsName:string[]=["Ammara","Jawad","Khizar"];
    guestsName.forEach(people => console.log( `Asalamoalikum ${people} , let's catch up over a delicious dinner at our place!`));
// QUES:14 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.
let guestslist:string[]=["Ammara","Jawad","Khizar"];
let notAttending=guestslist[0];
console.log(notAttending,"won't be able to make it to dinner");
guestslist.splice(0,1,"shagufta");
guestslist.forEach(person => console.log(`Asalamoalikum ${person} , let's catch up over a delicious dinner at our place!`))
// QUES:15 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let listOfGuests:string[]=["shagufta","Jawad","Khizar"];
let unavailable=guestslist[0];
console.log(unavailable,"won't be able to make it to dinner");
listOfGuests.splice(0,1,"ammara");
console.log("GoodNews! We have found a bigger table");
// adding at the starting of array
listOfGuests.unshift("Atiq");
// adding at the end of array
listOfGuests.push("Zohaib");
// adding in the middle of array
let middleIndex:number=Math.floor(listOfGuests.length/2);
listOfGuests.splice(middleIndex, 0, "Ramsha");
listOfGuests.forEach(family => console.log(`Asalamoalikum ${family} , let's catch up over a delicious dinner at our place!`))
//  QUES:17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let listOfGuests2:string[]=["shagufta","Jawad","Khizar"];
let unavailable2=guestslist[0];
console.log(unavailable2,"won't be able to make it to dinner");
listOfGuests2.splice(0,1,"ammara");
console.log("GoodNews! We have found a bigger table");
// adding at the starting of array
listOfGuests2.unshift("Atiq");
// adding at the end of array
listOfGuests2.push("Zohaib");
// adding in the middle of array
let middleIndex2:number=Math.floor(listOfGuests.length/2);
listOfGuests2.splice(middleIndex2, 0, "Ramsha");
listOfGuests2.forEach(family => console.log(`Asalamoalikum ${family} , let's catch up over a delicious dinner at our place!`))
console.log(" Sorry!unfortunately,table reservation is cancelled by restaurant,now i can only invite two person");
while(listOfGuests2.length>2){
    let removeGuest=listOfGuests2.pop();
    console.log(`sorry${removeGuest} i can't invite you to dinner`)
}
// sending invitation to last two guests
console.log("invitation to the last two guests")
listOfGuests2.forEach(lasttwo => console.log(`luckily ${lasttwo} you are  still invited to dinner `));
// Removing last two guests from list
listOfGuests2.pop();
listOfGuests2.pop();
console.log("Emptylist:" ,listOfGuests2);
// QUES :17

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let placesToVisit:string[]=["Eifel tower","Statue of Liberty","Pyramids of Giza","Great Wall of China","Colosseum"];
//  Print your array in its original order.
console.log("original order:", placesToVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log(" alphabetical order:",[...placesToVisit].sort());
//  print and show that your array is still in its original order 
console.log("still in original order:",placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order:",[...placesToVisit].reverse());
// print and show that your array is still in its original order 
console.log("still in original order:",placesToVisit);

//  Reverse the order of your list. Print the array to show that its order has changed.
console.log(" original array reversed:",placesToVisit.reverse());

//  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(" back to original:",placesToVisit.reverse());
// Sort to change your array so it’s stored in  alphabetical order. Print the list to show that its order has changed.
console.log("sorted in alphabetical order:",placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(" original array reversed again:",placesToVisit.reverse());
// QUES:18 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

 let guestsName1:string[]=["Ammara","Jawad","Khizar"];
 let guestlistlength=guestsName1.length;
 console.log(`we have inivited total ${guestlistlength} guests`);
//  QUES:19 
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let programminglanguages:string[] =["typescript", "python" ,"javascript", "C++"];
console.log("list of prograaming languages:");
programminglanguages.forEach(language => console.log(language));
// ques20 hey think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface itcourse{
    courseName: string
    location:string;
     noOfStudents:number;
}
let itcourse={
    courseName:"typescript and javascript",
    location:"Governor house sindh",
    noOfStudents: "50000",

}
console.log(itcourse);
// QUES:21 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
 let alphabets:string[]=["A","B","c","D"];
 console.log(`error array:`,alphabets[10]);
 console.log(`corrected array:`,alphabets[2]);
// QUES:22 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let ten=10;
let five=5;
// test 1
 let test1=ten != 5; 
 console.log(test1,"I predict true");

// test 2
let test2=ten == 10; 
console.log(test2,"I predict true");
// test 3
let test3=five == 5; 
console.log(test3,"I predict true");
// test 4
let test4=ten > 5;
console.log(test4,"I predict true");
// test 5
let test5=five < ten; 
console.log(test5,"I predict true");
// test 6
let test6= five != 5;
 console.log(test6,"I predict false");
// test 7
let test7= ten != 10;
 console.log(test7,"I predict false");

 // test 8
let test8= five > 10;
console.log(test8,"I predict false");
// test 9
let test9= five == ten;
 console.log(test9,"I predict false");
 // test 10
let test10= ten < 5;
console.log(test10,"I predict false");
// QUES:24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let str1="Javeria";
let str2="rehman";
let num1=5;
let num2=10;
let Arr:number[]=[1,2,3,4,5];
console.log("Tests for equality and inequality with strings");
console.log(str1 === "Javeria");
console.log(str1 === str2);
console.log("Tests using the lower case function");
console.log (str1.toLowerCase() === "javeria");
console.log (str2.toLowerCase() === "Rehman");
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(1<2);
console.log(num1===10);
console.log(num2 >= 10);
console.log(num1 >= 15);
console.log (num1 >= num2);
console.log (num1 !== num2);
console.log("Tests using and and or operators");
console.log(num1 <10 && num2 == 10 );
console.log(num1 > 6 || num2 > 15 );
console .log ("\n Test whether an item is in a array");
console.log(Arr.includes(3));
console.log(Arr.includes(6));


console.log("\n Test whether an item is not in a array");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
// QUES:25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

let alien_color= "green";
if (alien_color === "green" ){
    console.log("congratulations you just earned 5 points");
};
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_Color= "red";
if (alien_Color === "green" ){
    console.log("congratulations you just earned 5 points");}
//  QUES:26 
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.

// • Write one version of this program that runs the if block and another that runs the else block.

let aliencolor= "green";
if (aliencolor === "green" ){
    console.log("congratulations you just earned 5 points");
}
else {
    console.log("congratulations you just earned 10 points");
}
// version 2
let alienColor= "red";
if (alienColor === "green" ){
    console.log("congratulations you just earned 5 points");
}
else {
    console.log("congratulations you just earned 10 points");
}
// QUES:27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

let aliencolor1= "yellow";
if (aliencolor1 === "green" ){
    console.log("congratulations you just earned 5 points");
}
else if (aliencolor1 === "yellow"){console.log("congratulations you just earned 10 points");}
else {
    console.log("congratulations you just earned 15 points");}

    // version 2
    let alien_Color1= "green";
if (alien_Color1 === "green" ){
    console.log("congratulations you just earned 5 points");
}
else if (alien_Color1 === "yellow"){console.log("congratulations you just earned 15 points");}
else {
    console.log("congratulations you just earned 15 points");}
    // version 3
    let alienColor1= "red";
if (alienColor1 === "green" ){
    console.log("congratulations you just earned 5 points");
}
else if (alienColor1 === "yellow"){console.log("congratulations you just earned 15 points");}
else {
    console.log("congratulations you just earned 15 points");}
// Ques:28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.

// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.

// • If the person is age 65 or older, print a message that the person is an elder.
 
let age=13;
if (age < 2) {console .log("The person is a baby.");}
else if ( age >=2 && age < 4){console.log("The person is a toddler.");}
else if ( age >=4 && age < 13){console.log("The person is a kid.");}
else if ( age >=13 && age < 20){console.log("The person is a teenager.");}
else if ( age >=20 && age < 65){console.log("The person is a adult.");}
else {console.log("The person is a elder.");}
// QUES:29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favourite_fruits:string[]=["apple", "banana","mango"];
if (favourite_fruits.includes("banana")){console.log("I really like banana!");}
if (favourite_fruits.includes("mango")){console.log("I really like mango!");}
if (favourite_fruits.includes("apple")){console.log("I really like apple!");}
if (favourite_fruits.includes("orange")){console.log("I donot like orange");}
if (favourite_fruits.includes("strawberries")){console.log("I  don't like strawberries!");}
// Ques:30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let userName:string[]=['Admin', 'khadija','Ammara','aiza','shagufta'];

// Ques:31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.


let user_Name:string[]=['Admin', 'khadija','Ammara','aiza','shagufta'];
user_Name=[];
 
if (user_Name.length === 0) {
    console.log(" We need to find some users!");
}
for( let i=0; i<user_Name.length;i++){
    if(user_Name[i]==='Admin') {console.log("Hello admin, would you like to see a status report?");}
    else{console.log(`Hello ${user_Name[i]}, thank you for logging in again`);}
};
// Ques:32 
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.

// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available. 

// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted

 let current_users:string[]=["humza","areeba","fahad","zain","saad"];
 let new_users:string[]=["khizar","ramsha","areeba","fahad","zain"];
  new_users.forEach(new_one_users => {
    let our_condition=current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
    if (our_condition) {console.log(`${new_one_users}  is already taken`);} 
    else{{console.log(`${new_one_users}  is  available`);} }

  });

// QUES:33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line

let numbers:number[]=[1,2,3,4,5,6,7,8,9];
for (let onenumber of numbers){
    let ordinalEnding:string;
    if (onenumber === 1){
        ordinalEnding="st";}
        else if (onenumber === 2){
            ordinalEnding="nd";}
            else if (onenumber === 3){ ordinalEnding="rd";}
            else {ordinalEnding="th";}
            console.log(`${onenumber}${ordinalEnding}`);
        }
// QUES:34 
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let favourite_pizza:string[]=["fajita","red shawarma","malai tikka"];
for (let onepizza of favourite_pizza){
    console.log(`I like ${onepizza} pizza `)
}
console.log("I really love pizza");
console.log("Pizza is not just a dish; it's a culinary masterpiece crafted with love and creativity ");
// Ques:35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animal:string[]=["Dog","Cat","rabbit"];
for(let petanimal of animal) {
    console.log(`A ${petanimal} would make a great pet`);
}
console.log("Any of these animals would make a great pet!");
console.log("Pets aren't just animals; they're family members who fill our lives with unconditional love and joy");

// QUES:36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size:string,text_message:string){
    
    console.log(`You have selected shirt in ${size} size, with message ${text_message} print on it`);}
    make_shirt("large","Create Your Own Sunshine");
make_shirt("medium","Make Today Amazing");
// QUES:37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeshirt (size:string= "large" ,message:string="i love typescript"){
    console.log(`creatinag a ${size} shirt with  ${message} print on it`);
}
makeshirt();
// medium shirt with default message
makeshirt("medium");
// with any size and different message
makeshirt("small","keep Calm and learn typescript");
// QUES:38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city:string,country:string="pakistan"){
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("lahore");
// with change country
describe_city("delhi","India");
// QUES:39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
function city_country(city:string,country:string){
    return `${city},${country}`;
}
console.log(city_country("karachi","pakistan"));
console.log(city_country("lahore","pakistan"));
console.log(city_country("berlin","germany"));
// QUES:41 Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians (magician:string[]){
    magician.forEach(name =>console.log(name));
}
let magician_name:string[]=["harrypotter","Harry Houdini","David Copperfield"];
show_magicians(magician_name);
// QUES:42 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


function showmagicians (magician:string[]){
    magician.forEach(name =>console.log(name));
}
function make_great (magician:string[]) {
    return magician.map (name => `The great ${name}`)
}
let magicianName:string[]=["harrypotter","Harry Houdini","David Copperfield"];
let greatMagician=make_great(magicianName);
showmagicians(greatMagician);
// QUES:43 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function showMagicians (magician:string[]){
    magician.forEach(name =>console.log(name));
}
function makeGreat (magician:string[]) {
    return magician.map (name => `The great ${name}`)
}
let magicianName1:string[]=["harrypotter","Harry Houdini","David Copperfield"];
// making copy of original array through slice function
let copy_magician_name=magicianName1.slice();
// modifying copied array and add the great with magician names
 let copy_great_magician=makeGreat(copy_magician_name);
//  show both arrays copied and original
// original
showMagicians(magicianName);
// copied
showMagicians(copy_great_magician);
// QUES:44 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function makeSandwich(...item:string[]){
    console.log("\n making  sandwich using following item: ")
    item.forEach(singleitem => console.log(singleitem));
    console.log ("now enjoy your sandwich");
}
makeSandwich("chicken", "cocumber","mayo");
makeSandwich("bread","nutella");
makeSandwich("cheedar cheese","chicken","egg","lettuce",'tomato');











    


 






 






