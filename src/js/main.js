import { checkScript } from "./script";
import { Hello } from "./newScript";
import "../scss/main.scss";

console.log("IT WORKS");
document.querySelector(".js-scss").textContent = "js and scss works";
document.body.appendChild(checkScript());

const hello = new Hello();
document.body.appendChild(hello.sayHello());
