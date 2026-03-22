
# 地图查询技能 - 安装指南

## 前置要求

- Node.js &gt;= 18
- 至少一个地图服务商的 API Key

---

## 第一步：获取地图 API Key

### 高德地图（推荐）
1. 访问 https://lbs.amap.com/
2. 注册/登录账号
3. 进入控制台 → 应用管理 → 创建新应用
4. 添加 Key，选择「Web 服务」类型
5. 复制你的 API Key

### 百度地图
1. 访问 https://lbsyun.baidu.com/
2. 注册/登录账号
3. 进入控制台 → 创建应用
4. 选择「服务端」类型
5. 复制你的 AK

### 腾讯地图
1. 访问 https://lbs.qq.com/
2. 注册/登录账号
3. 进入控制台 → 应用管理 → 创建应用
4. 选择「WebService API」
5. 复制你的 Key

---

## 第二步：配置环境变量

### Windows (PowerShell)
```powershell
# 临时设置（当前终端有效）
$env:AMAP_KEY = "你的高德地图Key"
$env:BAIDU_MAP_KEY = "你的百度地图Key"
$env:TENCENT_MAP_KEY = "你的腾讯地图Key"

# 永久设置（需要重启终端）
[Environment]::SetEnvironmentVariable("AMAP_KEY", "你的高德地图Key", "User")
```

### Linux/Mac (Bash/Zsh)
```bash
# 临时设置（当前终端有效）
export AMAP_KEY="你的高德地图Key"
export BAIDU_MAP_KEY="你的百度地图Key"
export TENCENT_MAP_KEY="你的腾讯地图Key"

# 永久设置（添加到 ~/.bashrc 或 ~/.zshrc）
echo 'export AMAP_KEY="你的高德地图Key"' &gt;&gt; ~/.bashrc
source ~/.bashrc
```

---

## 第三步：安装技能

### 手动安装

```powershell
# 复制到 OpenClaw 技能目录
xcopy /E /I map-query %USERPROFILE%\.openclaw\skills\map-query
```

```bash
# Linux/Mac
cp -r map-query ~/.openclaw/skills/map-query
```

### 重启 OpenClaw Gateway

```bash
openclaw restart
```

---

## 第四步：验证安装

### 测试地址解析
```bash
node scripts/geocode.mjs "北京市朝阳区三里屯"
```

### 测试周边搜索
```bash
node scripts/search.mjs "广州市天河城" --type food --radius 1000
```

### 通过 AI 对话测试
打开 OpenClaw，尝试询问：
- "帮我查查上海南京路附近有什么好吃的"
- "北京三里屯最近有什么促销活动"

---

## 常见问题

### Q: API 调用失败怎么办？
A: 检查以下几点：
1. API Key 是否正确配置
2. API Key 是否有足够的配额
3. 网络连接是否正常

### Q: 地址定位不准确？
A: 尽量提供更详细的地址，包含省市区街道门牌号。

### Q: 可以同时使用多个地图服务商吗？
A: 可以！技能会自动选择可用的服务商，或者你可以指定使用某一个。

---

## 卸载

```powershell
# Windows
rmdir /S /Q %USERPROFILE%\.openclaw\skills\map-query

# Linux/Mac
rm -rf ~/.openclaw/skills/map-query
```
