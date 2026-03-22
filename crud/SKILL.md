
---
name: crud
description: CRUD Approval Mode - Categorize OpenClaw operations by CRUD, allow Create/Read freely, require confirmation for Update/Edit/Delete
metadata:
  version: 1.0.0
  author: gugugaga
  category: governance
  tags: [approval, security, crud, workflow]
---

# CRUD Approval Mode Skill

Categorize and manage OpenClaw operations by CRUD (Create/Read/Update/Delete) for fine-grained approval control.

## Core Design Philosophy

- **Create + Read**: Fully unrestricted for maximum efficiency
- **Update + Edit + Delete**: Add an isolation layer, return action list for secondary confirmation

## Category Definitions

| Operation Type | Approval Required | Description |
|---------------|------------------|-------------|
| **Create** | ❌ No approval | File creation, new skill creation (review after creation), directory creation, etc. |
| **Read** | ❌ No approval | File reading, search queries, directory browsing, etc. |
| **Update/Edit** | ✅ Requires confirmation | File modification, code editing, config updates, etc. |
| **Delete** | ✅ Requires confirmation | File deletion, directory deletion, skill deletion, etc. |

## Workflow

### 1. No Approval Flow (Create/Read)
```
User Request → Execute Directly → Return Result
```

### 2. Approval Flow (Update/Edit/Delete)
```
User Request → Analyze Operation → Generate Action List → User Confirmation → Execute Operation → Return Result
                            ↓
                       Display: operation type, affected files, change preview
```

## Action List Format

When confirmation is needed, return the list in the following format:

```
⚠️ **Operation Confirmation** - [Operation Type]

**Scope:**
- File 1: path/to/file1
- File 2: path/to/file2

**Description:**
[Detailed description of the operation to be performed]

Please reply with one of the following to continue:
- ✅ **Confirm** - Proceed with this operation
- ❌ **Cancel** - Cancel this operation
- 🔄 **Modify** - Modify operation and re-confirm
```

## Special Handling for New Skill Creation

Creating new skills is a Create operation, fully unrestricted, but remind after creation:
&gt; 📝 Note: New skill created successfully. Manual review recommended before production use.

## Use Cases

- Daily development: Quick create and read without approval restrictions
- Critical modifications: Confirmation mechanism before important file changes
- Skill development: Easy new skill creation while retaining review rights

## Configuration

This skill requires no additional configuration files and is automatically injected into sessions.

---

## References

- OpenClaw Documentation: https://docs.openclaw.ai/
- Reference Project: https://github.com/peterskoett/self-improving-agent
