const navbarLogo = document.querySelector(".nav__logo");
const translateBtn = document.querySelector(".translate-btn");
const firstInput = document.querySelector(".area-1");
const secondInput = document.querySelector(".area-2");
const changeBtn = document.querySelector(".change-btn");

// varribles

const lotinAlphabet = /sh|ch|ya|[a-z]|'/gi;
const krillAlphabet = /[а-я]/gi;
const lotinArr = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "ch",
  "c",
  "v",
  "b",
  "n",
  "m",
  "sh",
  "'",
  "ya",
];
const krillArr = [
  "к",
  "w",
  "е",
  "р",
  "т",
  "й",
  "у",
  "и",
  "о",
  "п",
  "а",
  "с",
  "д",
  "ф",
  "г",
  "х",
  "ж",
  "к",
  "л",
  "з",
  "х",
  "ч",
  "к",
  "в",
  "б",
  "н",
  "м",
  "ш",
  "",
  "я",
];
let inputValue = "";
let isChanged = false;

// Validator
const validator = (value, replace) => {
  let res = firstInput.value.replace(
    !isChanged ? lotinAlphabet : krillAlphabet,
    (x) => {
      if (x.toLowerCase() === value) {
        return replace;
      }

      return x;
    }
  );

  return res;
};
// Translator
translateBtn.addEventListener("click", () => {
  inputValue = firstInput.value;
  (!isChanged ? lotinArr : krillArr).forEach((i, key) => {
    const res = validator(i, (!isChanged ? krillArr : lotinArr)[key]);
    firstInput.value = res;
    secondInput.value = res;
  });

  firstInput.value = inputValue;
});

changeBtn.addEventListener("click", () => {
  isChanged = !isChanged;
  if (isChanged) {
    navbarLogo.innerHTML = "KRILL-<span>LOTIN</span> TRANSLATOR";
  } else {
    navbarLogo.innerHTML = "LOTIN-<span>KRILL</span> TRANSLATOR";
  }
  firstInput.value = "";
  secondInput.value = "";
  navigator.vibrate([500]);
});

const capitalize = document.getElementById("capitalize");
const upperCase = document.getElementById("uppercase");
const lowerCase = document.getElementById("lowerCase");

function toUpperCase(text) {
  return text.toUpperCase();
}

function toLowerCase(text) {
  return text.toLowerCase();
}

function toCapitalize(text) {
  return text.replace(/(^|\s)\S/g, function (firstLetter) {
    return firstLetter.toUpperCase();
  });
}

const textarea = document.getElementById("myTextarea");

upperCase.addEventListener("click", () => {
  let text = textarea.value;
  let uppercaseText = toUpperCase(text);
  textarea.value = uppercaseText;
});

capitalize.addEventListener("click", () => {
  let text = textarea.value;
  let capitalizeText = toCapitalize(text);
  textarea.value = capitalizeText;
});

lowerCase.addEventListener("click", () => {
  let text = textarea.value;
  let lowercaseText = toLowerCase(text);
  textarea.value = lowercaseText;
});
