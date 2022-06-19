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
const dolphins1 = [96, 108, 89];
const koalas1 = [88, 91, 110];
const dolphins2 = [97, 112, 101];
const koalas2 = [109, 95, 123];
const dolphins3 = [97, 112, 101];
const koalas3 = [109, 95, 106];


function determineWinner(team1Score, team2Score) {
    var t_score1 = team1Score;
    var t_score2 = team2Score.score;
    team1Average = (t_score1) => {
        var sumToBeAveraged = 0;
        for (let value of scoreArray) {
            sumToBeAveraged += value;
        }
        var avg = sumToBeAveraged / scoreArray.length;
        return avg;
    };

    team2Average = (t_score2) => {
        var sumToBeAveraged = 0;
        for (let value of scoreArray) {
            sumToBeAveraged += value;
        }
        var avg = sumToBeAveraged / scoreArray.length;
        return avg;
    };
    /*
    if (team1Average > team2Average) {
        console.log(`The Winner is Team 1 Wins`);
    } if (team1Average === team2Average) {
        console.log('It is a Tie-Game');
    } if (team2Average > team2Average){
        console.log(`The Winner is Team 2 Wins`);
    }
}
*/
determineWinner(dolphins1, koalas1);
determineWinner(dolphins2, koalas2);
// determineWinner(dolphins3, koalas3)