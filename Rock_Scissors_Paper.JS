const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

reader.question(`Welcome to rock, paper, scissors. Please type 'r', 'p', or 's' to make a choice.`, (res) => {
  console.log(`you chose ${res}, let computer think`)
  setTimeout(() => {
    let rpsObj = {
      rr : 'Tie, try again',
      rs : 'You have won!' ,
      rp : 'You lost! Loser!',
      ss : 'Tie, try again',
      sr : 'You lost!',
      sp : 'You won!',
      pp : 'Tie, try again',
      ps : 'You lose!',
      pr : 'You won!',
    }

let rpsArr = ['r','p','s']
let computerChoice = Math.floor(Math.random() * 3)
if(computerChoice === 0) {
  console.log("Computer chose rock")
} else if(computerChoice === 1) {
  console.log('Computer chose paper')
} else if(computerChoice === 2) {
  console.log('computer chose scissors')
}


console.log(rpsObj[`${res}${rpsArr[computerChoice]}`])
},2000)
});
