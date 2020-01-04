export const checkScript = () => {
  const newp = document.createElement("p");
  newp.classList.add("js-scss");
  newp.textContent = "Imported script works";
  return newp;
};
