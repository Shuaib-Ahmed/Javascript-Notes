function getElement(selector) {
  const element = document.querySelector(selector);
  if (element) {
    return element;
  } else {
    throw Error("You did not select correct element");
  }
}

export default getElement;
