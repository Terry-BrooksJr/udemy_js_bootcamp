/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1.Calculate the average score for each team, using the test data below
2.Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
3.Bonus
    1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
        Hint:Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4.Bonus
    2:Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
    
Test data:
§Data 1: 
- Dolphins score 96, 108 and 89. 
- Koalas score 88, 91 and 110
§Data Bonus1: 
- Dolphins score 97, 112 and 101. 
- Koalas score 109, 95 and 123§Data 
Bonus2: 
- Dolphins score 97, 112 and 101. 
- Koalas score 109, 95 and 106

GOOD LUCK 😀

*/
const dolphinsScoreArray1 = [96, 108, 89];
const koalasScoreArray1 = [88, 91, 110];
const dolphinsScoreArray2 = [97, 112, 101];
const koalasScoreArray2 = [109, 95, 123];
const dolphinsScoreArray3 = [97, 112, 101];
const koalasScoreArray3 = [109, 95, 106];


getAverage = (scoreArray) => {
        var sumToBeAveraged = 0;
        for (let value of scoreArray) {
            sumToBeAveraged += value;
        }
        var team1Average = sumToBeAveraged / scoreArray.length;
        return team1Average;
    };

determineWinner = (match) => {
    team1Score = match[0].score;
    team2Score = match[1].score;
    if (team1Score > team2Score){
    return `Drumroll..The Winner is ${match[0].team}`;
    }
    if (team2Score > team1Score ) {
        return `Drumroll..The Winner is ${match[1].team}`;
    } else {
        return 'Tie-Game!';
    }  
};
match1 = [{team: "Dolphins", score: getAverage(dolphinsScoreArray1) }, { team: "Koalas", score: getAverage(koalasScoreArray1)}];
match2 = [{ team: "Dolphins", score: getAverage(dolphinsScoreArray2) }, { team: "Koalas", score: getAverage(koalasScoreArray2)}];
match3 = [{ team: "Dolphins", score: getAverage(dolphinsScoreArray3) }, { team: "Koalas", score: getAverage(koalasScoreArray3)}];


console.log(determineWinner(match1));
console.log(determineWinner(match2))
console.log(determineWinner(match3))


 console.log(match1[0].score);
console.log(match1[1].score);
 console.log(match2[0].score);
console.log(match2[1].score);
 console.log(match3[0].score);
console.log(match3[1].score);
// if (match1[0].score > match1[1].score){
//     console.log(`The Winner is ${match1[0].team}`)
// };
// console.log(match1[0].score > match1[1].score);
// console.log(match1[0].score > match1[1].score);


