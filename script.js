const doorImage1 = document.querySelector('#door1');

const doorImage2 = document.querySelector('#door2');

const doorImage3 = document.querySelector('#door3');

const closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let numClosedDoor = 3;

const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

const startButton = document.querySelector('#start');

let currentlyPlaying = true;

let openDoor1;
let openDoor2;
let openDoor3;

let value;

let userScore = document.querySelector('#user-score');

let computerScore = document.querySelector('#computer-score');
// console.log(userScore.value)
const isBot = (door) => {
  if (door.src === botDoorPath) {
    return true;
  } else return false;
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else return true;
};

const updateUserScores = () => {
  let score = parseInt(userScore.value);
  userScore.value = score + 1;
}

const updateComputerScores = () => {
  let comScore = parseInt(computerScore.value);
  computerScore.value = comScore + 1;
}

const playDoor = (door) => {
  numClosedDoor--;
  if (numClosedDoor === 0) {
    gameOver('wins');
    updateUserScores();
  } else if (isBot(door)) {
    gameOver();
    updateComputerScores()
  }else {
    
  }
  // if (numClosedDoor > 0) {
  //   if (isBot(door)) {
  //     gameOver();
  //   } 
  //   else if (numClosedDoor === 0) {
  //     gameOver('win');
  //   }
  //   numClosedDoor--;
  // }
  console.log('Number of closed door(s)', numClosedDoor)
};

doorImage1.addEventListener('click', () => {
  if (!isClicked(doorImage1) && currentlyPlaying) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    // console.log(playDoor(doorImage1))
  }
  
})
doorImage2.addEventListener('click', () => {
  if (!isClicked(doorImage2)&& currentlyPlaying) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
  // console.log(isClicked(doorImage2));
})
doorImage3.addEventListener('click', () => {
  if (!isClicked(doorImage3) && currentlyPlaying) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
})

const startRound = () => {
  if (!currentlyPlaying) {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoor = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
  }
  randomChoreDoorGenerator(); 
  console.log('num closed', numClosedDoor)
}

startButton.addEventListener('click', () => {
  startRound()
})

const gameOver = (status) => {
  if (status === 'wins') {
    startButton.innerHTML = 'You win! Play again?'
  } else {
    startButton.innerHTML = 'GameOver! Play again?'
  }
  currentlyPlaying = false;
}


// console.log(userScore.target.value)

const randomChoreDoorGenerator = () => {
  const choreDoor = Math.floor(Math.random() * numClosedDoor);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
  console.log(choreDoor)
}



startRound()
// randomChoreDoorGenerator();