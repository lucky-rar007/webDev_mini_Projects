const input = document.querySelector("#markdown-input");

function convertMarkdown() {
    let string=input.value;
let converted = string
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/(\*\*|__)(.+?)\1/g, "<strong>$2</strong>")
    .replace(/(\*|_)(.+?)\1/g, "<em>$2</em>")
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">')
    .replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2">$1</a>')
    .replace(/^> (.+)$/gm, (match, group1) => {
    return `<blockquote>${group1.trim()}</blockquote>`;
});
    return converted;
}

input.addEventListener("input", () => {
    const html = convertMarkdown();

    document.querySelector("#html-output").textContent = html;
    document.querySelector("#preview").innerHTML = html;
});