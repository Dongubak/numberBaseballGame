import { createDOM, getDOM } from "./domHandler.mjs";

function addResult(validatedResult, inputValue) {
  const ul = getDOM("#validated_result");

  const $li = createDOM("li");
  const $p1 = createDOM("p");
  const $p2 = createDOM("p");
  const $p3 = createDOM("p");

  $li.classList.add("result_list");
  $p1.textContent = `input : ${inputValue}`;
  $p2.textContent = `strike : ${validatedResult[0]}`;
  $p3.textContent = `ball : ${validatedResult[1]}`;

  $p1.classList.add("pr");
  $p2.classList.add("pr");
  $p3.classList.add("pr");

  $li.appendChild($p1);
  $li.appendChild($p2);
  $li.appendChild($p3);
  ul.appendChild($li);
}

export default addResult;
