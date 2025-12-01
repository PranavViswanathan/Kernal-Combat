# app.js Documentation

## Overview
`app.js` contains the core application logic, state management, and utility functions for the Kernal Combat platform. It handles user state, performance metrics calculation, battle simulation logic, and data persistence.

## Key Components

### Global State
- **`APP_STATE`**: The central state object holding the current user's profile and loaded problems.
- **`PROBLEMS_DATA`**: A static collection of problem definitions (fallback data).

### Data Persistence
- **`loadUserData()`**: Retrieves the user profile from `localStorage` (key: `kernalcombat_user`).
- **`saveUserData()`**: Saves the current user profile to `localStorage`.

### Performance Metrics
- **`calculateComplexity(code)`**: Analyzes the provided code string to estimate Time and Space complexity.
    - Detects loops (`for`, `while`) for O(n) or O(n²).
    - Detects sorting for O(n log n).
    - Detects data structures (`Map`, `Set`, Arrays) for Space complexity.
- **`calculateScore(metrics, timeTaken)`**: Computes a score based on:
    - Execution time (penalty).
    - Lines of code (penalty).
    - Complexity (bonus for efficiency, penalty for inefficiency).

### Battle System
- **`simulateBattle(player1Data, player2Data)`**: Simulates a turn-based battle between two players.
    - Calculates HP, Attack, and Defense based on code scores and complexity.
    - Returns a battle log and the winner.

### Visuals
- **`generatePlayerSprite(playerName, isWinner)`**: Deterministically generates an emoji sprite based on the player's name hash.

## Usage
This file is included in all HTML pages to provide access to shared state and utility functions. It initializes the user data on `DOMContentLoaded`.
