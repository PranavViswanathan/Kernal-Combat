# problemLoader.js Documentation

## Overview
`problemLoader.js` is responsible for dynamically loading coding problems from the file system. It allows the application to scale by loading problem data from individual JSON files rather than keeping everything in memory.

## Key Components

### Configuration
- **`PROBLEM_INDEX`**: A registry mapping topics to lists of problem IDs. This acts as the source of truth for which problems exist.

### Loading Logic
- **`loadAllProblems()`**: Iterates through the `PROBLEM_INDEX` and fetches the `problem.json` file for every problem.
    - Caches results in `PROBLEMS_CACHE`.
    - Uses `createPlaceholderProblem` if a file is missing to prevent crashes.
- **`loadProblemFile(topic, problemId)`**: Fetches a specific JSON file from the path `problems/{topic}/{problemId}/problem.json`.

### Data Access
- **`getProblem(topic, problemId)`**: Retrieves a specific problem. It ensures data is loaded before returning.
- **`getProblems()`**: Returns the entire cache of loaded problems.

### Fallbacks
- **`getFallbackProblems()`**: Returns a small set of hardcoded problems if the file system loading fails (e.g., due to CORS restrictions when running locally without a server).

## Usage
This script runs immediately upon loading. It dispatches a `problemsLoaded` event when data is ready, allowing other scripts to react when the problem set is available.
