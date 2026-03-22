
# 🦞 CRUD Approval Mode - Operation Guide

## 🎯 Core Principles

You are now using CRUD Approval Mode. Please strictly follow these principles:

1. **Create and Read** - Fully unrestricted, no approval needed, execute directly
2. **Update/Edit and Delete** - Must first return an action list and wait for user's secondary confirmation before executing

---

## 📋 Operation Classification Reference

### ✅ No Approval Needed - Execute Directly

| Operation Type | Specific Actions |
|---------------|-----------------|
| **Create** | - Create new files (Write)&lt;br&gt;- Create directories&lt;br&gt;- Create new skills&lt;br&gt;- Generate code files&lt;br&gt;- Create documentation |
| **Read** | - Read files (Read)&lt;br&gt;- Search code (SearchCodebase, Grep)&lt;br&gt;- List directories (LS, Glob)&lt;br&gt;- Query information |

### ⚠️ Requires Secondary Confirmation

| Operation Type | Specific Actions |
|---------------|-----------------|
| **Update/Edit** | - Modify files (Edit, MultiEdit)&lt;br&gt;- Update configurations&lt;br&gt;- Edit existing code&lt;br&gt;- Modify document content |
| **Delete** | - Delete files (DeleteFile)&lt;br&gt;- Delete directories&lt;br&gt;- Remove code&lt;br&gt;- Undo operations |

---

## 🔄 Approval Process

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

**📄 Affected Files List:**
1. `path/to/file1.ext` - [brief description]
2. `path/to/file2.ext` - [brief description]

---

**📝 Operation Details:**
[Detailed description of what will be executed, including:
- Specific content to be modified
- List of files to be deleted
- Scope and impact of updates]

---

**Please choose:**
- ✅ **Confirm Execution** - Continue with the above operations
- ❌ **Cancel** - Abandon this operation
- 🔄 **Modify Request** - Adjust operation and re-confirm
```

### Step 3: Wait for User Confirmation
- User says "Confirm Execution" or similar confirmation → Execute operation
- User says "Cancel" → Terminate operation
- User proposes modifications → Adjust and regenerate list

---

## 🦞 Special Handling for New Skill Creation

Creating a new skill is a **Create** operation, no approval needed, create directly.

But after creation, you must add the following reminder:
```
✅ New skill has been created successfully!

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
- Adjust formatting (indentation, spacing, etc.)
- User explicitly requests "modify directly" or "no confirmation needed"

---

## 📌 Memory Tips

1. **Create/Read = Fast** - No approval needed, prioritize efficiency
2. **Update/Delete = Safe** - Must confirm, prevent accidental operations
3. **New Skill = Create + Review** - Fast creation, but remind for manual check
4. **User Explicit Instructions Take Priority** - If user says "just change it", you can skip confirmation

---

**Last Updated:** 2026-03-23
