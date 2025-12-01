# profile.html Documentation

## Overview
`profile.html` is the user's personal dashboard. It aggregates data from their coding history to display statistics, rankings, and unlocked achievements.

## Key Features

### 1. Statistics Dashboard
- **Data Source**: `kernalcombat_user` and `solutions` in `localStorage`.
- **Metrics**:
    - **Problems Solved**: Total count of unique solutions.
    - **Battles Won**: Total count of pair mode victories.
    - **Total Time**: Aggregated time spent on all submitted solutions.
    - **Win Rate**: Calculated from battles won vs total battles.

### 2. Ranking System
- **Function**: `calculateRank(problems, battles)`
- **Logic**: Assigns a title (Novice -> Legend) based on a weighted score of problems solved and battles won.

### 3. Recent Activity
- **Function**: `loadRecentSolutions(solutions)`
- **Display**: Shows the last 5 solutions submitted, including their time complexity, space complexity, and execution time.

### 4. Achievements
- **Function**: `updateAchievements(problems, battles)`
- **Badges**:
    - **First Steps**: 1 problem solved.
    - **Battle Master**: 1 battle won.
    - **Speed Demon**: 10 problems solved.
    - **Champion**: 10 battles won.
- **Visuals**: Changes status from "🔒 Locked" to "✅ Unlocked" (green).

### 5. Profile Management
- **Edit**: Allows changing username and avatar.
- **Reset**: Clears all local data (`kernalcombat_user`, `solutions`, `battleData`) to start fresh.

## UI Structure
- **Header**: Avatar, Username, and Rank.
- **Stats Grid**: 4 key metrics cards.
- **Recent Solutions**: List of past performance.
- **Achievements Grid**: 4 unlockable badges.
