/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.Your tasks:1.Print a nice output to the console, saying who has the higher BMI. The message iseither "Mark's BMI is higher than John's!"or "John's BMI is higher than Mark's!"2.Use a template literal to include the BMI values in the outputs. Example: "Mark'sBMI (28.3) is higher than John's (23.9)!"Hint:Use an if/elsestatement😉
*/


markHeight1 = 1.69;
markWeight1 = 78;
markHeight2 = 1.88;
markWeight2 = 95;
johnHeight1 = 1.95;
johnWeight1 = 92;
johnHeight2 = 1.76;
johnWeight2 = 85;

function CalculateBMI(height, weight){
    return (weight / height ** 2) / (height * height);
}

markBMI1 = CalculateBMI(markHeight1, markWeight1);
johnBMI1 = CalculateBMI(johnHeight1, johnWeight1);
markBMI2 = CalculateBMI(markHeight2, markWeight2);
johnBMI2 = CalculateBMI(johnHeight2, johnWeight2);

scenario1 = markBMI1 > johnBMI1;
scenario2 = markBMI2 > johnBMI2;

if (scenario1){
    console.log("Mark's BMI is higher than John's!");
    console.info(`Mark's BMI is ${markBMI1} and John's BMI is ${johnBMI1} - ${markBMI1-johnBMI1} points higher than John's`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.info(`Mark's BMI is ${markBMI1} and John's BMI is ${johnBMI1} - ${johnBMI1 - markBMI1} point higher than John's`);
}
console.log(scenario1);
console.log(scenario2);