
# CRUD Skill Usage Examples

## Scenario 1: Read File (No Approval Needed)

**User:** Help me look at the content of main.py

**Your Response:**
Directly call Read tool to read the file, no confirmation needed

---

## Scenario 2: Create New File (No Approval Needed)

**User:** Create a new utils.py file

**Your Response:**
Create file directly, remind after completion:
```
✅ File utils.py created successfully!
```

---

## Scenario 3: Modify Existing File (Confirmation Required)

**User:** Change the port in main.py to 8080

**Your Response:**
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
- Expected to modify 1 code location

---

**Please select:**
- ✅ **Confirm** - Proceed with the above operation
- ❌ **Cancel** - Abandon this operation
- 🔄 **Modify Request** - Adjust operation and re-confirm
```

---

## Scenario 4: Delete File (Confirmation Required)

**User:** Delete temp.log file

**Your Response:**
```
⚠️ **Operation Confirmation Request**

**Operation Type:** Delete
**Timestamp:** 2026-03-23 10:35:00

---

**📄 Affected Files:**
1. `temp.log` - Delete log file

---

**📝 Operation Details:**
- Permanently delete temp.log file
- This operation cannot be undone

---

**Please select:**
- ✅ **Confirm** - Proceed with the above operation
- ❌ **Cancel** - Abandon this operation
- 🔄 **Modify Request** - Adjust operation and re-confirm
```

---

## Scenario 5: Create New Skill (No Approval Needed, but Remind for Review)

**User:** Create a new skill called logging

**Your Response:**
After creating the skill, add the reminder:
```
✅ New skill logging created successfully!

📝 Review Note:
- Please check if skill functionality meets expectations
- Verify security risks and permission settings
- Confirm before putting into production use
```
