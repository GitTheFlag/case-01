# 🚩 Git The Flag — Case 01: Welcome to the Team

> **For beginners. No experience needed.**
> If you have never used git before, you are in the right place.

---

## What is this?

This is a **git learning game**. You will explore a project left behind by
a small dev team using git commands in your terminal.

Git is a tool that tracks changes to files over time. Think of it as a
time machine for your code — you can see what changed, who changed it,
and go back to any point in history.

In this case, you have just joined a remote team. Your manager said:
*"Clone the repo, read everything, explore every branch.
Your onboarding checklist is hidden in there somewhere."*

---

## Before you start

You need git installed on your computer.
Check by opening a terminal and typing:

```bash
git --version
```

If you see a version number, you are ready.
If not, download git from https://git-scm.com

---

## Step 1 — Get the project (clone)

**Cloning** means downloading a copy of the repo to your computer.

```bash
git clone https://github.com/GitTheFlag/case-01
cd case-01
```

`git clone` downloads everything — all files, all history, all branches.
`cd case-01` moves you inside the folder.

---

## Step 2 — Look around

```bash
ls
```

You will see the files in the project. Read them — there is information
hidden in plain sight.

---

## Step 3 — See all branches

A **branch** is like a parallel version of the project. Teams use branches
to work on different things at the same time without breaking each other's work.

```bash
git branch -a
```

The `-a` flag means "show all branches" — including ones on GitHub that
you have not opened yet.

---

## Step 4 — Switch to a branch

```bash
git checkout <branch-name>
```

Replace `<branch-name>` with the name of the branch you want to explore.
Then run `ls` again — the files will be different on each branch.

---

## Step 5 — Read the history

```bash
git log --oneline
```

This shows every change (commit) ever made on the current branch.
Each line is one save point — a message and a unique ID.

---

## Step 6 — See what changed

```bash
git diff main..<branch-name>
```

This shows the difference between two branches — what was added or removed.

---

## Objectives

Find all 4 flags hidden across the repo. Each one teaches you one git command.
When you find a flag, open an [Issue](../../issues/new) with the flag as the title.

| # | Hint | Command to use |
|---|------|----------------|
| 1 | Something is waiting for you in the project files | `ls`, read files |
| 2 | The team left notes on another branch | `git branch -a`, `git checkout` |
| 3 | Every save has a message — read them | `git log --oneline` |
| 4 | What is the difference between branches? | `git diff` |
| 5 | **Final:** Add your name to `TEAM.md` and open a Pull Request | `git add`, `commit`, `push` |

---

## How to submit a flag

Open a new [Issue](../../issues/new) and use the flag as the title:

```
GTF{the_flag_you_found}
```

A bot will reply instantly to tell you if you are right. ✅

---

## Glossary

| Word | What it means |
|------|--------------|
| **repo** | Short for repository — a folder tracked by git |
| **clone** | Download a repo to your computer |
| **branch** | A parallel version of the project |
| **commit** | A saved snapshot of changes |
| **push** | Upload your changes to GitHub |
| **pull request** | A request to merge your changes into the main project |
