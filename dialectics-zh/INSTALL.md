
# 辩证法技能 - 安装指南

## 前置要求

- OpenClaw 正常运行
- 无需额外依赖

---

## 方式一：手动安装（推荐）

### 1. 将技能复制到 OpenClaw 技能目录

```powershell
# Windows
xcopy /E /I dialectics-zh %USERPROFILE%\.openclaw\skills\dialectics-zh

# Linux/Mac
cp -r dialectics-zh ~/.openclaw/skills/dialectics-zh
```

### 2. 重启 OpenClaw Gateway

```bash
# 重启 Gateway 服务
openclaw restart
```

### 3. 验证安装

打开 OpenClaw Dashboard，检查技能是否已加载：
http://127.0.0.1:18789/

---

## 方式二：通过 ClawdHub 安装（如果已发布）

```bash
clawdhub install dialectics-zh
```

---

## 使用验证

### 测试辩证思考

向 OpenClaw 提问：
- "如何看待远程办公？利大于弊还是弊大于利？"
- "公司应该追求创新还是稳定？"
- "人工智能会取代人类工作吗？"

观察回答是否：
- 识别了矛盾
- 构建了正题和反题
- 提供了合题和综合方案
- 具有深度和启发性

---

## 与其他技能的协同

### 与反驳型人格协同

辩证法技能可以与"反驳型人格"技能配合使用：
- 辩证法使用"反驳型人格"作为反题构建的强化工具
- 反驳型人格为辩证法提供批判基础
- 辩证法为反驳提供整合目标

### 使用建议

- 简单问题：不使用任何技能，直接回答
- 需要稳健性的方案：使用反驳型人格
- 复杂矛盾、战略决策：使用辩证法技能

---

## 卸载

```powershell
# Windows
rmdir /S /Q %USERPROFILE%\.openclaw\skills\dialectics-zh

# Linux/Mac
rm -rf ~/.openclaw/skills/dialectics-zh
```
