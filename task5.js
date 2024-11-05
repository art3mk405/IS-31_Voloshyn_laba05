let isBold = false;
let isItalic = false;
let isUnderlined = false;
let upperCase = false;

const defaultButtonColor = "#f0f0f0"; // Колір кнопок за замовчуванням
const checkedButtonColor = "rgb(124, 254, 120)";

function updateFormattedText() {
    const inputText = document.getElementById('text').value;
    const formattedText = document.getElementById('formattedText');

    formattedText.style.fontWeight = isBold ? "bold" : "normal";
    formattedText.style.fontStyle = isItalic ? "italic" : "normal";
    formattedText.style.textDecoration = isUnderlined ? "underline" : "none";
    formattedText.style.textTransform = upperCase ? "uppercase" : "lowercase";
    formattedText.style.color = document.getElementById('color').value;

    formattedText.innerText = inputText;
}

function changeFontWeight() {
    isBold = !isBold;
    document.getElementById('bold').style.backgroundColor = isBold ? checkedButtonColor : defaultButtonColor;
    updateFormattedText();
}

function makeItalic() {
    isItalic = !isItalic;
    document.getElementById('italic').style.backgroundColor = isItalic ? checkedButtonColor : defaultButtonColor;
    updateFormattedText();
}

function underline() {
    isUnderlined = !isUnderlined;
    document.getElementById('underline').style.backgroundColor = isUnderlined ? checkedButtonColor : defaultButtonColor;
    updateFormattedText();
}

function changeColor() {
    updateFormattedText();
}

function changeShift() {
    upperCase = !upperCase;
    document.getElementById('shift').style.backgroundColor = upperCase ? checkedButtonColor : defaultButtonColor;
    updateFormattedText();
}
