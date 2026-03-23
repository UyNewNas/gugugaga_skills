# 📋 Company Policy Query - OpenClaw Skill

Query company attendance, behavior norms, information security and other policies at any time.

## ✨ Core Features

- **⏰ Attendance Management** - Check-in, work hours, leave, overtime, business trip processes
- **👔 Behavior Norms** - Service behavior, dress code, office discipline
- **🔒 Information Security** - Confidentiality, network security, elink usage norms
- **⚠️ Violation Cases** - Common violations and consequences
- **📞 Contact Information** - Project contacts and support channels

## 🚀 Quick Start

### Installation

```powershell
# Copy to OpenClaw skills directory
xcopy /E /I company-policy %USERPROFILE%\.openclaw\skills\company-policy

# Restart Gateway
openclaw restart
```

### Usage

Just ask questions about company policies:

- "How do I apply for leave?"
- "What's the overtime process?"
- "What are the check-in requirements?"
- "What happens if I forget to check in?"
- "What are the network security rules?"

## 📁 Directory Structure

```
company-policy/
├── SKILL.md      # Skill definition
├── CLAUDE.md      # Knowledge base (auto-injected)
├── README.md     # This file
└── EXAMPLES.md   # Usage examples
```

## 📚 Knowledge Base Coverage

### 01. Attendance System
- Multi-system parallel usage (elink, DingTalk, Tianyang APP, Face Recognition)
- Check-in requirements and time/location norms
- Work hours reporting guidelines
- Supplementary check-in process
- Leave process
- Overtime norms
- Business trip process
- Salary settlement

### 02. Behavior Norms & Information Security
- Confidentiality system
- Network security regulations
- elink operation norms
- Service behavior standards

### 03. Common Issues & Violation Cases
- Top 5 high-frequency violation scenarios
- Violation cost calculator

### 04. Project Contacts
- Primary contact for attendance issues
- Project leadership contact

## 💬 Usage Example

**You ask:** "How do I apply for leave?"

**AI responds:**
```
📋 Leave Application Process

Leave requires three steps:

1️⃣ Get approval from China Southern Power Grid project leader
   - This is the first step, ensure leave application meets project requirements

2️⃣ Submit leave application in elink
   - Fill in leave reason, time and other details
   - Ensure application process is complete

3️⃣ Submit leave application in Tianyang APP
   - Path: Workbench → Attendance Leave → Apply for Leave

⚠️ Important Notes:
- Must apply in advance, cannot be retroactive
- After approval, cannot withdraw or cancel
- No need to fill work hours on leave day
- Must sync to CSG project manager via elink or email
- Leave minimum unit: 0.5 day
- Leave 3+ days: must sync to CSG department head

💡 For half-day leave, remember to complete clock-in and clock-out in elink and Tianyang APP!
```

## 🎯 Quick Reference

### Key Time Points

| Item | Deadline |
|------|----------|
| Weekly work hours | Friday 10:00 PM |
| Monthly work hours | 15th of following month |
| Supplementary check-in (elink) | 10th of following month |
| Supplementary check-in (Tianyang APP) | 3 working days |
| Salary day | 15th of each month |

### Three Bottom Lines

1. ✅ Check in daily, fill work hours daily
2. ✅ Behavior norms are the bottom line
3. ✅ Report anomalies within 10 minutes

---

**New skill created successfully!** 🎉

📝 Note:
- This skill contains internal company policy knowledge
- Please ensure compliance when using
- Update knowledge base when policies change
