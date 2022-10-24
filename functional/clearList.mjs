import { getDOM } from "./domHandler.mjs";
import init from "./init.mjs";

function clearList() {
  const ul = getDOM("#validated_result");
  console.log(ul.childNodes);
  [...ul.childNodes].forEach((e) => {
    ul.removeChild(e);
  });
  alert("정답입니다");

  return "correct";
}

export default clearList;
