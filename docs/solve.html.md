# solve.html Documentation

## Overview
`solve.html` is the primary workspace for the application. It provides a full-featured coding environment where users can read problem descriptions, write code, run tests, and submit solutions.

## Dependencies
- **CodeMirror**: External library for the code editor component.
- **`app.js`**: Core logic and state.
- **`problemLoader.js`**: Fetches problem data.
- **`styles.css`**: UI styling.

## Key Features

### 1. Problem Loading
- **Mechanism**: Reads `currentTopic` and `currentProblem` from `localStorage` to determine which problem to load.
- **Function**: `loadProblem()`
    - Fetches data using `getProblem()`.
    - Updates the UI with the problem name, description, difficulty, and hints.
    - Renders test cases dynamically.

### 2. Code Editor
- **Library**: CodeMirror 5 (with Dracula theme).
- **Initialization**: `initializeCodeEditor()`
    - Loads saved draft code from `localStorage` (key: `code_{problemId}`) or falls back to `starterCode`.
    - Configures syntax highlighting (JavaScript), line numbers, and auto-closing brackets.
    - Sets up auto-saving on every change.

### 3. Test Execution
- **Function**: `runCode()`
    - Retrieves code from the editor.
    - **Simulation**: Currently simulates test execution (random pass/fail) for demonstration purposes.
    - **Analysis**: Calls `calculateComplexity()` from `app.js` to estimate Big O notation.
    - Updates the "Test Results" panel.

### 4. Submission
- **Function**: `submitSolution()`
    - Validates that code exists.
    - Calculates a final score based on time taken, lines of code, and complexity.
    - Saves the solution to `localStorage` (key: `solutions`).
    - Updates the user's "Problems Solved" count in `kernalcombat_user`.
    - Redirects back to the problem archive.

## UI Structure
- **Left Panel**: Problem description, difficulty badge, hints, and test cases.
- **Right Panel**: Code editor and action buttons (Run, Submit).
- **Bottom Panel**: Test results output.
- **Footer**: Real-time line count and clock.
