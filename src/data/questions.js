// Helper to generate LeetCode URL from question name
const generateLeetCodeUrl = (name) => {
    const slug = name
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
    return `https://leetcode.com/problems/${slug}/`;
};

// All 250 DSA Questions from the PDF
export const questions = [
    // ARRAY - Easy (10)
    { id: 1, topic: 'Array', name: 'Two Sum', difficulty: 'Easy', link: generateLeetCodeUrl('Two Sum') },
    { id: 2, topic: 'Array', name: 'Best Time to Buy and Sell Stock', difficulty: 'Easy', link: generateLeetCodeUrl('Best Time to Buy and Sell Stock') },
    { id: 3, topic: 'Array', name: 'Contains Duplicate', difficulty: 'Easy', link: generateLeetCodeUrl('Contains Duplicate') },
    { id: 4, topic: 'Array', name: 'Product of Array Except Self', difficulty: 'Easy', link: generateLeetCodeUrl('Product of Array Except Self') },
    { id: 5, topic: 'Array', name: 'Maximum Subarray', difficulty: 'Easy', link: generateLeetCodeUrl('Maximum Subarray') },
    { id: 6, topic: 'Array', name: 'Find Minimum in Rotated Sorted Array', difficulty: 'Easy', link: generateLeetCodeUrl('Find Minimum in Rotated Sorted Array') },
    { id: 7, topic: 'Array', name: 'Search in Rotated Sorted Array', difficulty: 'Easy', link: generateLeetCodeUrl('Search in Rotated Sorted Array') },
    { id: 8, topic: 'Array', name: 'Move Zeroes', difficulty: 'Easy', link: generateLeetCodeUrl('Move Zeroes') },
    { id: 9, topic: 'Array', name: 'Merge Sorted Array', difficulty: 'Easy', link: generateLeetCodeUrl('Merge Sorted Array') },
    { id: 10, topic: 'Array', name: 'Remove Duplicates from Sorted Array', difficulty: 'Easy', link: generateLeetCodeUrl('Remove Duplicates from Sorted Array') },

    // ARRAY - Medium (10)
    { id: 11, topic: 'Array', name: '3Sum', difficulty: 'Medium', link: generateLeetCodeUrl('3Sum') },
    { id: 12, topic: 'Array', name: 'Container With Most Water', difficulty: 'Medium', link: generateLeetCodeUrl('Container With Most Water') },
    { id: 13, topic: 'Array', name: 'Rotate Array', difficulty: 'Medium', link: generateLeetCodeUrl('Rotate Array') },
    { id: 14, topic: 'Array', name: 'Set Matrix Zeroes', difficulty: 'Medium', link: generateLeetCodeUrl('Set Matrix Zeroes') },
    { id: 15, topic: 'Array', name: 'Spiral Matrix', difficulty: 'Medium', link: generateLeetCodeUrl('Spiral Matrix') },
    { id: 16, topic: 'Array', name: 'Jump Game', difficulty: 'Medium', link: generateLeetCodeUrl('Jump Game') },
    { id: 17, topic: 'Array', name: 'Merge Intervals', difficulty: 'Medium', link: generateLeetCodeUrl('Merge Intervals') },
    { id: 18, topic: 'Array', name: 'Insert Interval', difficulty: 'Medium', link: generateLeetCodeUrl('Insert Interval') },
    { id: 19, topic: 'Array', name: 'Sort Colors', difficulty: 'Medium', link: generateLeetCodeUrl('Sort Colors') },
    { id: 20, topic: 'Array', name: 'Subarray Sum Equals K', difficulty: 'Medium', link: generateLeetCodeUrl('Subarray Sum Equals K') },

    // ARRAY - Hard (10)
    { id: 21, topic: 'Array', name: 'Trapping Rain Water', difficulty: 'Hard', link: generateLeetCodeUrl('Trapping Rain Water') },
    { id: 22, topic: 'Array', name: 'First Missing Positive', difficulty: 'Hard', link: generateLeetCodeUrl('First Missing Positive') },
    { id: 23, topic: 'Array', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: generateLeetCodeUrl('Median of Two Sorted Arrays') },
    { id: 24, topic: 'Array', name: 'Longest Consecutive Sequence', difficulty: 'Hard', link: generateLeetCodeUrl('Longest Consecutive Sequence') },
    { id: 25, topic: 'Array', name: 'Sliding Window Maximum', difficulty: 'Hard', link: generateLeetCodeUrl('Sliding Window Maximum') },
    { id: 26, topic: 'Array', name: 'Maximum Product Subarray', difficulty: 'Hard', link: generateLeetCodeUrl('Maximum Product Subarray') },
    { id: 27, topic: 'Array', name: 'Minimum Window Substring', difficulty: 'Hard', link: generateLeetCodeUrl('Minimum Window Substring') },
    { id: 28, topic: 'Array', name: 'Find All Numbers Disappeared in an Array', difficulty: 'Hard', link: generateLeetCodeUrl('Find All Numbers Disappeared in an Array') },
    { id: 29, topic: 'Array', name: 'Next Permutation', difficulty: 'Hard', link: generateLeetCodeUrl('Next Permutation') },
    { id: 30, topic: 'Array', name: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: generateLeetCodeUrl('Largest Rectangle in Histogram') },

    // SEARCHING - Easy (8)
    { id: 31, topic: 'Searching', name: 'Binary Search', difficulty: 'Easy', link: generateLeetCodeUrl('Binary Search') },
    { id: 32, topic: 'Searching', name: 'Search Insert Position', difficulty: 'Easy', link: generateLeetCodeUrl('Search Insert Position') },
    { id: 33, topic: 'Searching', name: 'First Bad Version', difficulty: 'Easy', link: generateLeetCodeUrl('First Bad Version') },
    { id: 34, topic: 'Searching', name: 'Sqrt(x)', difficulty: 'Easy', link: generateLeetCodeUrl('Sqrtx') },
    { id: 35, topic: 'Searching', name: 'Count Negative Numbers in a Sorted Matrix', difficulty: 'Easy', link: generateLeetCodeUrl('Count Negative Numbers in a Sorted Matrix') },
    { id: 36, topic: 'Searching', name: 'Guess Number Higher or Lower', difficulty: 'Easy', link: generateLeetCodeUrl('Guess Number Higher or Lower') },
    { id: 37, topic: 'Searching', name: 'Valid Perfect Square', difficulty: 'Easy', link: generateLeetCodeUrl('Valid Perfect Square') },
    { id: 38, topic: 'Searching', name: 'Intersection of Two Arrays', difficulty: 'Easy', link: generateLeetCodeUrl('Intersection of Two Arrays') },

    // SEARCHING - Medium (8)
    { id: 39, topic: 'Searching', name: 'Find First and Last Position of Element in Sorted Array', difficulty: 'Medium', link: generateLeetCodeUrl('Find First and Last Position of Element in Sorted Array') },
    { id: 40, topic: 'Searching', name: 'Search a 2D Matrix', difficulty: 'Medium', link: generateLeetCodeUrl('Search a 2D Matrix') },
    { id: 41, topic: 'Searching', name: 'Find Peak Element', difficulty: 'Medium', link: generateLeetCodeUrl('Find Peak Element') },
    { id: 42, topic: 'Searching', name: 'Kth Smallest Element in a Sorted Matrix', difficulty: 'Medium', link: generateLeetCodeUrl('Kth Smallest Element in a Sorted Matrix') },
    { id: 43, topic: 'Searching', name: 'Search in Rotated Sorted Array II', difficulty: 'Medium', link: generateLeetCodeUrl('Search in Rotated Sorted Array II') },
    { id: 44, topic: 'Searching', name: 'Find K Closest Elements', difficulty: 'Medium', link: generateLeetCodeUrl('Find K Closest Elements') },
    { id: 45, topic: 'Searching', name: 'Capacity To Ship Packages Within D Days', difficulty: 'Medium', link: generateLeetCodeUrl('Capacity To Ship Packages Within D Days') },
    { id: 46, topic: 'Searching', name: 'Time Based Key-Value Store', difficulty: 'Medium', link: generateLeetCodeUrl('Time Based Key-Value Store') },

    // SEARCHING - Hard (7)
    { id: 47, topic: 'Searching', name: 'Split Array Largest Sum', difficulty: 'Hard', link: generateLeetCodeUrl('Split Array Largest Sum') },
    { id: 48, topic: 'Searching', name: 'Median of Two Sorted Arrays', difficulty: 'Hard', link: generateLeetCodeUrl('Median of Two Sorted Arrays') },
    { id: 49, topic: 'Searching', name: 'Find in Mountain Array', difficulty: 'Hard', link: generateLeetCodeUrl('Find in Mountain Array') },
    { id: 50, topic: 'Searching', name: 'Smallest Rectangle Enclosing Black Pixels', difficulty: 'Hard', link: generateLeetCodeUrl('Smallest Rectangle Enclosing Black Pixels') },
    { id: 51, topic: 'Searching', name: 'Count of Range Sum', difficulty: 'Hard', link: generateLeetCodeUrl('Count of Range Sum') },
    { id: 52, topic: 'Searching', name: 'Russian Doll Envelopes', difficulty: 'Hard', link: generateLeetCodeUrl('Russian Doll Envelopes') },
    { id: 53, topic: 'Searching', name: 'Aggressive Cows', difficulty: 'Hard', link: generateLeetCodeUrl('Aggressive Cows') },

    // RECURSION - Easy (8)
    { id: 54, topic: 'Recursion', name: 'Fibonacci Number', difficulty: 'Easy', link: generateLeetCodeUrl('Fibonacci Number') },
    { id: 55, topic: 'Recursion', name: 'Climbing Stairs', difficulty: 'Easy', link: generateLeetCodeUrl('Climbing Stairs') },
    { id: 56, topic: 'Recursion', name: 'Power of Two', difficulty: 'Easy', link: generateLeetCodeUrl('Power of Two') },
    { id: 57, topic: 'Recursion', name: 'Power of Three', difficulty: 'Easy', link: generateLeetCodeUrl('Power of Three') },
    { id: 58, topic: 'Recursion', name: 'Reverse String', difficulty: 'Easy', link: generateLeetCodeUrl('Reverse String') },
    { id: 59, topic: 'Recursion', name: 'Sum of Two Integers', difficulty: 'Easy', link: generateLeetCodeUrl('Sum of Two Integers') },
    { id: 60, topic: 'Recursion', name: 'Merge Two Sorted Lists', difficulty: 'Easy', link: generateLeetCodeUrl('Merge Two Sorted Lists') },
    { id: 61, topic: 'Recursion', name: 'Range Sum of BST', difficulty: 'Easy', link: generateLeetCodeUrl('Range Sum of BST') },

    // RECURSION - Medium (10)
    { id: 62, topic: 'Recursion', name: 'Pow(x, n)', difficulty: 'Medium', link: generateLeetCodeUrl('Powx-n') },
    { id: 63, topic: 'Recursion', name: 'Subsets', difficulty: 'Medium', link: generateLeetCodeUrl('Subsets') },
    { id: 64, topic: 'Recursion', name: 'Subsets II', difficulty: 'Medium', link: generateLeetCodeUrl('Subsets II') },
    { id: 65, topic: 'Recursion', name: 'Permutations', difficulty: 'Medium', link: generateLeetCodeUrl('Permutations') },
    { id: 66, topic: 'Recursion', name: 'Permutations II', difficulty: 'Medium', link: generateLeetCodeUrl('Permutations II') },
    { id: 67, topic: 'Recursion', name: 'Combination Sum', difficulty: 'Medium', link: generateLeetCodeUrl('Combination Sum') },
    { id: 68, topic: 'Recursion', name: 'Combination Sum II', difficulty: 'Medium', link: generateLeetCodeUrl('Combination Sum II') },
    { id: 69, topic: 'Recursion', name: 'Letter Combinations of a Phone Number', difficulty: 'Medium', link: generateLeetCodeUrl('Letter Combinations of a Phone Number') },
    { id: 70, topic: 'Recursion', name: 'Generate Parentheses', difficulty: 'Medium', link: generateLeetCodeUrl('Generate Parentheses') },
    { id: 71, topic: 'Recursion', name: 'Word Search', difficulty: 'Medium', link: generateLeetCodeUrl('Word Search') },

    // RECURSION - Hard (7)
    { id: 72, topic: 'Recursion', name: 'N-Queens', difficulty: 'Hard', link: generateLeetCodeUrl('N-Queens') },
    { id: 73, topic: 'Recursion', name: 'N-Queens II', difficulty: 'Hard', link: generateLeetCodeUrl('N-Queens II') },
    { id: 74, topic: 'Recursion', name: 'Sudoku Solver', difficulty: 'Hard', link: generateLeetCodeUrl('Sudoku Solver') },
    { id: 75, topic: 'Recursion', name: 'Regular Expression Matching', difficulty: 'Hard', link: generateLeetCodeUrl('Regular Expression Matching') },
    { id: 76, topic: 'Recursion', name: 'Wildcard Matching', difficulty: 'Hard', link: generateLeetCodeUrl('Wildcard Matching') },
    { id: 77, topic: 'Recursion', name: 'Palindrome Partitioning', difficulty: 'Hard', link: generateLeetCodeUrl('Palindrome Partitioning') },
    { id: 78, topic: 'Recursion', name: 'Expression Add Operators', difficulty: 'Hard', link: generateLeetCodeUrl('Expression Add Operators') },

    // STRING - Easy (10)
    { id: 79, topic: 'String', name: 'Valid Palindrome', difficulty: 'Easy', link: generateLeetCodeUrl('Valid Palindrome') },
    { id: 80, topic: 'String', name: 'Valid Anagram', difficulty: 'Easy', link: generateLeetCodeUrl('Valid Anagram') },
    { id: 81, topic: 'String', name: 'Longest Common Prefix', difficulty: 'Easy', link: generateLeetCodeUrl('Longest Common Prefix') },
    { id: 82, topic: 'String', name: 'Roman to Integer', difficulty: 'Easy', link: generateLeetCodeUrl('Roman to Integer') },
    { id: 83, topic: 'String', name: 'First Unique Character in a String', difficulty: 'Easy', link: generateLeetCodeUrl('First Unique Character in a String') },
    { id: 84, topic: 'String', name: 'Implement strStr()', difficulty: 'Easy', link: generateLeetCodeUrl('Implement strStr') },
    { id: 85, topic: 'String', name: 'Count and Say', difficulty: 'Easy', link: generateLeetCodeUrl('Count and Say') },
    { id: 86, topic: 'String', name: 'Reverse Words in a String III', difficulty: 'Easy', link: generateLeetCodeUrl('Reverse Words in a String III') },
    { id: 87, topic: 'String', name: 'Isomorphic Strings', difficulty: 'Easy', link: generateLeetCodeUrl('Isomorphic Strings') },
    { id: 88, topic: 'String', name: 'Length of Last Word', difficulty: 'Easy', link: generateLeetCodeUrl('Length of Last Word') },

    // STRING - Medium (10)
    { id: 89, topic: 'String', name: 'Longest Substring Without Repeating Characters', difficulty: 'Medium', link: generateLeetCodeUrl('Longest Substring Without Repeating Characters') },
    { id: 90, topic: 'String', name: 'Longest Palindromic Substring', difficulty: 'Medium', link: generateLeetCodeUrl('Longest Palindromic Substring') },
    { id: 91, topic: 'String', name: 'Group Anagrams', difficulty: 'Medium', link: generateLeetCodeUrl('Group Anagrams') },
    { id: 92, topic: 'String', name: 'String to Integer (atoi)', difficulty: 'Medium', link: generateLeetCodeUrl('String to Integer atoi') },
    { id: 93, topic: 'String', name: 'Zigzag Conversion', difficulty: 'Medium', link: generateLeetCodeUrl('Zigzag Conversion') },
    { id: 94, topic: 'String', name: 'Integer to Roman', difficulty: 'Medium', link: generateLeetCodeUrl('Integer to Roman') },
    { id: 95, topic: 'String', name: 'Multiply Strings', difficulty: 'Medium', link: generateLeetCodeUrl('Multiply Strings') },
    { id: 96, topic: 'String', name: 'Compare Version Numbers', difficulty: 'Medium', link: generateLeetCodeUrl('Compare Version Numbers') },
    { id: 97, topic: 'String', name: 'Decode Ways', difficulty: 'Medium', link: generateLeetCodeUrl('Decode Ways') },
    { id: 98, topic: 'String', name: 'Palindromic Substrings', difficulty: 'Medium', link: generateLeetCodeUrl('Palindromic Substrings') },

    // STRING - Hard (8)
    { id: 99, topic: 'String', name: 'Longest Valid Parentheses', difficulty: 'Hard', link: generateLeetCodeUrl('Longest Valid Parentheses') },
    { id: 100, topic: 'String', name: 'Edit Distance', difficulty: 'Hard', link: generateLeetCodeUrl('Edit Distance') },
    { id: 101, topic: 'String', name: 'Distinct Subsequences', difficulty: 'Hard', link: generateLeetCodeUrl('Distinct Subsequences') },
    { id: 102, topic: 'String', name: 'Text Justification', difficulty: 'Hard', link: generateLeetCodeUrl('Text Justification') },
    { id: 103, topic: 'String', name: 'Smallest Window in a String Containing All Characters', difficulty: 'Hard', link: generateLeetCodeUrl('Smallest Window in a String Containing All Characters') },
    { id: 104, topic: 'String', name: 'Word Break II', difficulty: 'Hard', link: generateLeetCodeUrl('Word Break II') },
    { id: 105, topic: 'String', name: 'Scramble String', difficulty: 'Hard', link: generateLeetCodeUrl('Scramble String') },
    { id: 106, topic: 'String', name: 'Shortest Palindrome', difficulty: 'Hard', link: generateLeetCodeUrl('Shortest Palindrome') },

    // STACK - Easy (8)
    { id: 107, topic: 'Stack', name: 'Valid Parentheses', difficulty: 'Easy', link: generateLeetCodeUrl('Valid Parentheses') },
    { id: 108, topic: 'Stack', name: 'Implement Queue using Stacks', difficulty: 'Easy', link: generateLeetCodeUrl('Implement Queue using Stacks') },
    { id: 109, topic: 'Stack', name: 'Min Stack', difficulty: 'Easy', link: generateLeetCodeUrl('Min Stack') },
    { id: 110, topic: 'Stack', name: 'Backspace String Compare', difficulty: 'Easy', link: generateLeetCodeUrl('Backspace String Compare') },
    { id: 111, topic: 'Stack', name: 'Remove All Adjacent Duplicates In String', difficulty: 'Easy', link: generateLeetCodeUrl('Remove All Adjacent Duplicates In String') },
    { id: 112, topic: 'Stack', name: 'Baseball Game', difficulty: 'Easy', link: generateLeetCodeUrl('Baseball Game') },
    { id: 113, topic: 'Stack', name: 'Next Greater Element I', difficulty: 'Easy', link: generateLeetCodeUrl('Next Greater Element I') },
    { id: 114, topic: 'Stack', name: 'Remove Outermost Parentheses', difficulty: 'Easy', link: generateLeetCodeUrl('Remove Outermost Parentheses') },

    // STACK - Medium (10)
    { id: 115, topic: 'Stack', name: 'Daily Temperatures', difficulty: 'Medium', link: generateLeetCodeUrl('Daily Temperatures') },
    { id: 116, topic: 'Stack', name: 'Evaluate Reverse Polish Notation', difficulty: 'Medium', link: generateLeetCodeUrl('Evaluate Reverse Polish Notation') },
    { id: 117, topic: 'Stack', name: 'Decode String', difficulty: 'Medium', link: generateLeetCodeUrl('Decode String') },
    { id: 118, topic: 'Stack', name: 'Asteroid Collision', difficulty: 'Medium', link: generateLeetCodeUrl('Asteroid Collision') },
    { id: 119, topic: 'Stack', name: 'Basic Calculator II', difficulty: 'Medium', link: generateLeetCodeUrl('Basic Calculator II') },
    { id: 120, topic: 'Stack', name: 'Remove K Digits', difficulty: 'Medium', link: generateLeetCodeUrl('Remove K Digits') },
    { id: 121, topic: 'Stack', name: 'Simplify Path', difficulty: 'Medium', link: generateLeetCodeUrl('Simplify Path') },
    { id: 122, topic: 'Stack', name: 'Flatten Nested List Iterator', difficulty: 'Medium', link: generateLeetCodeUrl('Flatten Nested List Iterator') },
    { id: 123, topic: 'Stack', name: 'Online Stock Span', difficulty: 'Medium', link: generateLeetCodeUrl('Online Stock Span') },
    { id: 124, topic: 'Stack', name: 'Score of Parentheses', difficulty: 'Medium', link: generateLeetCodeUrl('Score of Parentheses') },

    // STACK - Hard (7)
    { id: 125, topic: 'Stack', name: 'Basic Calculator', difficulty: 'Hard', link: generateLeetCodeUrl('Basic Calculator') },
    { id: 126, topic: 'Stack', name: 'Largest Rectangle in Histogram', difficulty: 'Hard', link: generateLeetCodeUrl('Largest Rectangle in Histogram') },
    { id: 127, topic: 'Stack', name: 'Maximal Rectangle', difficulty: 'Hard', link: generateLeetCodeUrl('Maximal Rectangle') },
    { id: 128, topic: 'Stack', name: 'Trapping Rain Water', difficulty: 'Hard', link: generateLeetCodeUrl('Trapping Rain Water') },
    { id: 129, topic: 'Stack', name: 'Longest Valid Parentheses', difficulty: 'Hard', link: generateLeetCodeUrl('Longest Valid Parentheses') },
    { id: 130, topic: 'Stack', name: 'Maximum Frequency Stack', difficulty: 'Hard', link: generateLeetCodeUrl('Maximum Frequency Stack') },
    { id: 131, topic: 'Stack', name: 'Number of Atoms', difficulty: 'Hard', link: generateLeetCodeUrl('Number of Atoms') },

    // QUEUE - Easy (6)
    { id: 132, topic: 'Queue', name: 'Implement Stack using Queues', difficulty: 'Easy', link: generateLeetCodeUrl('Implement Stack using Queues') },
    { id: 133, topic: 'Queue', name: 'Number of Recent Calls', difficulty: 'Easy', link: generateLeetCodeUrl('Number of Recent Calls') },
    { id: 134, topic: 'Queue', name: 'Moving Average from Data Stream', difficulty: 'Easy', link: generateLeetCodeUrl('Moving Average from Data Stream') },
    { id: 135, topic: 'Queue', name: 'First Unique Character in a String', difficulty: 'Easy', link: generateLeetCodeUrl('First Unique Character in a String') },
    { id: 136, topic: 'Queue', name: 'Design Circular Queue', difficulty: 'Easy', link: generateLeetCodeUrl('Design Circular Queue') },
    { id: 137, topic: 'Queue', name: 'Time Needed to Buy Tickets', difficulty: 'Easy', link: generateLeetCodeUrl('Time Needed to Buy Tickets') },

    // QUEUE - Medium (8)
    { id: 138, topic: 'Queue', name: 'Design Hit Counter', difficulty: 'Medium', link: generateLeetCodeUrl('Design Hit Counter') },
    { id: 139, topic: 'Queue', name: 'Dota2 Senate', difficulty: 'Medium', link: generateLeetCodeUrl('Dota2 Senate') },
    { id: 140, topic: 'Queue', name: 'Task Scheduler', difficulty: 'Medium', link: generateLeetCodeUrl('Task Scheduler') },
    { id: 141, topic: 'Queue', name: 'Rotting Oranges', difficulty: 'Medium', link: generateLeetCodeUrl('Rotting Oranges') },
    { id: 142, topic: 'Queue', name: 'Walls and Gates', difficulty: 'Medium', link: generateLeetCodeUrl('Walls and Gates') },
    { id: 143, topic: 'Queue', name: 'Shortest Path in Binary Matrix', difficulty: 'Medium', link: generateLeetCodeUrl('Shortest Path in Binary Matrix') },
    { id: 144, topic: 'Queue', name: 'Open the Lock', difficulty: 'Medium', link: generateLeetCodeUrl('Open the Lock') },
    { id: 145, topic: 'Queue', name: 'Snakes and Ladders', difficulty: 'Medium', link: generateLeetCodeUrl('Snakes and Ladders') },

    // QUEUE - Hard (6)
    { id: 146, topic: 'Queue', name: 'Sliding Window Maximum', difficulty: 'Hard', link: generateLeetCodeUrl('Sliding Window Maximum') },
    { id: 147, topic: 'Queue', name: 'Shortest Subarray with Sum at Least K', difficulty: 'Hard', link: generateLeetCodeUrl('Shortest Subarray with Sum at Least K') },
    { id: 148, topic: 'Queue', name: 'Design Twitter', difficulty: 'Hard', link: generateLeetCodeUrl('Design Twitter') },
    { id: 149, topic: 'Queue', name: 'Constrained Subsequence Sum', difficulty: 'Hard', link: generateLeetCodeUrl('Constrained Subsequence Sum') },
    { id: 150, topic: 'Queue', name: 'Maximum Number of Events', difficulty: 'Hard', link: generateLeetCodeUrl('Maximum Number of Events') },
    { id: 151, topic: 'Queue', name: 'Jump Game VI', difficulty: 'Hard', link: generateLeetCodeUrl('Jump Game VI') },

    // LINKED LIST - Easy (10)
    { id: 152, topic: 'Linked List', name: 'Reverse Linked List', difficulty: 'Easy', link: generateLeetCodeUrl('Reverse Linked List') },
    { id: 153, topic: 'Linked List', name: 'Merge Two Sorted Lists', difficulty: 'Easy', link: generateLeetCodeUrl('Merge Two Sorted Lists') },
    { id: 154, topic: 'Linked List', name: 'Linked List Cycle', difficulty: 'Easy', link: generateLeetCodeUrl('Linked List Cycle') },
    { id: 155, topic: 'Linked List', name: 'Palindrome Linked List', difficulty: 'Easy', link: generateLeetCodeUrl('Palindrome Linked List') },
    { id: 156, topic: 'Linked List', name: 'Remove Duplicates from Sorted List', difficulty: 'Easy', link: generateLeetCodeUrl('Remove Duplicates from Sorted List') },
    { id: 157, topic: 'Linked List', name: 'Intersection of Two Linked Lists', difficulty: 'Easy', link: generateLeetCodeUrl('Intersection of Two Linked Lists') },
    { id: 158, topic: 'Linked List', name: 'Remove Linked List Elements', difficulty: 'Easy', link: generateLeetCodeUrl('Remove Linked List Elements') },
    { id: 159, topic: 'Linked List', name: 'Middle of the Linked List', difficulty: 'Easy', link: generateLeetCodeUrl('Middle of the Linked List') },
    { id: 160, topic: 'Linked List', name: 'Delete Node in a Linked List', difficulty: 'Easy', link: generateLeetCodeUrl('Delete Node in a Linked List') },
    { id: 161, topic: 'Linked List', name: 'Convert Binary Number in a Linked List to Integer', difficulty: 'Easy', link: generateLeetCodeUrl('Convert Binary Number in a Linked List to Integer') },

    // LINKED LIST - Medium (10)
    { id: 162, topic: 'Linked List', name: 'Add Two Numbers', difficulty: 'Medium', link: generateLeetCodeUrl('Add Two Numbers') },
    { id: 163, topic: 'Linked List', name: 'Remove Nth Node From End of List', difficulty: 'Medium', link: generateLeetCodeUrl('Remove Nth Node From End of List') },
    { id: 164, topic: 'Linked List', name: 'Swap Nodes in Pairs', difficulty: 'Medium', link: generateLeetCodeUrl('Swap Nodes in Pairs') },
    { id: 165, topic: 'Linked List', name: 'Rotate List', difficulty: 'Medium', link: generateLeetCodeUrl('Rotate List') },
    { id: 166, topic: 'Linked List', name: 'Linked List Cycle II', difficulty: 'Medium', link: generateLeetCodeUrl('Linked List Cycle II') },
    { id: 167, topic: 'Linked List', name: 'Reorder List', difficulty: 'Medium', link: generateLeetCodeUrl('Reorder List') },
    { id: 168, topic: 'Linked List', name: 'Sort List', difficulty: 'Medium', link: generateLeetCodeUrl('Sort List') },
    { id: 169, topic: 'Linked List', name: 'Copy List with Random Pointer', difficulty: 'Medium', link: generateLeetCodeUrl('Copy List with Random Pointer') },
    { id: 170, topic: 'Linked List', name: 'Odd Even Linked List', difficulty: 'Medium', link: generateLeetCodeUrl('Odd Even Linked List') },
    { id: 171, topic: 'Linked List', name: 'Flatten a Multilevel Doubly Linked List', difficulty: 'Medium', link: generateLeetCodeUrl('Flatten a Multilevel Doubly Linked List') },

    // LINKED LIST - Hard (8)
    { id: 172, topic: 'Linked List', name: 'Merge k Sorted Lists', difficulty: 'Hard', link: generateLeetCodeUrl('Merge k Sorted Lists') },
    { id: 173, topic: 'Linked List', name: 'Reverse Nodes in k-Group', difficulty: 'Hard', link: generateLeetCodeUrl('Reverse Nodes in k-Group') },
    { id: 174, topic: 'Linked List', name: 'LRU Cache', difficulty: 'Hard', link: generateLeetCodeUrl('LRU Cache') },
    { id: 175, topic: 'Linked List', name: 'LFU Cache', difficulty: 'Hard', link: generateLeetCodeUrl('LFU Cache') },
    { id: 176, topic: 'Linked List', name: 'Design Browser History', difficulty: 'Hard', link: generateLeetCodeUrl('Design Browser History') },
    { id: 177, topic: 'Linked List', name: 'All O`one Data Structure', difficulty: 'Hard', link: generateLeetCodeUrl('All Oone Data Structure') },
    { id: 178, topic: 'Linked List', name: 'Design Skiplist', difficulty: 'Hard', link: generateLeetCodeUrl('Design Skiplist') },
    { id: 179, topic: 'Linked List', name: 'Insert into a Sorted Circular Linked List', difficulty: 'Hard', link: generateLeetCodeUrl('Insert into a Sorted Circular Linked List') },

    // TREE - Easy (10)
    { id: 180, topic: 'Tree', name: 'Maximum Depth of Binary Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Maximum Depth of Binary Tree') },
    { id: 181, topic: 'Tree', name: 'Same Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Same Tree') },
    { id: 182, topic: 'Tree', name: 'Invert Binary Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Invert Binary Tree') },
    { id: 183, topic: 'Tree', name: 'Symmetric Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Symmetric Tree') },
    { id: 184, topic: 'Tree', name: 'Subtree of Another Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Subtree of Another Tree') },
    { id: 185, topic: 'Tree', name: 'Diameter of Binary Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Diameter of Binary Tree') },
    { id: 186, topic: 'Tree', name: 'Balanced Binary Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Balanced Binary Tree') },
    { id: 187, topic: 'Tree', name: 'Path Sum', difficulty: 'Easy', link: generateLeetCodeUrl('Path Sum') },
    { id: 188, topic: 'Tree', name: 'Lowest Common Ancestor of a BST', difficulty: 'Easy', link: generateLeetCodeUrl('Lowest Common Ancestor of a Binary Search Tree') },
    { id: 189, topic: 'Tree', name: 'Binary Tree Paths', difficulty: 'Easy', link: generateLeetCodeUrl('Binary Tree Paths') },

    // TREE - Medium (15)
    { id: 190, topic: 'Tree', name: 'Binary Tree Level Order Traversal', difficulty: 'Medium', link: generateLeetCodeUrl('Binary Tree Level Order Traversal') },
    { id: 191, topic: 'Tree', name: 'Validate Binary Search Tree', difficulty: 'Medium', link: generateLeetCodeUrl('Validate Binary Search Tree') },
    { id: 192, topic: 'Tree', name: 'Kth Smallest Element in a BST', difficulty: 'Medium', link: generateLeetCodeUrl('Kth Smallest Element in a BST') },
    { id: 193, topic: 'Tree', name: 'Construct Binary Tree from Preorder and Inorder', difficulty: 'Medium', link: generateLeetCodeUrl('Construct Binary Tree from Preorder and Inorder Traversal') },
    { id: 194, topic: 'Tree', name: 'Binary Tree Right Side View', difficulty: 'Medium', link: generateLeetCodeUrl('Binary Tree Right Side View') },
    { id: 195, topic: 'Tree', name: 'Flatten Binary Tree to Linked List', difficulty: 'Medium', link: generateLeetCodeUrl('Flatten Binary Tree to Linked List') },
    { id: 196, topic: 'Tree', name: 'Populating Next Right Pointers', difficulty: 'Medium', link: generateLeetCodeUrl('Populating Next Right Pointers in Each Node') },
    { id: 197, topic: 'Tree', name: 'Lowest Common Ancestor of Binary Tree', difficulty: 'Medium', link: generateLeetCodeUrl('Lowest Common Ancestor of a Binary Tree') },
    { id: 198, topic: 'Tree', name: 'Binary Tree Zigzag Level Order Traversal', difficulty: 'Medium', link: generateLeetCodeUrl('Binary Tree Zigzag Level Order Traversal') },
    { id: 199, topic: 'Tree', name: 'Path Sum II', difficulty: 'Medium', link: generateLeetCodeUrl('Path Sum II') },
    { id: 200, topic: 'Tree', name: 'Sum Root to Leaf Numbers', difficulty: 'Medium', link: generateLeetCodeUrl('Sum Root to Leaf Numbers') },
    { id: 201, topic: 'Tree', name: 'Count Good Nodes in Binary Tree', difficulty: 'Medium', link: generateLeetCodeUrl('Count Good Nodes in Binary Tree') },
    { id: 202, topic: 'Tree', name: 'Delete Node in a BST', difficulty: 'Medium', link: generateLeetCodeUrl('Delete Node in a BST') },
    { id: 203, topic: 'Tree', name: 'All Nodes Distance K in Binary Tree', difficulty: 'Medium', link: generateLeetCodeUrl('All Nodes Distance K in Binary Tree') },
    { id: 204, topic: 'Tree', name: 'House Robber III', difficulty: 'Medium', link: generateLeetCodeUrl('House Robber III') },

    // TREE - Hard (8)
    { id: 205, topic: 'Tree', name: 'Serialize and Deserialize Binary Tree', difficulty: 'Hard', link: generateLeetCodeUrl('Serialize and Deserialize Binary Tree') },
    { id: 206, topic: 'Tree', name: 'Binary Tree Maximum Path Sum', difficulty: 'Hard', link: generateLeetCodeUrl('Binary Tree Maximum Path Sum') },
    { id: 207, topic: 'Tree', name: 'Recover Binary Search Tree', difficulty: 'Hard', link: generateLeetCodeUrl('Recover Binary Search Tree') },
    { id: 208, topic: 'Tree', name: 'Binary Tree Cameras', difficulty: 'Hard', link: generateLeetCodeUrl('Binary Tree Cameras') },
    { id: 209, topic: 'Tree', name: 'Vertical Order Traversal of Binary Tree', difficulty: 'Hard', link: generateLeetCodeUrl('Vertical Order Traversal of a Binary Tree') },
    { id: 210, topic: 'Tree', name: 'Count Complete Tree Nodes', difficulty: 'Hard', link: generateLeetCodeUrl('Count Complete Tree Nodes') },
    { id: 211, topic: 'Tree', name: 'Largest BST Subtree', difficulty: 'Hard', link: generateLeetCodeUrl('Largest BST Subtree') },
    { id: 212, topic: 'Tree', name: 'Binary Tree Postorder Traversal', difficulty: 'Hard', link: generateLeetCodeUrl('Binary Tree Postorder Traversal') },

    // GRAPH - Easy (8)
    { id: 213, topic: 'Graph', name: 'Find the Town Judge', difficulty: 'Easy', link: generateLeetCodeUrl('Find the Town Judge') },
    { id: 214, topic: 'Graph', name: 'Find Center of Star Graph', difficulty: 'Easy', link: generateLeetCodeUrl('Find Center of Star Graph') },
    { id: 215, topic: 'Graph', name: 'Find if Path Exists in Graph', difficulty: 'Easy', link: generateLeetCodeUrl('Find if Path Exists in Graph') },
    { id: 216, topic: 'Graph', name: 'Island Perimeter', difficulty: 'Easy', link: generateLeetCodeUrl('Island Perimeter') },
    { id: 217, topic: 'Graph', name: 'Flood Fill', difficulty: 'Easy', link: generateLeetCodeUrl('Flood Fill') },
    { id: 218, topic: 'Graph', name: 'Number of Connected Components', difficulty: 'Easy', link: generateLeetCodeUrl('Number of Connected Components') },
    { id: 219, topic: 'Graph', name: 'Verifying an Alien Dictionary', difficulty: 'Easy', link: generateLeetCodeUrl('Verifying an Alien Dictionary') },
    { id: 220, topic: 'Graph', name: 'Maximum Depth of N-ary Tree', difficulty: 'Easy', link: generateLeetCodeUrl('Maximum Depth of N-ary Tree') },

    // GRAPH - Medium (18)
    { id: 221, topic: 'Graph', name: 'Number of Islands', difficulty: 'Medium', link: generateLeetCodeUrl('Number of Islands') },
    { id: 222, topic: 'Graph', name: 'Clone Graph', difficulty: 'Medium', link: generateLeetCodeUrl('Clone Graph') },
    { id: 223, topic: 'Graph', name: 'Course Schedule', difficulty: 'Medium', link: generateLeetCodeUrl('Course Schedule') },
    { id: 224, topic: 'Graph', name: 'Course Schedule II', difficulty: 'Medium', link: generateLeetCodeUrl('Course Schedule II') },
    { id: 225, topic: 'Graph', name: 'Pacific Atlantic Water Flow', difficulty: 'Medium', link: generateLeetCodeUrl('Pacific Atlantic Water Flow') },
    { id: 226, topic: 'Graph', name: 'Graph Valid Tree', difficulty: 'Medium', link: generateLeetCodeUrl('Graph Valid Tree') },
    { id: 227, topic: 'Graph', name: 'Surrounded Regions', difficulty: 'Medium', link: generateLeetCodeUrl('Surrounded Regions') },
    { id: 228, topic: 'Graph', name: 'Redundant Connection', difficulty: 'Medium', link: generateLeetCodeUrl('Redundant Connection') },
    { id: 229, topic: 'Graph', name: 'Number of Provinces', difficulty: 'Medium', link: generateLeetCodeUrl('Number of Provinces') },
    { id: 230, topic: 'Graph', name: 'Accounts Merge', difficulty: 'Medium', link: generateLeetCodeUrl('Accounts Merge') },
    { id: 231, topic: 'Graph', name: 'Network Delay Time', difficulty: 'Medium', link: generateLeetCodeUrl('Network Delay Time') },
    { id: 232, topic: 'Graph', name: 'Cheapest Flights Within K Stops', difficulty: 'Medium', link: generateLeetCodeUrl('Cheapest Flights Within K Stops') },
    { id: 233, topic: 'Graph', name: 'Evaluate Division', difficulty: 'Medium', link: generateLeetCodeUrl('Evaluate Division') },
    { id: 234, topic: 'Graph', name: 'Minimum Height Trees', difficulty: 'Medium', link: generateLeetCodeUrl('Minimum Height Trees') },
    { id: 235, topic: 'Graph', name: 'Possible Bipartition', difficulty: 'Medium', link: generateLeetCodeUrl('Possible Bipartition') },
    { id: 236, topic: 'Graph', name: 'Keys and Rooms', difficulty: 'Medium', link: generateLeetCodeUrl('Keys and Rooms') },
    { id: 237, topic: 'Graph', name: 'All Paths From Source to Target', difficulty: 'Medium', link: generateLeetCodeUrl('All Paths From Source to Target') },
    { id: 238, topic: 'Graph', name: 'Detonate the Maximum Bombs', difficulty: 'Medium', link: generateLeetCodeUrl('Detonate the Maximum Bombs') },

    // GRAPH - Hard (12)
    { id: 239, topic: 'Graph', name: 'Word Ladder', difficulty: 'Hard', link: generateLeetCodeUrl('Word Ladder') },
    { id: 240, topic: 'Graph', name: 'Word Ladder II', difficulty: 'Hard', link: generateLeetCodeUrl('Word Ladder II') },
    { id: 241, topic: 'Graph', name: 'Alien Dictionary', difficulty: 'Hard', link: generateLeetCodeUrl('Alien Dictionary') },
    { id: 242, topic: 'Graph', name: 'Reconstruct Itinerary', difficulty: 'Hard', link: generateLeetCodeUrl('Reconstruct Itinerary') },
    { id: 243, topic: 'Graph', name: 'Swim in Rising Water', difficulty: 'Hard', link: generateLeetCodeUrl('Swim in Rising Water') },
    { id: 244, topic: 'Graph', name: 'Critical Connections in a Network', difficulty: 'Hard', link: generateLeetCodeUrl('Critical Connections in a Network') },
    { id: 245, topic: 'Graph', name: 'Minimum Cost to Connect All Points', difficulty: 'Hard', link: generateLeetCodeUrl('Minimum Cost to Connect All Points') },
    { id: 246, topic: 'Graph', name: 'Shortest Path to Get All Keys', difficulty: 'Hard', link: generateLeetCodeUrl('Shortest Path to Get All Keys') },
    { id: 247, topic: 'Graph', name: 'Longest Increasing Path in a Matrix', difficulty: 'Hard', link: generateLeetCodeUrl('Longest Increasing Path in a Matrix') },
    { id: 248, topic: 'Graph', name: 'Bus Routes', difficulty: 'Hard', link: generateLeetCodeUrl('Bus Routes') },
    { id: 249, topic: 'Graph', name: 'Find the Shortest Superstring', difficulty: 'Hard', link: generateLeetCodeUrl('Find the Shortest Superstring') },
    { id: 250, topic: 'Graph', name: 'Making A Large Island', difficulty: 'Hard', link: generateLeetCodeUrl('Making A Large Island') },
];

// Get all unique topics
export const topics = [
    'Array',
    'Searching',
    'Recursion',
    'String',
    'Stack',
    'Queue',
    'Linked List',
    'Tree',
    'Graph',
];

// Get all difficulties
export const difficulties = ['Easy', 'Medium', 'Hard'];

// Topic color mapping for charts
export const topicColors = {
    'Array': 'hsl(270, 70%, 50%)',
    'Searching': 'hsl(280, 100%, 65%)',
    'Recursion': 'hsl(300, 70%, 50%)',
    'String': 'hsl(320, 70%, 50%)',
    'Stack': 'hsl(200, 70%, 50%)',
    'Queue': 'hsl(180, 70%, 50%)',
    'Linked List': 'hsl(160, 70%, 50%)',
    'Tree': 'hsl(140, 70%, 50%)',
    'Graph': 'hsl(100, 70%, 50%)',
};
