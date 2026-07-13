const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");

const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");


function getFlags() {
    let flags = "";

    if (caseInsensitiveFlag.checked) {
        flags += "i";
    }

    if (globalFlag.checked) {
        flags += "g";
    }

    return flags;
}


testButton.addEventListener("click", () => {

    const regex = new RegExp(regexPattern.value, getFlags());

    const text = stringToTest.textContent;

    const matches = text.match(regex);


    if (matches) {

        testResult.textContent = matches.join(", ");

        stringToTest.innerHTML = text.replace(
            regex,
            match => `<span class="highlight">${match}</span>`
        );

    } else {

        testResult.textContent = "no match";

    }

});