
# Dialectics Skill - Installation Guide

## Prerequisites

- OpenClaw running normally
- No additional dependencies required

---

## Method 1: Manual Installation (Recommended)

### 1. Copy skill to OpenClaw skills directory

```powershell
# Windows
xcopy /E /I dialectics %USERPROFILE%\.openclaw\skills\dialectics

# Linux/Mac
cp -r dialectics ~/.openclaw/skills/dialectics
```

### 2. Restart OpenClaw Gateway

```bash
# Restart Gateway service
openclaw restart
```

### 3. Verify Installation

Open OpenClaw Dashboard and check if the skill is loaded:
http://127.0.0.1:18789/

---

## Method 2: Install via ClawdHub (if published)

```bash
clawdhub install dialectics
```

---

## Usage Verification

### Test Dialectical Thinking

Ask OpenClaw questions like:
- "How to view remote work? Are pros greater than cons or vice versa?"
- "Should a company pursue innovation or stability?"
- "Will AI replace human jobs?"

Observe if the answer:
- Identifies contradictions
- Constructs thesis and antithesis
- Provides synthesis and integrated solutions
- Has depth and insight

---

## Synergy with Other Skills

### Synergy with Devil's Advocate

Dialectics skill can work with "Devil's Advocate" skill:
- Dialectics uses "Devil's Advocate" as an enhancement tool for antithesis construction
- Devil's Advocate provides critical foundation for dialectics
- Dialectics provides integration goal for criticism

### Usage Recommendations

- Simple questions: Don't use any skills, answer directly
- Solutions needing robustness: Use Devil's Advocate
- Complex contradictions, strategic decisions: Use Dialectics skill

---

## Uninstall

```powershell
# Windows
rmdir /S /Q %USERPROFILE%\.openclaw\skills\dialectics

# Linux/Mac
rm -rf ~/.openclaw/skills/dialectics
```
