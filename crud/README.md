
# 🦞 CRUD Approval Mode - OpenClaw Skill

Classify OpenClaw operations by CRUD (Create/Read/Update/Delete) for granular control, balancing efficiency and security.

## 🎯 Design Philosophy

**Pain Points Solved:**
- **Efficiency First**: Create and Read operations are unrestricted, no bottlenecks
- **Safety Net**: Update, Edit, and Delete operations require secondary confirmation

## 📋 Classification Rules

| Operation Type | Approval Required | Description |
|---------------|-------------------|-------------|
| **Create** | ❌ No Approval | File creation, new skill creation, etc. |
| **Read** | ❌ No Approval | File reading, search queries, etc. |
| **Update/Edit** | ✅ Requires Confirmation | File modification, code editing, etc. |
| **Delete** | ✅ Requires Confirmation | File deletion, directory removal, etc. |

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

### No Approval Needed (Create/Read)
```
User Request → Execute Directly → Return Result
```

### Approval Required (Update/Edit/Delete)
```
User Request → Analyze Operation → Generate Action List → User Confirmation → Execute Operation → Return Result
```

## 📝 Action List Example

```
⚠️ **Operation Confirmation Request**

**Operation Type:** Update/Edit
**Timestamp:** 2026-03-23 10:30:00

---

**📄 Affected Files List:**
1. `main.py` - Modify port configuration

---

**📝 Operation Details:**
- Change port number in main.py from current value to 8080

---

**Please choose:**
- ✅ **Confirm Execution** - Continue with the above operations
- ❌ **Cancel** - Abandon this operation
- 🔄 **Modify Request** - Adjust operation and re-confirm
```

## 🦞 New Skill Creation

Creating a new skill is a Create operation and doesn't require approval, but you will be reminded after creation:
&gt; 📝 Note: New skill has been created. It is recommended to perform manual review before putting into production use.

## 📚 Related Links

- OpenClaw Official Documentation: https://docs.openclaw.ai/
- Reference Project: https://github.com/peterskoett/self-improving-agent

## 📄 License

MIT License
