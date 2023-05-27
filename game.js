// Define the player character
const player = {
  name: "Player",
  level: 1,
  health: 100,
};

// Define an NPC (Non-Player Character)
const npc = {
  name: "NPC",
  level: 1,
  health: 100,
  dialogue: [
    "Hello, adventurer!",
    "Watch out for monsters in the nearby forest!",
    "I can heal your wounds if you need assistance.",
  ],
  currentDialogueIndex: 0,
};

// Game logic functions
function attack(attacker, target) {
  const damage = Math.floor(Math.random() * 10) + 1;
  target.health -= damage;
  console.log(`${attacker.name} attacked ${target.name} for ${damage} damage.`);
  
  if (target.health <= 0) {
    console.log(`${target.name} has been defeated!`);
  }
}

function nextDialogue() {
  if (npc.currentDialogueIndex < npc.dialogue.length - 1) {
    npc.currentDialogueIndex++;
    updateNPCDialogue();
  }
}

// Update the player and NPC information on the page
function updateGameInfo() {
  document.getElementById("player-level").textContent = player.level;
  document.getElementById("player-health").textContent = player.health;
  document.getElementById("npc-level").textContent = npc.level;
  document.getElementById("npc-health").textContent = npc.health;
}

function updateNPCDialogue() {
  document.getElementById("npc-dialogue").textContent = npc.dialogue[npc.currentDialogueIndex];
}

// Example game interaction
attack(player, npc);
updateGameInfo();

// NPC dialogue interaction
document.getElementById("npc-dialogue").addEventListener("click", nextDialogue);
