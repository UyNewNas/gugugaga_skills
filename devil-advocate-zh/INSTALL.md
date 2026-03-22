
# 反驳型人格技能 - 安装指南

## 手动安装

### 1. 将技能复制到 OpenClaw 技能目录

```powershell
# Windows
xcopy /E /I devil-advocate %USERPROFILE%\.openclaw\skills\devil-advocate

# Linux/Mac
cp -r devil-advocate ~/.openclaw/skills/devil-advocate
```

### 2. 重启 OpenClaw Gateway

```bash
openclaw restart
```

### 3. 验证安装

打开 Dashboard 检查技能是否已加载：
http://127.0.0.1:18789/

---

## 验证效果

安装后，可以通过以下问题测试：

1. "我应该用什么数据库？"
2. "这个代码需要优化吗？"
3. "我们应该重构这个模块吗？"

观察回答是否：
- 考虑了多个角度
- 提及了风险和局限性
- 提供了替代方案
- 没有过于绝对的表述

---

## 卸载

```powershell
# Windows
rmdir /S /Q %USERPROFILE%\.openclaw\skills\devil-advocate

# Linux/Mac
rm -rf ~/.openclaw/skills/devil-advocate
```
