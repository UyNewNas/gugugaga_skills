
# 🦞 CRUD Approval Mode - OpenClaw Skill

Categorize and manage OpenClaw operations by CRUD (Create/Read/Update/Delete) for both efficiency and security.

## 🎯 Design Philosophy

- **Efficiency First**: Create and Read are fully unrestricted, no blocked workflow
- **Safety Net**: Update, Edit, and Delete require secondary confirmation

## 📋 Classification Rules

| Operation Type | Approval Required | Description |
|---------------|------------------|-------------|
| **Create** | ❌ No approval | File creation, new skill creation, etc. |
| **Read** | ❌ No approval | File reading, search queries, etc. |
| **Update/Edit** | ✅ Requires confirmation | File modification, code editing, etc. |
| **Delete** | ✅ Requires confirmation | File deletion, directory deletion, etc. |

## 🚀 Quick Start

### Installation

```bash
# Copy to OpenClaw skills directory
cp -r crud ~/.openclaw/skills/crud

# Restart Gateway
openclaw restart
```

### Usage

Automatically effective after installation, no additional configuration needed.

## 📁 Directory Structure

```
crud/
├── SKILL.md      # Skill definition
├── CLAUDE.md      # Core instructions (auto-injected)
├── README.md     # This file
├── INSTALL.md    # Installation guide
└── EXAMPLES.md   # Usage examples
```

## 🔄 Workflow

### No Approval (Create/Read)
```
User Request → Execute Directly → Return Result
```

### Requires Approval (Update/Edit/Delete)
```
User Request → Analyze Operation → Generate Action List → User Confirmation → Execute Operation → Return Result
```

## 📝 Action List Example

```
⚠️ **Operation Confirmation Request**

**Operation Type:** Update/Edit
**Timestamp:** 2026-03-23 10:30:00

---

**📄 Affected Files:**
1. `main.py` - Modify port configuration

---

**📝 Operation Details:**
- Change the port number in main.py from current value to 8080

---

**Please select:**
- ✅ **Confirm** - Proceed with the above operation
- ❌ **Cancel** - Abandon this operation
- 🔄 **Modify Request** - Adjust operation and re-confirm
```

## 🦞 New Skill Creation

Creating new skills is a Create operation, no approval needed, but remind after creation:
&gt; 📝 Note: New skill created successfully. Manual review recommended before production use.

## 📚 References

- OpenClaw Documentation: https://docs.openclaw.ai/
- Reference Project: https://github.com/peterskoett/self-improving-agent

## 📄 License

MIT License
