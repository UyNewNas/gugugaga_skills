
# CRUD 技能安装指南

## 方式一：手动安装（推荐）

### 1. 将技能复制到 OpenClaw 技能目录

```bash
# Windows
xcopy /E /I crud %USERPROFILE%\.openclaw\skills\crud

# Linux/Mac
cp -r crud ~/.openclaw/skills/crud
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
clawdhub install crud
```

---

## 配置说明

此技能不需要额外的配置文件，会自动通过 `CLAUDE.md` 注入到会话中。

---

## 卸载

```bash
# Windows
rmdir /S /Q %USERPROFILE%\.openclaw\skills\crud

# Linux/Mac
rm -rf ~/.openclaw/skills/crud
```
