function getInitialNumbers() {
  const initialNumbers = [];
  while (initialNumbers.length !== 3) {
    const randomValue = Math.floor(Math.random() * 10);
    if (initialNumbers.includes(randomValue)) {
      continue;
    } else {
      initialNumbers.push(randomValue);
    }
  }
  return initialNumbers;
}

export default getInitialNumbers;
