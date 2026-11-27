---
layout: post
title: "Graviton Interview Writeup"
date: 2026-09-02
description: "A Detailed Walkthrough of my Interview Process at Graviton"
tags: [interview, experience, quant]
---

- **Role**: SDE Intern (Quant Tools)
- **Process Type**: On-campus Process, Both online and offline interviews

---

## Test Round: Online Assessment

- **Platform**: HackerRank
- **Duration**: 1 Hour
- **Number of Questions**: 10 MCQs + 2 Coding Questions

### Description

Both sections were timed: 15/20 Minutes for MCQs and 40/45 Minutes for OA. Within a section, you can jump to other questions, but once you submit a section, you can't go back to it.

12 People were shortlisted from the OA for interviews.

- **MCQs**: 10 MCQs on the topics of OOPS (Python), Probability, and OS. These MCQs were fairly simple and can be solved with basic knowledge.
- **Coding Questions**:

#### Question 1

You are given a string `k` and a vector of strings called `dictionary`. You have to return the word from the dictionary that has the longest common substring, and if two words have the same length, return the one that is lexicographically smallest.

**Constraints:**

- `1 <= dictionary.length <= 6`
- `1 <= Length of k <= 1e5`
- `1 <= length of a string in dictionary <= 1e5`

**Solution:** I don’t think anyone has found a perfect solution in O(n) or O(n log n) time during the OA. I used binary search from the longest possible substring length to the shortest, and tried to find the answer from that. Technically, this is O(n² log n), but it passed all the test cases if you optimized well enough. So, I would suggest that even if you can't find a solution, write a brute-force approach and try optimizing it with techniques like binary search, prefix sums, etc., since your scores depend on the number of test cases passed. There was also a question in Graviton 2025 Intern Cycle OA that the constraints should have led for O(n²) but O(n³) also passed all test cases.

**Topics Covered:** Strings, Binary Search

#### Question 2: Job Sequencing with Deadlines Problem

You have `n` tasks. Each task has:

- `deadline[i]` — must be completed by this deadline
- `reward[i]` — reward earned if completed before/on the deadline
- Every task takes **1 unit of time**
- Only one task can be done at a time

Find the **maximum total reward**.

**Constraints:**

- `1 <= deadline.length == reward.length <= 1000`
- `1 <= deadline[i] <= deadline.length`

**Solution:** Process tasks in decreasing order of reward, and put each task in the latest available slot before its deadline. O(n²) solution.

**Topics Covered:** Greedy, Sorting

---

## Interview Round

**Venue**: Round 1 and 2 were offline. Round 3 was taken by a Team Lead online, and Round 4 was taken by the Head HR from Gurugram online. 1st and 2nd Rounds went for about an hour each. After that, Round 3 and 4 were around 20-30 mins each.

### 1. Round 1

There were two parts in the first round.

**Part 1: Resume Discussion**
Usually, this is a discussion about your internships rather than your projects. We discussed my Internship work in Computer Vision (later on, I found out that my Interviewer has published research in CV as well).

**Part 2: DSA Question**
You will be asked to write pseudocode and manually run test cases.

**Question:** You have `n` apps. Each app uses a certain amount of memory and has a cost to delete. This cost can only be either 1 or 2. You have to delete at least `m` memory, but minimize the cost.

**Solution 1 (Interviewer’s Solution):**
Split the apps into two separate arrays based on their deletion cost:

- `cost1`: memory values of apps with deletion cost 1
- `cost2`: memory values of apps with deletion cost 2

Sort both arrays in **descending order** and construct prefix-sum arrays for each. The prefix sum tells us the total memory freed by deleting the first `k` apps from either array.
Now, iterate over the number of cost-1 apps we choose to delete. For each choice, calculate the remaining memory that needs to be freed. Use **binary search** on the prefix-sum array of cost-2 apps to find the minimum number of cost-2 apps required to reach the target memory.
For each combination, calculate the total deletion cost:
`cost = (# cost-1 apps) × 1 + (# cost-2 apps) × 2`
Take the minimum cost among all valid combinations.

**Solution 2 (My Solution, also correct):**
Split the apps into two separate arrays based on their deletion cost:

- `cost1`: memory values of apps with deletion cost 1
- `cost2`: memory values of apps with deletion cost 2

Sort both arrays in descending order and maintain pointers at the beginning of each array.
At each step, determine whether the required threshold can be reached by taking only one element. If so, add a cost of 1 and return the current total cost.
Otherwise, incur a cost of 2 and choose the option that frees more memory:

- Free two elements from the first array and advance its pointer by 2, or
- Free one element from the second array and advance its pointer by 1.

Choose whichever option frees more memory. After each operation, check whether the required threshold has been reached. If either array is exhausted, continue using elements from the remaining array until the threshold is crossed.

Overall Time Complexity of both algorithms is O(n log n), but the greedy part in my solution is faster and easier than the prefix sum + binary search from the interviewer's solution. To verify the solution, my interviewer made me run 5 test cases. After that, I was moved to Round 2. I was made to wait for the 2nd Round inside the 1st Interview room itself. This was the case with everyone moving to the next round. Make sure to make small talk with your interviewer, like what type of tools he/she works on, etc. He also went through further on my resume, and later we discussed both of our research works in Computer Vision.

### 2. Round 2

There were two parts to this round as well.

**Part 1: System Design / Implementation Question**
I was asked to implement a File System and some common Linux commands in that File System in Pseudocode. You can use a Tree and a Linked List for this question. I only implemented the code for the Tree Nodes and for the `mkdir` function. After that, I was able to just show changes in my `mkdir` function for other functions like `ls`, `mv`, etc., which the interviewer accepted. A key question asked during this interview was when my `mkdir` function would fail (Answer: when the directory path is invalid and/or there isn't enough space left on the disk). Figuring out failure/edge cases will remain key for system design.

**Part 2: DSA Question**
I was just asked to provide an approach for it, not pseudocode.

**Question:** Given a string `s` of `n` lowercase letters and an integer `k`, assign its characters to `k` colors, with each color containing at least one character. The characters assigned to each color must be rearrangeable to form a palindrome. Characters may be left unassigned. The objective is to **maximize the minimum length** among the `k` palindromes formed.

**Constraints:**

- `1 <= n <= 1e6`
- `1 <= k <= n`

**Approach:** Maintain the frequency of each letter and count the number of odd frequencies. Since each color's characters must form a palindrome, each color can have at most one odd-frequency character. First, use the available odd occurrences as centers for up to `k` palindromes; if there are more than `k` odd frequencies, the excess odd occurrences cannot be used as centers and are effectively left unpaired. After handling the odd occurrences, convert all remaining characters into pairs. Distribute these pairs as evenly as possible among the `k` colors, since every pair adds 2 characters while preserving the palindrome property. The goal is to maximize the minimum length, so we distribute the available pairs uniformly and compute the maximum achievable minimum length.

### 3. Round 3

This was an online meeting with the Team Lead. He asked about my CPI, JEE Rank, and Codeforces Rating. He opened my Resume and reviewed it. We then discussed 1 of my projects and some questions about why I used `unordered_map` instead of an ordered `map`. We also discussed further on the structure of a `std::unordered_map` and a `std::map` and the rotation in an AVL Tree during insertions/deletions. After that, he asked me two HR type questions:

- Why Graviton?
- Tell me one of your strengths and one of your weaknesses.

For the Why Graviton question, you need to basically show how your interests align with the company's goals and how their values resonate with yours. It's not about just saying you like their work, but about demonstrating that you've done your research.

For the strength and weakness question, I told them my strength is Algorithmic thinking since I've been doing a lot of Codeforces and made it to the finals of a Jane Street sponsored CP Competition. I told them my weakness is that I haven't learnt about Machine Learning in deep and only know how to directly use the models in my code, not how the models work. The interviewer accepted both of my answers and also told me that it's not necessary to know machine learning in depth as long as you know how to use the models as a certain level of abstraction in things will always be required.

### 4. Round 4

This was a meeting with Graviton's Head of HR, Diksha Singh. You have to introduce yourself. She asked me about why I am interested in the SDE Role for Graviton and why Graviton. After justifying this, we made some small talk about where I am from and my past history of doing coding from a young age. For the ‘me asking a question part’, I asked her about the reason for the creation and expansion of the GIFT office rather than just keeping the Gurugram office, as this would create logistical, communication, etc., constraints on them. I was then told about new SEBI regulations that require them to have an office in GIFT City with a specified workforce.

---

## Final Tips & Takeaways

### Challenges & Improvements

- Don’t panic if the HR/Interviewer forces you to remain in the room after the interview is over. This means there is another interview scheduled for you. Talk to the interviewer about the work they are doing.
- Have a good question prepared for both the Technical and HR rounds.
- Mention your Codeforces Rating in the third round during your introduction if it is good. It is taken positively, but don’t make it your entire personality/introduction.

### Mistakes to Avoid

- **PLEASE DO CODEFORCES FROM YOUR 1ST/2ND YEAR (AS EARLY AS POSSIBLE).** DSA CANNOT BE LEARNT IN A 3-MONTH SUMMER VACATION.

### Learning Resources

- Codeforces
- CSES Problems
- Striver Sheet
- Operating Systems Playlist by Algozenith (YouTube)
