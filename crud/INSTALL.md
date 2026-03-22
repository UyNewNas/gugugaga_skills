
# CRUD Skill Installation Guide

## Method 1: Manual Installation (Recommended)

### 1. Copy the skill to OpenClaw skills directory

```bash
# Windows
xcopy /E /I crud %USERPROFILE%\.openclaw\skills\crud

# Linux/Mac
cp -r crud ~/.openclaw/skills/crud
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
clawdhub install crud
```

---

## Configuration

This skill requires no additional configuration files and is automatically injected into sessions via `CLAUDE.md`.

### Optional: Custom Behavior

If you need to adjust approval thresholds, you can tell the AI directly in the session:
- "This file modification is simple, just execute it"
- "Don't require confirmation for files in this directory next time"

---

## Uninstall

```bash
# Windows
rmdir /S /Q %USERPROFILE%\.openclaw\skills\crud

# Linux/Mac
rm -rf ~/.openclaw/skills/crud
```
