import { getDOM } from "./domHandler.mjs";
import getInitialNumbers from "./getInitialNumber.mjs";
import onClick from "./onClick.mjs";
import restrictInput from "./restrictInput.mjs";

function init() {
  let initialNumber = getInitialNumbers();
  restrictInput();
  const btn = getDOM("#btn");
  btn.addEventListener("click", (event) => {
    const isCorrect = onClick(event, initialNumber);
    isCorrect ? (initialNumber = getInitialNumbers()) : null;
  });
}

export default init;
