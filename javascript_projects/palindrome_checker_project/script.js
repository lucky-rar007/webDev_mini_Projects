let msg = document.querySelector("#text-input");
let button = document.querySelector("#check-btn");
let result = document.querySelector("#result");

function isPalindrome(str) {
    let cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversed = cleaned.split("").reverse().join("");

    return cleaned === reversed;
}

button.addEventListener("click", () => {

    if (msg.value.trim() === "") {
        alert("Please input a value.");
        result.setAttribute("hidden", true);
        return;
    }

    if (isPalindrome(msg.value)) {
        result.textContent = msg.value + " is a palindrome";
    } else {
        result.textContent = msg.value + " is not a palindrome";
    }

    result.removeAttribute("hidden");
});