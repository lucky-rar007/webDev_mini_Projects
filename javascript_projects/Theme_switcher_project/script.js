const themes = [
  {
    name: "red",
    message: "Red theme selected!"
  },
  {
    name: "dark",
    message: "Dark theme selected!"
  }
];

const button = document.getElementById("theme-switcher-button");
const dropdown = document.getElementById("theme-dropdown");
const status = document.getElementById("status");

button.addEventListener("click", () => {
  const isHidden = dropdown.hidden;

  dropdown.hidden = !isHidden;
  button.setAttribute("aria-expanded", String(isHidden));
});

document.querySelectorAll("#theme-dropdown li").forEach((item) => {
  item.addEventListener("click", () => {
    const themeName = item.id.replace("theme-", "");

    document.body.className = `theme-${themeName}`;

    const selectedTheme = themes.find(
      (theme) => theme.name === themeName
    );

    status.textContent = selectedTheme.message;

    dropdown.hidden = true;
    button.setAttribute("aria-expanded", "false");
  });
});