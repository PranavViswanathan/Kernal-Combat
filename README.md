# CodeBattle Terminal 🎮

A terminal-themed LeetCode-style coding platform with Pokemon-style battles! Built with vanilla HTML, CSS, and JavaScript.

## Features

✅ **Terminal-Themed UI** - Retro terminal aesthetics with green glow effects  
✅ **Dynamic Problem Loading** - Questions loaded from JSON files in folder structure  
✅ **Code Editor** - Professional code editing with CodeMirror (syntax highlighting & autocomplete)  
✅ **Solo Practice Mode** - Solve problems individually with test cases  
✅ **Pair Battle Mode** - 2-player competitive coding  
✅ **Pokemon-Style Battles** - Automated battles based on code quality metrics  
✅ **Performance Metrics** - Time/space complexity analysis, lines of code, and solve time  
✅ **User Profiles** - Track stats, achievements, and solution history  
✅ **Test Cases** - Each problem includes multiple test cases  
✅ **Hints System** - Built-in hints for each problem  

## 📁 Folder Structure

```
VsLeetcodeCodingWebsite/
├── index.html              # Landing page
├── problems.html           # Browse problems by topic
├── solve.html              # Solo problem solver
├── pair-mode.html          # Pair programming setup
├── battle.html             # Pokemon-style battle animation
├── profile.html            # User stats and achievements
├── styles.css              # Terminal-themed styling
├── app.js                  # Core application logic
├── problemLoader.js        # Dynamic problem loading system
└── problems/               # Problem directory
    ├── Arrays/
    │   ├── two-sum/
    │   │   └── problem.json
    │   ├── best-time-stock/
    │   │   └── problem.json
    │   └── contains-duplicate/
    │       └── problem.json
    ├── Strings/
    │   ├── valid-anagram/
    │   │   └── problem.json
    │   └── longest-substring/
    │       └── problem.json
    ├── Dynamic Programming/
    │   └── climbing-stairs/
    │       └── problem.json
    ├── Trees/
    │   └── max-depth-tree/
    │       └── problem.json
    └── [other topics]/
```

## 🚀 Getting Started

### Option 1: Simple Local Server

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then open http://localhost:8000 in your browser.

### Option 2: Direct File Access

Simply open `index.html` in your web browser. Note: Some browsers may restrict file:// protocol for loading JSON files, so a local server is recommended.

## 📝 Adding New Problems

Create a new problem by adding a folder and JSON file:

1. Create a folder structure: `problems/{Topic}/{problem-id}/`
2. Add a `problem.json` file with this format:

```json
{
  "id": "problem-id",
  "name": "Problem Name",
  "difficulty": "easy",
  "description": "Problem description goes here...",
  "testCases": [
    {
      "input": "input description",
      "output": "expected output",
      "explanation": "Optional explanation"
    }
  ],
  "hints": [
    "Hint 1",
    "Hint 2"
  ],
  "starterCode": "function solution() {\n    // Your code here\n}"
}
```

3. Update `problemLoader.js` - add the problem to the `PROBLEM_INDEX` object:

```javascript
const PROBLEM_INDEX = {
    'Arrays': ['two-sum', 'best-time-stock', 'contains-duplicate', 'your-new-problem'],
    // ...
};
```

## 🎮 How to Use

### Solo Mode
1. Click "Problem Archive" from the main menu
2. Select a topic folder to expand it
3. Click on a problem to start solving
4. Write your code in the editor (Ctrl/Cmd + Space for autocomplete)
5. Click "Run Tests" to see results
6. Click "Submit Solution" to save your work

### Pair Battle Mode
1. Click "Pair Battle Mode" from the main menu
2. Enter names for both players
3. Select a problem from the dropdown
4. Click "START BATTLE"
5. Both players code simultaneously in split-screen editors  
6. Submit solutions when ready
7. Watch the automated Pokemon-style battle!

### Battle Mechanics
- **Score** = Based on time complexity, space complexity, lines of code, and solve time
- **Attack Power** = Derived from score
- **Defense** = Based on space complexity (O(1) gives bonus)
- **HP** = 1000 for both players
- Winner determined by remaining HP

## 🎨 Code Editor Features

- **Syntax Highlighting** - JavaScript code highlighting via CodeMirror
- **Autocomplete** - Press Ctrl+Space or Cmd+Space
- **Auto-save** - Code automatically saved to localStorage
- **Bracket Matching** - Auto-close and highlight matching brackets
- **Line Numbers** - Easy code navigation
- **Starter Code** - Each problem includes a function template

## 💾 Data Storage

All data is stored in browser localStorage:
- User profile and stats
- Problem solutions and scores
- Battle history
- Code drafts (auto-saved)

## 🏆 Achievements

- **First Steps** - Solve your first problem
- **Battle Master** - Win your first battle
- **Speed Demon** - Solve 10 problems
- **Champion** - Win 10 battles

## 🛠 Technologies Used

- **HTML5** - Structure
- **CSS3** - Terminal-themed styling with animations
- **Vanilla JavaScript** - No frameworks, pure JS
- **CodeMirror 5** - Code editor with syntax highlighting
- **LocalStorage API** - Data persistence
- **Fetch API** - Dynamic problem loading

## 📊 Performance Metrics

The system analyzes your code for:
- **Time Complexity** - Estimated Big O notation
- **Space Complexity** - Memory usage analysis
- **Lines of Code** - Code conciseness
- **Solve Time** - How long you took

## 🎯 Future Enhancements

- Add more problems (currently ~7 sample problems)
- Backend integration for real user accounts
- Actual code execution and testing
- Leaderboards and rankings
- More language support (Python, Java, C++, etc.)
- Real-time multiplayer battles
- Problem difficulty rating system
- Solution submission and review

## 📄 License

This project is open source and available for educational purposes.

## 🤝 Contributing

To add new problems:
1. Follow the folder structure in `problems/`
2. Create proper `problem.json` files
3. Update the `PROBLEM_INDEX` in `problemLoader.js`

---

**Made with 💚 in terminal green!**
