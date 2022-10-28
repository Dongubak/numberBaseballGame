import { getDOM } from "./domHandler.mjs";

function isValidInputValue(inputValue) {
  const convertedInputValue = String(inputValue);
  if (convertedInputValue.length === 3) {
    return true;
  } else {
    alert("숫자는 3자리를 입력해야 합니다");
    const inputDOM = getDOM("#input_number");
    inputDOM.value = "";
    return false;
  }
}

export default isValidInputValue;
