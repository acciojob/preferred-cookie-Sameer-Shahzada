const fontSize = document.getElementById("fontsize");
const fontColor = document.getElementById("fontcolor");
const submitBtn = document.querySelector("input[type='submit']");

if (submitBtn) {
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    document.cookie = `fontsize=${fontSize.value}`;
    document.cookie = `fontcolor=${fontColor.value}`;

    document.body.style.fontSize = `${fontSize.value}px`;
    document.body.style.color = fontColor.value;
  });
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");

  for (let cookie of cookies) {
    const [key, value] = cookie.split("=");

    if (key === name) {
      return value;
    }
  }

  return null;
}

const savedSize = getCookie("fontsize");
const savedColor = getCookie("fontcolor");

if (savedSize) {
  document.body.style.fontSize = `${savedSize}px`;
}

if (savedColor) {
  document.body.style.color = savedColor;
}