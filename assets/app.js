const APP_STATE = {
    currentUser: {
        username: 'Guest',
        avatar: '👨‍💻',
        problemsSolved: 0,
        battlesWon: 0,
        rank: 'Novice'
    },
    problems: {}
};

const STATIC_PROBLEMS = {
    'Arrays': [
        {
            id: 'two-sum',
            name: 'Two Sum',
            difficulty: 'easy',
            description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
            testCases: [
                { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
                { input: 'nums = [3,2,4], target = 6', output: '[1,2]' },
                { input: 'nums = [3,3], target = 6', output: '[0,1]' }
            ],
            solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`
        },
        {
            id: 'best-time-stock',
            name: 'Best Time to Buy and Sell Stock',
            difficulty: 'easy',
            description: 'You are given an array prices where prices[i] is the price of a given stock on the ith day. Maximize your profit.',
            testCases: [
                { input: 'prices = [7,1,5,3,6,4]', output: '5' },
                { input: 'prices = [7,6,4,3,1]', output: '0' }
            ]
        },
        {
            id: 'contains-duplicate',
            name: 'Contains Duplicate',
            difficulty: 'easy',
            description: 'Given an integer array nums, return true if any value appears at least twice.',
            testCases: [
                { input: 'nums = [1,2,3,1]', output: 'true' },
                { input: 'nums = [1,2,3,4]', output: 'false' }
            ]
        }
    ],
    'Strings': [
        {
            id: 'valid-anagram',
            name: 'Valid Anagram',
            difficulty: 'easy',
            description: 'Given two strings s and t, return true if t is an anagram of s.',
            testCases: [
                { input: 's = "anagram", t = "nagaram"', output: 'true' },
                { input: 's = "rat", t = "car"', output: 'false' }
            ]
        },
        {
            id: 'longest-substring',
            name: 'Longest Substring Without Repeating',
            difficulty: 'medium',
            description: 'Find the length of the longest substring without repeating characters.',
            testCases: [
                { input: 's = "abcabcbb"', output: '3' },
                { input: 's = "bbbbb"', output: '1' }
            ]
        }
    ],
    'Linked Lists': [
        {
            id: 'reverse-linked-list',
            name: 'Reverse Linked List',
            difficulty: 'easy',
            description: 'Reverse a singly linked list.',
            testCases: [
                { input: 'head = [1,2,3,4,5]', output: '[5,4,3,2,1]' },
                { input: 'head = [1,2]', output: '[2,1]' }
            ]
        },
        {
            id: 'merge-two-lists',
            name: 'Merge Two Sorted Lists',
            difficulty: 'easy',
            description: 'Merge two sorted linked lists and return it as a sorted list.',
            testCases: [
                { input: 'l1 = [1,2,4], l2 = [1,3,4]', output: '[1,1,2,3,4,4]' }
            ]
        }
    ],
    'Trees': [
        {
            id: 'max-depth-tree',
            name: 'Maximum Depth of Binary Tree',
            difficulty: 'easy',
            description: 'Find the maximum depth of a binary tree.',
            testCases: [
                { input: 'root = [3,9,20,null,null,15,7]', output: '3' }
            ]
        },
        {
            id: 'valid-bst',
            name: 'Validate Binary Search Tree',
            difficulty: 'medium',
            description: 'Determine if a binary tree is a valid BST.',
            testCases: [
                { input: 'root = [2,1,3]', output: 'true' },
                { input: 'root = [5,1,4,null,null,3,6]', output: 'false' }
            ]
        }
    ],
    'Dynamic Programming': [
        {
            id: 'climbing-stairs',
            name: 'Climbing Stairs',
            difficulty: 'easy',
            description: 'You are climbing a staircase. It takes n steps to reach the top. How many distinct ways can you climb?',
            testCases: [
                { input: 'n = 2', output: '2' },
                { input: 'n = 3', output: '3' }
            ]
        },
        {
            id: 'house-robber',
            name: 'House Robber',
            difficulty: 'medium',
            description: 'Maximize the amount of money you can rob without robbing adjacent houses.',
            testCases: [
                { input: 'nums = [1,2,3,1]', output: '4' },
                { input: 'nums = [2,7,9,3,1]', output: '12' }
            ]
        }
    ],
    'Graphs': [
        {
            id: 'number-of-islands',
            name: 'Number of Islands',
            difficulty: 'medium',
            description: 'Count the number of islands in a 2D grid.',
            testCases: [
                { input: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', output: '2' }
            ]
        }
    ],
    'Binary Search': [
        {
            id: 'binary-search',
            name: 'Binary Search',
            difficulty: 'easy',
            description: 'Implement binary search on a sorted array.',
            testCases: [
                { input: 'nums = [-1,0,3,5,9,12], target = 9', output: '4' },
                { input: 'nums = [-1,0,3,5,9,12], target = 2', output: '-1' }
            ]
        }
    ],
    'Backtracking': [
        {
            id: 'subsets',
            name: 'Subsets',
            difficulty: 'medium',
            description: 'Generate all possible subsets of a set.',
            testCases: [
                { input: 'nums = [1,2,3]', output: '[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]' }
            ]
        }
    ]
};

function loadUserData() {
    const savedUser = localStorage.getItem('kernalcombat_user');
    if (savedUser) {
        APP_STATE.currentUser = JSON.parse(savedUser);
    }
}

function saveUserData() {
    localStorage.setItem('kernalcombat_user', JSON.stringify(APP_STATE.currentUser));
}

function calculateComplexity(code) {
    const lines = code.split('\n').filter(line => line.trim() !== '');
    const loops = (code.match(/for|while/g) || []).length;
    const nested = code.includes('for') && code.includes('while');
    
    let timeComplexity = 'O(n)';
    let spaceComplexity = 'O(1)';
    
    if (nested || loops > 1) {
        timeComplexity = 'O(n²)';
    } else if (code.includes('sort')) {
        timeComplexity = 'O(n log n)';
    } else if (!loops) {
        timeComplexity = 'O(1)';
    }
    
    if (code.includes('new Map') || code.includes('new Set') || code.includes('[')) {
        spaceComplexity = 'O(n)';
    }
    
    return { timeComplexity, spaceComplexity, lines: lines.length };
}

function calculateScore(metrics, timeTaken, passRate = 1.0) {
    let score = 1000;
    
    // Base score reduction for time
    score -= Math.min(timeTaken / 1000, 500);
    
    // Penalty for long code
    score -= metrics.lines * 2;
    
    // Bonus for time complexity
    if (metrics.timeComplexity === 'O(1)') score += 200;
    else if (metrics.timeComplexity === 'O(n)') score += 100;
    else if (metrics.timeComplexity === 'O(n log n)') score += 50;
    else if (metrics.timeComplexity === 'O(n²)') score -= 100;
    
    // Bonus for space complexity
    if (metrics.spaceComplexity === 'O(1)') score += 100;
    else if (metrics.spaceComplexity === 'O(n)') score += 50;
    
    // CRITICAL: Test case pass rate multiplier
    score = score * passRate;
    
    // If no tests passed, severe penalty
    if (passRate === 0) {
        score = 50;
    }
    
    return Math.max(score, 50);
}

function simulateBattle(player1Data, player2Data) {
    const battleLog = [];
    
    battleLog.push('⚔️ BATTLE START!');
    battleLog.push('');
    
    const p1Stats = {
        hp: 1000,
        attack: Math.floor(player1Data.score / 10),
        defense: player1Data.metrics.spaceComplexity === 'O(1)' ? 50 : 30
    };
    
    const p2Stats = {
        hp: 1000,
        attack: Math.floor(player2Data.score / 10),
        defense: player2Data.metrics.spaceComplexity === 'O(1)' ? 50 : 30
    };
    
    battleLog.push(`${player1Data.name} - ATK: ${p1Stats.attack}, DEF: ${p1Stats.defense}`);
    battleLog.push(`${player2Data.name} - ATK: ${p2Stats.attack}, DEF: ${p2Stats.defense}`);
    battleLog.push('');
    
    let turn = 1;
    let currentP1HP = p1Stats.hp;
    let currentP2HP = p2Stats.hp;
    
    // Check for tie based on score
    if (Math.abs(player1Data.score - player2Data.score) < 1) {
        // It's a tie - simulate a close battle that ends in a draw
        while (currentP1HP > 0 && currentP2HP > 0 && turn <= 10) {
            battleLog.push(`--- Turn ${turn} ---`);
            
            // Both deal damage
            const damage = 100;
            currentP2HP -= damage;
            battleLog.push(`${player1Data.name} attacks! Deals ${damage} damage!`);
            
            currentP1HP -= damage;
            battleLog.push(`${player2Data.name} attacks! Deals ${damage} damage!`);
            
            battleLog.push('');
            turn++;
        }
        
        // Force both to 0 for dramatic effect
        currentP1HP = 0;
        currentP2HP = 0;
        
        battleLog.push(`Both players are exhausted!`);
        battleLog.push('');
        battleLog.push(`🤝 IT'S A TIE!`);
        
        return {
            winner: 'TIE',
            battleLog,
            p1FinalHP: 0,
            p2FinalHP: 0,
            p1MaxHP: p1Stats.hp,
            p2MaxHP: p2Stats.hp,
            player1Name: player1Data.name,
            player2Name: player2Data.name
        };
    }

    while (currentP1HP > 0 && currentP2HP > 0 && turn <= 10) {
        battleLog.push(`--- Turn ${turn} ---`);
        
        const p1Damage = Math.max(p1Stats.attack - p2Stats.defense, 10);
        currentP2HP -= p1Damage;
        battleLog.push(`${player1Data.name} attacks! Deals ${p1Damage} damage!`);
        
        if (currentP2HP <= 0) {
            battleLog.push(`${player2Data.name} fainted!`);
            break;
        }
        
        const p2Damage = Math.max(p2Stats.attack - p1Stats.defense, 10);
        currentP1HP -= p2Damage;
        battleLog.push(`${player2Data.name} attacks! Deals ${p2Damage} damage!`);
        
        if (currentP1HP <= 0) {
            battleLog.push(`${player1Data.name} fainted!`);
            break;
        }
        
        battleLog.push('');
        turn++;
    }
    
    const winner = currentP1HP > currentP2HP ? player1Data.name : 
                   currentP2HP > currentP1HP ? player2Data.name : 
                   'TIE';
    battleLog.push('');
    if (winner === 'TIE') {
        battleLog.push(`🤝 IT'S A TIE!`);
    } else {
        battleLog.push(`🏆 ${winner} WINS!`);
    }
    
    return {
        winner,
        battleLog,
        p1FinalHP: Math.max(currentP1HP, 0),
        p2FinalHP: Math.max(currentP2HP, 0),
        p1MaxHP: p1Stats.hp,
        p2MaxHP: p2Stats.hp,
        player1Name: player1Data.name,
        player2Name: player2Data.name
    };
}

function generatePlayerSprite(playerName, isWinner) {
    const sprites = {
        winner: ['🦖', '🐉', '🦅', '🦁', '🐯'],
        loser: ['🐢', '🐌', '🐛', '🐁', '🐰']
    };
    
    const list = isWinner ? sprites.winner : sprites.loser;
    const hash = playerName.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return list[hash % list.length];
}

function formatTime(ms) {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    
    if (minutes > 0) {
        return `${minutes}m ${remainingSeconds}s`;
    }
    return `${remainingSeconds}s`;
}

function getDifficultyClass(difficulty) {
    return `difficulty-${difficulty}`;
}

// Code validation functions
function parseTestInput(input) {
    // Parse test case input string like "nums = [2,7,11,15], target = 9"
    const args = [];
    
    // Use regex to match "key = value" patterns, handling arrays and objects correctly
    const pattern = /(\w+)\s*=\s*(\[[^\]]*\]|\{[^\}]*\}|"[^"]*"|'[^']*'|-?\d+\.?\d*|\w+)/g;
    let match;
    
    while ((match = pattern.exec(input)) !== null) {
        const value = match[2].trim();
        try {
            // Try to parse as JSON first
            args.push(JSON.parse(value));
        } catch (e) {
            // If not valid JSON, check if it's a number
            const numValue = Number(value);
            if (!isNaN(numValue)) {
                args.push(numValue);
            } else {
                // Use as string
                args.push(value);
            }
        }
    }
    
    return args;
}

function runTestCases(code, problem) {
    const results = {
        passed: 0,
        failed: 0,
        total: problem.testCases.length,
        details: []
    };
    
    try {
        // Extract function name from code
        const functionMatch = code.match(/function\s+(\w+)/);
        if (!functionMatch) {
            throw new Error('No function found in code');
        }
        const functionName = functionMatch[1];
        
        // Create function from code
        eval(code);
        const userFunction = eval(functionName);
        
        // Run each test case
        problem.testCases.forEach((testCase, index) => {
            try {
                const args = parseTestInput(testCase.input);
                const result = userFunction(...args);
                const expected = testCase.output;
                
                // Compare result with expected
                let passed = false;
                try {
                    const expectedValue = JSON.parse(expected);
                    passed = JSON.stringify(result) === JSON.stringify(expectedValue);
                } catch (e) {
                    passed = String(result) === String(expected);
                }
                
                if (passed) {
                    results.passed++;
                    results.details.push({
                        testCase: index + 1,
                        passed: true,
                        input: testCase.input,
                        expected: expected,
                        actual: JSON.stringify(result)
                    });
                } else {
                    results.failed++;
                    results.details.push({
                        testCase: index + 1,
                        passed: false,
                        input: testCase.input,
                        expected: expected,
                        actual: JSON.stringify(result)
                    });
                }
            } catch (error) {
                results.failed++;
                results.details.push({
                    testCase: index + 1,
                    passed: false,
                    input: testCase.input,
                    error: error.message
                });
            }
        });
    } catch (error) {
        results.error = error.message;
    }
    
    return results;
}

function validateSolution(code, problem) {
    const testResults = runTestCases(code, problem);
    const passRate = testResults.total > 0 ? testResults.passed / testResults.total : 0;
    
    return {
        isValid: testResults.passed === testResults.total,
        passRate: passRate,
        testResults: testResults
    };
}

function generateRoomId() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}


document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    if (typeof PROBLEMS_DATA !== 'undefined' && Object.keys(PROBLEMS_DATA).length > 0) {
        APP_STATE.problems = PROBLEMS_DATA;
    } else {
        APP_STATE.problems = STATIC_PROBLEMS;
    }
});

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        APP_STATE,
        PROBLEMS_DATA: STATIC_PROBLEMS,
        calculateComplexity,
        calculateScore,
        simulateBattle,
        generatePlayerSprite,
        formatTime,
        saveUserData,
        loadUserData
    };
} else {
    window.calculateComplexity = calculateComplexity;
    window.calculateScore = calculateScore;
    window.simulateBattle = simulateBattle;
    window.generatePlayerSprite = generatePlayerSprite;
    window.formatTime = formatTime;
    window.saveUserData = saveUserData;
    window.loadUserData = loadUserData;
    window.parseTestInput = parseTestInput;
    window.runTestCases = runTestCases;
    window.validateSolution = validateSolution;
    window.generateRoomId = generateRoomId;
}
