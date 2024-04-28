"use strict";
// ques :1 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let firstName = "khadija";
console.log(`Hello ${firstName},would u like to learn some python today?`);
// ques:2 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
let quote = "“A person who never made a mistake never tried anything new.”";
let authorName = "Albert Einstein";
console.log(`${authorName} once said, ${quote}`);
// ques:3 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_Person = "Albert Einstein";
let message = `${famous_Person} once said,“A person who never made a mistake never tried anything new.”`;
console.log(message);
//ques 4&5: Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// console.log(5 + 3)
console.log(5 + 3);
console.log(18 - 10);
console.log(8 * 1);
console.log(80 / 10);
// QUES: 6 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let personName = "zohaib";
console.log(personName.toUpperCase());
console.log(personName.toLowerCase());
// for titlecase
let firstletter = personName.charAt(0).toUpperCase();
let restletters = personName.slice(1).toLowerCase();
let titlecase = firstletter + restletters;
console.log(titlecase);
//QUES:7 Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName1 = "      umer";
console.log(personName1);
console.log(personName1.trim());
let personName2 = "\n tahira";
console.log(personName2);
console.log(personName2.trim());
let personName3 = "\t rabia";
console.log(personName3);
console.log(personName3.trim());
//QUES:8 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let value = 3;
let message1 = `My favourite number is ${value}`;
console.log(message1);
// QUES:9 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// this will multiply two numbers and print it to console
console.log(23 * 12);
// operator we use in this code is airthematic operator
//QUES:10 Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
// accessing each element in the list, one at a time
let myfriends = ["khadija", "Ammara", "Amber", "shagufta"];
console.log(myfriends[0]);
console.log(myfriends[1]);
console.log(myfriends[2]);
console.log(myfriends[3]);
//QUES:11 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let myfriends1 = ["khadija", "Ammara", "Amber", "shagufta"];
console.log(`Hello ${myfriends1[0]} how was your day?`);
console.log(`Hello ${myfriends1[1]} how was your day?`);
console.log(`Hello ${myfriends1[2]} how was your day?`);
console.log(`Hello ${myfriends1[3]} how was your day?`);
// QUES:12 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let transportationmodes = ["sportsbike", "car", "yacht", "helicopter"];
transportationmodes.forEach(vehicle => console.log(`I would like to own a ${vehicle}`));
// QUES:13 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestsName = ["Ammara", "Jawad", "Khizar"];
guestsName.forEach(people => console.log(`Asalamoalikum ${people} , let's catch up over a delicious dinner at our place!`));
// QUES:14 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guestslist = ["Ammara", "Jawad", "Khizar"];
let notAttending = guestslist[0];
console.log(notAttending, "won't be able to make it to dinner");
guestslist.splice(0, 1, "shagufta");
guestslist.forEach(person => console.log(`Asalamoalikum ${person} , let's catch up over a delicious dinner at our place!`));
// QUES:15 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let listOfGuests = ["shagufta", "Jawad", "Khizar"];
let unavailable = guestslist[0];
console.log(unavailable, "won't be able to make it to dinner");
listOfGuests.splice(0, 1, "ammara");
console.log("GoodNews! We have found a bigger table");
// adding at the starting of array
listOfGuests.unshift("Atiq");
// adding at the end of array
listOfGuests.push("Zohaib");
// adding in the middle of array
let middleIndex = Math.floor(listOfGuests.length / 2);
listOfGuests.splice(middleIndex, 0, "Ramsha");
listOfGuests.forEach(family => console.log(`Asalamoalikum ${family} , let's catch up over a delicious dinner at our place!`));
//  QUES:17 Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let listOfGuests2 = ["shagufta", "Jawad", "Khizar"];
let unavailable2 = guestslist[0];
console.log(unavailable2, "won't be able to make it to dinner");
listOfGuests2.splice(0, 1, "ammara");
console.log("GoodNews! We have found a bigger table");
// adding at the starting of array
listOfGuests2.unshift("Atiq");
// adding at the end of array
listOfGuests2.push("Zohaib");
// adding in the middle of array
let middleIndex2 = Math.floor(listOfGuests.length / 2);
listOfGuests2.splice(middleIndex2, 0, "Ramsha");
listOfGuests2.forEach(family => console.log(`Asalamoalikum ${family} , let's catch up over a delicious dinner at our place!`));
console.log(" Sorry!unfortunately,table reservation is cancelled by restaurant,now i can only invite two person");
while (listOfGuests2.length > 2) {
    let removeGuest = listOfGuests2.pop();
    console.log(`sorry${removeGuest} i can't invite you to dinner`);
}
// sending invitation to last two guests
console.log("invitation to the last two guests");
listOfGuests2.forEach(lasttwo => console.log(`luckily ${lasttwo} you are  still invited to dinner `));
// Removing last two guests from list
listOfGuests2.pop();
listOfGuests2.pop();
console.log("Emptylist:", listOfGuests2);
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
let placesToVisit = ["Eifel tower", "Statue of Liberty", "Pyramids of Giza", "Great Wall of China", "Colosseum"];
//  Print your array in its original order.
console.log("original order:", placesToVisit);
// Print your array in alphabetical order without modifying the actual list.
console.log(" alphabetical order:", [...placesToVisit].sort());
//  print and show that your array is still in its original order 
console.log("still in original order:", placesToVisit);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("reverse order:", [...placesToVisit].reverse());
// print and show that your array is still in its original order 
console.log("still in original order:", placesToVisit);
//  Reverse the order of your list. Print the array to show that its order has changed.
console.log(" original array reversed:", placesToVisit.reverse());
//  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(" back to original:", placesToVisit.reverse());
// Sort to change your array so it’s stored in  alphabetical order. Print the list to show that its order has changed.
console.log("sorted in alphabetical order:", placesToVisit.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(" original array reversed again:", placesToVisit.reverse());
// QUES:18 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestsName1 = ["Ammara", "Jawad", "Khizar"];
let guestlistlength = guestsName1.length;
console.log(`we have inivited total ${guestlistlength} guests`);
//  QUES:19 
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let programminglanguages = ["typescript", "python", "javascript", "C++"];
console.log("list of prograaming languages:");
programminglanguages.forEach(language => console.log(language));
let itcourse = {
    courseName: "typescript and javascript",
    location: "Governor house sindh",
    noOfStudents: "50000",
};
console.log(itcourse);
// QUES:21 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let alphabets = ["A", "B", "c", "D"];
console.log(`error array:`, alphabets[10]);
console.log(`corrected array:`, alphabets[2]);
// QUES:22 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let ten = 10;
let five = 5;
// test 1
let test1 = ten != 5;
console.log(test1, "I predict true");
// test 2
let test2 = ten == 10;
console.log(test2, "I predict true");
// test 3
let test3 = five == 5;
console.log(test3, "I predict true");
// test 4
let test4 = ten > 5;
console.log(test4, "I predict true");
// test 5
let test5 = five < ten;
console.log(test5, "I predict true");
// test 6
let test6 = five != 5;
console.log(test6, "I predict false");
// test 7
let test7 = ten != 10;
console.log(test7, "I predict false");
// test 8
let test8 = five > 10;
console.log(test8, "I predict false");
// test 9
let test9 = five == ten;
console.log(test9, "I predict false");
// test 10
let test10 = ten < 5;
console.log(test10, "I predict false");
// QUES:24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let str1 = "Javeria";
let str2 = "rehman";
let num1 = 5;
let num2 = 10;
let Arr = [1, 2, 3, 4, 5];
console.log("Tests for equality and inequality with strings");
console.log(str1 === "Javeria");
console.log(str1 === str2);
console.log("Tests using the lower case function");
console.log(str1.toLowerCase() === "javeria");
console.log(str2.toLowerCase() === "Rehman");
console.log("Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to");
console.log(1 < 2);
console.log(num1 === 10);
console.log(num2 >= 10);
console.log(num1 >= 15);
console.log(num1 >= num2);
console.log(num1 !== num2);
console.log("Tests using and and or operators");
console.log(num1 < 10 && num2 == 10);
console.log(num1 > 6 || num2 > 15);
console.log("\n Test whether an item is in a array");
console.log(Arr.includes(3));
console.log(Arr.includes(6));
console.log("\n Test whether an item is not in a array");
console.log(!Arr.includes(6));
console.log(!Arr.includes(2));
// QUES:25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
let alien_color = "green";
if (alien_color === "green") {
    console.log("congratulations you just earned 5 points");
}
;
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
let alien_Color = "red";
if (alien_Color === "green") {
    console.log("congratulations you just earned 5 points");
}
//  QUES:26 
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
let aliencolor = "green";
if (aliencolor === "green") {
    console.log("congratulations you just earned 5 points");
}
else {
    console.log("congratulations you just earned 10 points");
}
// version 2
let alienColor = "red";
if (alienColor === "green") {
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
let aliencolor1 = "yellow";
if (aliencolor1 === "green") {
    console.log("congratulations you just earned 5 points");
}
else if (aliencolor1 === "yellow") {
    console.log("congratulations you just earned 10 points");
}
else {
    console.log("congratulations you just earned 15 points");
}
// version 2
let alien_Color1 = "green";
if (alien_Color1 === "green") {
    console.log("congratulations you just earned 5 points");
}
else if (alien_Color1 === "yellow") {
    console.log("congratulations you just earned 15 points");
}
else {
    console.log("congratulations you just earned 15 points");
}
// version 3
let alienColor1 = "red";
if (alienColor1 === "green") {
    console.log("congratulations you just earned 5 points");
}
else if (alienColor1 === "yellow") {
    console.log("congratulations you just earned 15 points");
}
else {
    console.log("congratulations you just earned 15 points");
}
