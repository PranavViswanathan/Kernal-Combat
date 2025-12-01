# index.html Documentation

## Overview
`index.html` is the entry point of the Kernal Combat application. It establishes the terminal interface metaphor and provides the main navigation menu to access different parts of the application.

## Structure

### Terminal Shell
The page is wrapped in a `.terminal-container` which persists across all pages to maintain the illusion of a single application window.
- **Header**: Contains the window title "Kernal Combat Terminal".
- **Footer**: Displays system status, current user, and live clock.

### Boot Sequence
- **`#bootSequence`**: A series of text lines that animate in to simulate a system startup.
- **Logic**: A simple `setTimeout` in the inline script hides this section after 2 seconds and reveals the Main Menu.

### Main Menu (`#mainMenu`)
Displays a grid of options:
1.  **Problem Archive** (`problems.html`): Browse all questions.
2.  **Solo Practice** (`solo-mode.html`): Practice individual problems.
3.  **Pair Battle Mode** (`pair-mode.html`): Competitive coding.
4.  **User Profile** (`profile.html`): View stats.

## Scripts
- **`app.js`**: Loaded to initialize global state.
- **Inline Script**:
    - Handles the boot sequence transition.
    - Updates the real-time clock in the footer.
    - Loads the current username from `localStorage`.
