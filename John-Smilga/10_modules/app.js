// named import
import { person } from "./utill/data.js";
// default import
import showPerson from "./utill/showPeople.js";
import getElement from "./utill/getElement.js";

const container = getElement("#container");
const button = getElement("#btn");

button.addEventListener("click", function () {
  container.innerHTML = showPerson(person);
});
