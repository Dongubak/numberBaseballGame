import { getDOM } from "./domHandler.mjs";

function restrictInput() {
  const inputDOM = getDOM("#input_number");
  inputDOM.addEventListener("keyup", () => {
    if (inputDOM.value.length > 3) {
      inputDOM.value = inputDOM.value.slice(0, 3);
    }
  });
}

export default restrictInput;
