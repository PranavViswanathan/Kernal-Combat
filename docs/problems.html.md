# problems.html Documentation

## Overview
`problems.html` serves as the "Problem Archive" or library view. It presents a file-system-like interface for browsing coding challenges organized by topic.

## Key Features

### Dynamic Content Rendering
- **Function**: `renderProblems()`
    - Calls `getProblems()` from `problemLoader.js` to retrieve the full catalog.
    - Iterates through topics to create "folder" elements.
    - Iterates through problems within each topic to create "file" elements.

### Folder Interaction
- **UI Pattern**: Accordion-style folders.
- **Behavior**: Clicking a folder header toggles the visibility of the problem list inside it (`.expanded` class).
- **Visuals**: Updates the folder icon from 📁 to 📂 when opened.

### Navigation
- **Function**: `openProblem(topic, problemId)`
    - Triggered when a user clicks a problem item.
    - **State**: Saves the selected `topic` and `problemId` to `localStorage`.
    - **Redirect**: Navigates the user to `solve.html`.

## UI Structure
- **Header**: Standard terminal header with navigation back to Home or Profile.
- **Body**:
    - **Info Panel**: Shows a simulated `ls -la` command and the total count of loaded problems.
    - **Folder Tree**: The main container for the generated list.
