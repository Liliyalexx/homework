
// alert("Hi there");
// console.log("Hello, World");

// let x = 10;
// let y = 5;

// {
// 	let z = x + y;
// 	console.log(z);
// }
// let z = "Hello";
// console.log(z);

// var t = "Hello World!";

// console.log(t);

// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
//   }
  
//   {
//     let x = 1;
//     {
//       let x = 2;  // different variable
//       console.log(x);  // 2
//     }
//     console.log(x);  // 1
//   }

//   let x = 10;

// {
// 	let y = 5;
// 	{
// 		let z = x + y;
// 		console.log(z);
// 	}
// }

// let x = 10;

// {
// 	let y = 5;
// 	{
// 		var z = x + y;
//         var example = " this is adn example";
// 	}
// 	console.log(example);
//     console.log(z);
// }
// console.log(z);

// if (x == 10) {
//   console.log(`x does = 10`);
//   } else {
//    console.log(`x does not equal 10`);
//    console.log(`x does not equal 10`);
//    console.log(`x does not equal 10`);
//    console.log(`x does not equal 10`);
//   }

//   if(x ==10){
// console.log(`This ran after the conditions`);
//   }

// let x = 150;

// if (x > 0 && x < 100) {
// 	console.log('Positive!');
// x++;

// }else if(x >20){
// 	console.log('Positive!');
//     x+=10

// x--;
// }else if (x > 40 && x < 100){
//     console.log(`X has a value of ${x}`);
// }else{
//     console.log(`X has no category here`);
// }

// if("Hello"){
//     console.log(`True statemtnt`);
        
//     } else{ 
//         console.log(`False stetement`);
//     }


// let z = "5" == 5;

// if(Infinity){

// }
// let x;
// if(x) console.log(`X has value`)
// else console.log(`X has no value`);

// let num =0;

// if(num > 0 ){
//     console.log(`${num} Num is positive`);
// }else if (num == 0){
//     console.log(`${num} is equal to 0`)
// }else{
//     console.log(`${num} Num is negative`);
// }

// let age = 17;
// if ( age <= 18 && age <21 ){
//     console.log(`Access granted for entance`);
//     if(age >=21){
//         console.log( ` you can buy alcohol`);
//     }
// }else if (age > 21){
//     console.log(`Access granted for beer`);
// }else{
// console.log(`Access Denied`);
// }



// // Nested
// if (true) {
// 	if (true) {
// 		// do this
// 	} else {
// 		// do this
// 	}
// } else {
// 	//do this
// }
// ////////////////////////////////////////////////////////////////////////////////
// if (x >= 10) {
// 	//do this
// } else if (x <= 10>) {
// 	//do this
// } else {
// 	//do this
// }

// let num = 100;

// if( num >= 0 && num >= 100){
//     console.log("positive")
// }
// else if ( num > 0 && num < 100){
//         console.log(`${num} is positive but less then 100`);
//     } else if ( num < 0 ){
//         console.log(`${num} is negative`);
// }

// let learner = 100;
//  if (learner >= 90){
//     console.log("A");
//  } else if( learner >=80){
//     console.log("B")
//  } else if (learner >=70){
//     console.log("C")
//  } else if (learner >= 55){
//     console.log("D")
//  } else{
//     console.log("F")
//  }

//  let fruit = "banana";
//  switch (fruit) {
//     case 'apple':
//       console.log("you fruit is apple")
//         break;
//     case 'orange':
//         console.log("you fruit is apple")
//         break;
//     default:
//         console.log("I'm not sure you gave me a fruit")
//         break;
//  }

// let x = 5;
// let y = 1;
// let operand = "**";
// switch (operand) {
//    case "+":
//        console.log(x + y);
//        break;
//    case "-":
//        console.log(x - y);
//        break;
//    case "*":
//        console.log(x * y);
//        break
//    case "/":
//        console.log(x / y);
//        break;
//    default:
//        console.log("Invalid Operand")
//        break;
// }


// let ageof = 12

// ageof >= 18 ? console.log(`Access Granted`): console.log(`Access denied`)

// let x1 = 5;
// let isTen = x1 == 10 ? true : false;
// console.log(isTen);

// let data  = null;
// data  ? console.log(`Display Data`): console.log(`Display loader/spinner `)

// let x2 = -1;

// if (x2 < 0) {
// 	console.log("Negative!");
// } else {
// 	throw "Error - I don't know what I'm doing.";
// }

// console.log("Does this log?");

// let x3 = 10;

// try {
// 	if (x3 < 0) {
// 		console.log("Negative!");
// 	} else {
// 		throw "Error - I don't know what I'm doing.";
// 	}
// } catch (error) {
// 	console.log(error);
// }

// console.log("Does this log?");

// let x4 = 10;

// try {
//     let isEven;
// 	if (x4 > 0) {
//    isEven = (x4 % 2 == 0) ? true : false;
// 	} else if (x4 <= 0) {
// 		throw "Error - Value of 0 or below.";
// 	}

// 	console.log(isEven);
// } catch (err) {
// 	console.log(err);
// } finally {
// 	console.log(x4);
// }

// try {
    
// } catch (error) {
//     console.error(err);
    
// }
// let x = 5;

// if (x > 0){
// 	console.log('Positive!');
// 	x++;
// } else {
// 	console.log('Negative.');
// 	x--;
// }

// let x = 11;
// let isEven;

// try {
//     if (x > 0) {
//         isEven = (x % 2 == 0) ? true : false;
//         debugger;
//     } else if (x <= 0) {
//         throw "Error - Value of 0 or below.";
//     }

//     console.log(isEven);
// } catch (err) {
//     console.log(err);
// } finally {
//     console.log(x);
// 
if (false) {

    console.log('True');
 
 } else {
 
    console.log('False');
 
 }