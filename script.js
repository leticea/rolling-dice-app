const dice = document.querySelector(".dice");
const rollBtn = document.querySelector(".roll");

const randomDice = () => {
  const random = Math.floor(Math.random() * 10);

  if (random >= 1 && random <= 6) {
    rollDice(random);

  } else {
    
  }
};