import { checkScript } from "./script";
import "../scss/main.scss";
console.log("IT WORKS");
document.querySelector(".js-scss").textContent = "js and scss works";
document.body.appendChild(checkScript());
