import 
function calculateBMI(mass, height) {
    return mass / height ** 2;
}
console.log('#############Test Data 1##########')
const markBMI1 = Math.floor(calculateBMI(78, 1.69));
const johnBMI1 = Math.floor(calculateBMI(92, 1.95));
console.log(markBMI1);
console.log(johnBMI1);
if (markBMI1 > johnBMI1) {
    console.log('Mark has the higher BMI')
} else {
    console.log('John has the higher BMI')

}
console.log('#############Test Data 2##########')
const markBMI2 = calculateBMI(95, 1.88);
const johnBMI2 = calculateBMI(85, 1.76);
console.log(markBMI2)
console.log(johnBMI2)
if (markBMI2 > johnBMI2) {
    console.log('Mark has the higher BMI')
} else {
    console.log('John has the higher BMI')

}