
# Dicee Game

This project is a simple Dice game where two players roll a dice, and the player with the higher roll wins. If both players roll the same number, it's a draw. The game is built using HTML, CSS, and JavaScript.

## Features

- Two players roll a dice.
- The player with the higher roll wins.
- If both players roll the same number, it's a draw.
- Refreshing the page rolls the dice again.

## Table of Contents

- [Getting Started](#getting-started)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Functionality](#functionality)
- [Credits](#credits)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need a web browser to run this project. No additional software or libraries are required.

### Installation

1. Clone the repository:
   \`\`\`sh
   git clone https://github.com/your-username/dicee-game.git
   \`\`\`
2. Navigate to the project directory:
   \`\`\`sh
   cd dicee-game
   \`\`\`
3. Open \`index.html\` in your web browser to start the game.

## Usage

1. **Refresh the Page**: To roll the dice, simply refresh the page.
2. **View Results**: The result of the roll will be displayed with the winner or if it's a draw.

## File Structure

\`\`\`
/project-root
├── /assets
│   ├── /css
│   │   └── styles.css
│   ├── /img
│   │   ├── dice1.png
│   │   ├── dice2.png
│   │   ├── dice3.png
│   │   ├── dice4.png
│   │   ├── dice5.png
│   │   └── dice6.png
│   └── /js
│       └── main.js
├── index.html
└── README.md
\`\`\`

## Functionality

### HTML

- **index.html**: The main HTML file that includes the structure of the page and links to the CSS and JavaScript files.

### CSS

- **styles.css**: Contains styles for the page layout, fonts, colors, and other visual aspects.

### JavaScript

- **main.js**: Manages the game logic, including rolling the dice, determining the winner, and updating the page with the results.

### Key Functions in \`main.js\`

- **\`headToHead()\`**: The main function that rolls the dice for both players, determines the winner, and updates the page with the results.
- **\`firstPlayerDice()\`**: Rolls the dice for the first player and returns the result.
- **\`secondPlayerDice()\`**: Rolls the dice for the second player and returns the result.
- **\`randomDiceRoll()\`**: Generates a random number between 1 and 6 to simulate a dice roll.

## Credits

Developed by: Ahmed Fathelbab. Feel free to use and modify the code as needed. Contributions are welcome!
