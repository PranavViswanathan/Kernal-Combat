// ===================================
// DYNAMIC PROBLEM LOADER
// ===================================

/**
 * Loads problems dynamically from the folder structure
 * Folder structure: problems/{topic}/{problem-id}/problem.json
 */

// Configuration - list all topics and problems
const PROBLEM_INDEX = {
    'Arrays': ['two-sum', 'best-time-stock', 'contains-duplicate'],
    'Strings': ['valid-anagram', 'longest-substring'],
    'Linked Lists': ['reverse-linked-list', 'merge-two-lists'],
    'Trees': ['max-depth-tree', 'valid-bst'],
    'Dynamic Programming': ['climbing-stairs', 'house-robber'],
    'Graphs': ['number-of-islands'],
    'Binary Search': ['binary-search'],
    'Backtracking': ['subsets']
};

// Cache for loaded problems
let PROBLEMS_CACHE = {};
let LOADING_COMPLETE = false;

/**
 * Load all problems from the file system
 */
async function loadAllProblems() {
    if (LOADING_COMPLETE) {
        return PROBLEMS_CACHE;
    }

    try {
        const loadPromises = [];
        
        for (const [topic, problemIds] of Object.entries(PROBLEM_INDEX)) {
            PROBLEMS_CACHE[topic] = [];
            
            for (const problemId of problemIds) {
                const promise = loadProblemFile(topic, problemId)
                    .then(problem => {
                        if (problem) {
                            PROBLEMS_CACHE[topic].push(problem);
                        }
                    })
                    .catch(err => {
                        console.warn(`Failed to load ${topic}/${problemId}:`, err);
                        // Fallback to placeholder for missing problems
                        PROBLEMS_CACHE[topic].push(createPlaceholderProblem(topic, problemId));
                    });
                
                loadPromises.push(promise);
            }
        }
        
        await Promise.all(loadPromises);
        LOADING_COMPLETE = true;
        console.log('✅ All problems loaded successfully!');
        return PROBLEMS_CACHE;
        
    } catch (error) {
        console.error('Error loading problems:', error);
        // Fallback to hardcoded data if loading fails
        return getFallbackProblems();
    }
}

/**
 * Load a single problem file
 */
async function loadProblemFile(topic, problemId) {
    const path = `problems/${encodeURIComponent(topic)}/${problemId}/problem.json`;
    
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const problem = await response.json();
        return problem;
    } catch (error) {
        console.error(`Failed to load ${path}:`, error);
        throw error;
    }
}

/**
 * Create a placeholder problem when file is missing
 */
function createPlaceholderProblem(topic, problemId) {
    return {
        id: problemId,
        name: problemId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
        difficulty: 'medium',
        description: `Problem description for ${problemId}. This problem file needs to be created at problems/${topic}/${problemId}/problem.json`,
        testCases: [
            { input: 'Example input', output: 'Example output' }
        ],
        hints: ['Add hints here'],
        starterCode: '// Add your solution here'
    };
}

/**
 * Get problems data (loads if not already loaded)
 */
async function getProblems() {
    if (!LOADING_COMPLETE) {
        console.log('Loading problems for the first time...');
        await loadAllProblems();
    }
    return PROBLEMS_CACHE;
}

/**
 * Get a specific problem by topic and ID
 */
async function getProblem(topic, problemId) {
    // Ensure problems are loaded first
    if (!LOADING_COMPLETE) {
        console.log('Waiting for problems to load...');
        await loadAllProblems();
    }
    
    const problems = PROBLEMS_CACHE;
    if (problems[topic]) {
        const problem = problems[topic].find(p => p.id === problemId);
        console.log(`Found problem: ${problemId}`, problem);
        return problem;
    }
    console.warn(`Topic "${topic}" not found in cache`);
    return null;
}

/**
 * Fallback hardcoded problems (used if file system loading fails)
 */
function getFallbackProblems() {
    return {
        'Arrays': [
            {
                id: 'two-sum',
                name: 'Two Sum',
                difficulty: 'easy',
                description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.',
                testCases: [
                    { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]' },
                    { input: 'nums = [3,2,4], target = 6', output: '[1,2]' }
                ],
                starterCode: 'function twoSum(nums, target) {\n    // Your code here\n}'
            }
        ],
        'Strings': [
            {
                id: 'valid-anagram',
                name: 'Valid Anagram',
                difficulty: 'easy',
                description: 'Given two strings s and t, return true if t is an anagram of s.',
                testCases: [
                    { input: 's = "anagram", t = "nagaram"', output: 'true' }
                ],
                starterCode: 'function isAnagram(s, t) {\n    // Your code here\n}'
            }
        ]
    };
}

// Legacy compatibility - export PROBLEMS_DATA
let PROBLEMS_DATA = {};

// Initialize on page load
if (typeof document !== 'undefined') {
    // Load immediately when script loads
    loadAllProblems().then(data => {
        PROBLEMS_DATA = data;
        console.log('✅ PROBLEMS_DATA ready:', Object.keys(PROBLEMS_DATA));
        // Trigger custom event for pages that need to know when data is ready
        document.dispatchEvent(new CustomEvent('problemsLoaded', { detail: PROBLEMS_DATA }));
    }).catch(err => {
        console.error('Failed to load problems:', err);
        PROBLEMS_DATA = getFallbackProblems();
    });
}

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadAllProblems,
        getProblems,
        getProblem,
        PROBLEM_INDEX
    };
}
