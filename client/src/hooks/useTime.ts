export const getTime = (totalSeconds: number) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 50;

  const padTo2Digits = (num: number) => {
    return num.toString().padStart(2, '0');
  }
  
  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
}