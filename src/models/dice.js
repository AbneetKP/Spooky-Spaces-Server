export function getDiceRoll6() {
  const dice6 = [1, 2, 3, 4, 5, 6];
  const numDicesides = dice6.length;
  const randomIndex = Math.floor(Math.random() * numDicesides);
  return dice6[randomIndex];
}
