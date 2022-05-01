export default function iniciaMenuDropDown() {}

const dropDownMenus = document.querySelectorAll("[data-dropdown-sob]");
function outsideClickInternaMDD(element, callback) {
  const html = document.documentElement;
  const cliqueForaDropDown = "data-cliquefora";

  function handleCliqueNohtml(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(cliqueForaDropDown);
      html.removeEventListener("click", handleCliqueNohtml);
      callback();
    }
  }
  if (!element.hasAttribute(cliqueForaDropDown)) {
    html.addEventListener("click", handleCliqueNohtml);
    element.setAttribute(cliqueForaDropDown, "");
  }
}
function handleClick(event) {
  event.preventDefault();
  const dropdownMenuu = document.querySelector("[data-dropdown]");
  dropdownMenuu.classList.add("ativa");
  outsideClickInternaMDD(this, () => {
    dropdownMenuu.classList.remove("ativa");
  });
}

dropDownMenus.forEach((menu) => {
  menu.addEventListener("touchstart", handleClick);
  menu.addEventListener("click", handleClick);
});
