# styles.css Documentation

## Overview
`styles.css` provides the global styling for the Kernal Combat application. It implements a cohesive "Retro Terminal" aesthetic using CSS variables, custom animations, and a dark color palette with neon accents.

## Key Concepts

### Design System (`:root`)
- **Colors**:
    - Backgrounds: Deep blacks and dark greys (`--terminal-bg`, `--terminal-bg-alt`).
    - Text: Neon green (`--terminal-text`) as the primary color.
    - Accents: Blue (`--accent-secondary`), Orange (`--accent-warning`), Red (`--accent-danger`).
- **Typography**:
    - `Fira Code` for code and UI elements.
    - `VT323` for retro headers.
- **Effects**:
    - CSS variables for glow effects (`--glow-green`, etc.) used on buttons and active elements.

### Core Layout
- **`.terminal-container`**: The main wrapper that centers content and adds the window border and shadow.
- **`.terminal-header`**: The top bar mimicking a window title bar with close/minimize/maximize buttons.
- **`.terminal-body`**: The main content area.
- **`.terminal-footer`**: The status bar at the bottom.

### Animations
- **`terminalBoot`**: Scales up the window on load.
- **`typewriter`**: Simulates text being typed out character by character.
- **`blink`**: Creates a blinking cursor effect.
- **`pulse`**: Adds a breathing effect to active status indicators.
- **`scanline`**: (Implicit in design) The overall aesthetic mimics CRT monitors.

### Component Styles
- **Buttons**: Transparent backgrounds with colored borders and hover glow effects.
- **Menu Cards**: Grid layout for the main menu with hover interactions.
- **Code Editor**: Custom styling for the CodeMirror container.
- **Battle Arena**: Layouts for the VS screen, health bars, and sprites.
