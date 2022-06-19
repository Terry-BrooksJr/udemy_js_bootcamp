/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).Your tasks:1.Store Mark's and John's mass and height in variables2.Calculate both their BMIs using the formula (you can even implement both versions)3.Create a Booleanvariable 'markHigherBMI'containing information about whether Mark has a higher BMI than John.Test data:§Data1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.§Data2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.GOOD LUCK 😀
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

console.log(scenario1);
console.log(scenario2);