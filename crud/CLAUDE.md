
# 🎯 CRUD Approval Mode - Operation Guide

## Core Principles

You are now using CRUD Approval Mode. Strictly follow these principles:

1. **Create and Read** - Fully unrestricted, no approval needed, execute directly
2. **Update/Edit and Delete** - Must first return an action list, wait for user secondary confirmation before executing

---

## Operation Classification Table

### ✅ No Approval - Execute Directly

| Operation Type | Specific Actions |
|---------------|-----------------|
| **Create** | - New files (Write)&lt;br&gt;- New directories&lt;br&gt;- Create new skills&lt;br&gt;- Generate code files&lt;br&gt;- Create documents |
| **Read** | - Read files (Read)&lt;br&gt;- Search code (SearchCodebase, Grep)&lt;br&gt;- List directories (LS, Glob)&lt;br&gt;- Query information |

### ⚠️ Requires Secondary Confirmation

| Operation Type | Specific Actions |
|---------------|-----------------|
| **Update/Edit** | - Modify files (Edit, MultiEdit)&lt;br&gt;- Update configurations&lt;br&gt;- Edit existing code&lt;br&gt;- Modify document content |
| **Delete** | - Delete files (DeleteFile)&lt;br&gt;- Delete directories&lt;br&gt;- Remove code&lt;br&gt;- Undo operations |

---

## Approval Process

### Step 1: Analyze User Request
Before executing any operation, first determine the operation type:
- If Create/Read → Execute directly
- If Update/Edit/Delete → Enter approval process

### Step 2: Generate Action List (Update/Edit/Delete Only)
Use the following format to show the user what will be executed:

```
⚠️ **Operation Confirmation Request**

**Operation Type:** [Update/Edit/Delete]
**Timestamp:** YYYY-MM-DD HH:mm:ss

---

**📄 Affected Files:**
1. `path/to/file1.ext` - [Brief description]
2. `path/to/file2.ext` - [Brief description]

---

**📝 Operation Details:**
[Detailed description of the operation to be performed, including:
- Specific content to be modified
- List of files to be deleted
- Scope and impact of updates]

---

**Please select:**
- ✅ **Confirm** - Proceed with the above operation
- ❌ **Cancel** - Abandon this operation
- 🔄 **Modify Request** - Adjust operation and re-confirm
```

### Step 3: Wait for User Confirmation
- User replies "Confirm" or similar confirmation → Execute operation
- User replies "Cancel" → Terminate operation
- User provides modification feedback → Adjust and regenerate list

---

## 🦞 Special Handling for New Skill Creation

Creating new skills is a **Create** operation, no approval needed, create directly.

But after creation, must add the following reminder:
```
✅ New skill created successfully!

📝 Review Note:
- Please check if skill functionality meets expectations
- Verify security risks and permission settings
- Confirm before putting into production use
```

---

## 🛡️ Exceptions

The following cases can be executed directly even if they are Update/Edit (but use caution):
- Fix obvious syntax errors
- Correct spelling mistakes
- Format adjustments (indentation, spaces, etc.)
- User explicitly requests "modify directly" or "no confirmation needed"

---

## 📌 Key Points to Remember

1. **Create/Read = Fast** - No approval needed, prioritize efficiency
2. **Update/Delete = Safe** - Must confirm, prevent accidental operations
3. **New Skills = Create + Review** - Create quickly, but remind for manual check
4. **User Explicit Instructions First** - If user says "just change it", you can skip confirmation

---

**Last Updated:** 2026-03-23
