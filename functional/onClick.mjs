import addResult from "./addResult.mjs";
import clearList from "./clearList.mjs";
import { getDOM } from "./domHandler.mjs";
import isValidInputValue from "./isValidInputValue.mjs";
import isValidNumber from "./isValidNumber.mjs";

function onClick(event, initialNumber) {
  event.preventDefault();
  const inputDOM = getDOM("#input_number");
  const inputValue = inputDOM.value;

  if (isValidInputValue(inputValue)) {
    const validatedValue = isValidNumber(initialNumber, inputValue);
    console.log(`initial number : ${initialNumber}`);
    console.log(
      `validated value : ${isValidNumber(initialNumber, inputValue)}`
    );
    validatedValue !== "correct"
      ? addResult(validatedValue, inputValue)
      : clearList();
    inputDOM.value = "";
    return validatedValue !== "correct" ? false : true;
  }
}

export default onClick;
