export class Hello {
  constructor() {
    this.greeting = "Hello";
  }
  sayHello() {
    const newElement = document.createElement("p");
    newElement.textContent = this.greeting;
    newElement.classList.add("js-scss");
    return newElement;
  }
}
