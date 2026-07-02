const footballTeam = {
  team: "Argentina",
  year: 2026,
  headCoach: "Coach",
  players: [
    {
      name: "Player 1",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Player 2",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Player 3",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Player 4",
      position: "goalkeeper",
      isCaptain: false
    }
  ]
};

document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

const playerSelect = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

function showCards(position) {
  playerCards.innerHTML = "";

  const filteredPlayers =
    position === "all"
      ? footballTeam.players
      : footballTeam.players.filter(
          player => player.position === position
        );

  filteredPlayers.forEach(player => {
    const card = document.createElement("div");
    card.classList.add("player-card");

    card.innerHTML = `
      <h2>${player.isCaptain ? "(Captain) " : ""}${player.name}</h2>
      <p>Position: ${player.position}</p>
    `;

    playerCards.appendChild(card);
  });
}

showCards("all");

playerSelect.addEventListener("change", (e) => {
  showCards(e.target.value);
});