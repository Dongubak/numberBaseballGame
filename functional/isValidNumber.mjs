function isValidNumber(initialNumber, inputNumber) {
  const ObjectNumber = convertNumber(inputNumber);
  const validation = [0, 0];

  initialNumber.forEach((initNumber, initIndex) => {
    if (ObjectNumber.includes(initNumber)) {
      const index = ObjectNumber.findIndex((objNumber, objIndex) => {
        return objNumber === initNumber;
      });
      initIndex === index ? (validation[0] += 1) : (validation[1] += 1);
    }
  });

  return validation[0] === 3 ? "correct" : validation;
}

function convertNumber(number) {
  return String(number)
    .split("")
    .map((e) => +e);
}

export default isValidNumber;
