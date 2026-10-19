const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {

  let text = markdownInput.value;

  // CODE BLOCKS (``` ... ```)
  text = text.replace(/```([\s\S]*?)```/g, function (match, code) {
    return "<pre><code>" + code.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim() + "</code></pre>";
  });

  // INLINE CODE (` ... `)
  text = text.replace(/`([^`]+)`/g, "<code>$1</code>");

  // HEADINGS
  text = text.replace(/^\s*###### (.*)$/gm, "<h6>$1</h6>");
  text = text.replace(/^\s*##### (.*)$/gm, "<h5>$1</h5>");
  text = text.replace(/^\s*#### (.*)$/gm, "<h4>$1</h4>");
  text = text.replace(/^\s*### (.*)$/gm, "<h3>$1</h3>");
  text = text.replace(/^\s*## (.*)$/gm, "<h2>$1</h2>");
  text = text.replace(/^\s*# (.*)$/gm, "<h1>$1</h1>");

  // HORIZONTAL RULE
  text = text.replace(/^\s*([-*_]){3,}\s*$/gm, "<hr>");

  // BLOCKQUOTE
  text = text.replace(/^\s*> (.*)$/gm, "<blockquote>$1</blockquote>");

  // IMAGES (must come before links)
  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

  // LINKS
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

  // BOLD (** OR __)
  text = text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // ITALIC (* OR _)
  text = text.replace(/\*(.*?)\*/g, "<em>$1</em>");
  text = text.replace(/_(.*?)_/g, "<em>$1</em>");

  // STRIKETHROUGH
  text = text.replace(/~~(.*?)~~/g, "<del>$1</del>");

  // UNORDERED LISTS
  text = text.replace(/^\s*[-*+] (.*)$/gm, "<li>$1</li>");
  text = text.replace(/((?:<li>.*<\/li>\s*)+)/g, "<ul>$1</ul>");

  // ORDERED LISTS
  text = text.replace(/^\s*\d+\. (.*)$/gm, "<oli>$1</oli>");
  text = text.replace(/((?:<oli>.*<\/oli>\s*)+)/g, function (match) {
    return "<ol>" + match.replace(/<\/?oli>/g, function (tag) {
      return tag === "<oli>" ? "<li>" : "</li>";
    }) + "</ol>";
  });

  // LINE BREAKS — double newline = paragraph break, single = <br>
  text = text.replace(/\n\n/g, "</p><p>");
  text = text.replace(/\n/g, "<br>");

  // Wrap in paragraph tags if not already wrapped in block elements
  if (!/^<(h[1-6]|ul|ol|pre|blockquote|hr|p)/.test(text.trim())) {
    text = "<p>" + text + "</p>";
  }

  return text;
}

function updateOutput() {
  const html = convertMarkdown();

  htmlOutput.textContent = html;
  preview.innerHTML = html;
}

markdownInput.addEventListener("input", updateOutput);

updateOutput();