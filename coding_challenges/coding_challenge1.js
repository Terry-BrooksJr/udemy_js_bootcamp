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