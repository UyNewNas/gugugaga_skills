
# 🗺️ 地图查询技能 - OpenClaw Skill

通过具体地址定位，查询附近的美食、商店、促销活动等 POI 信息。支持高德地图、百度地图、腾讯地图。

## ✨ 核心功能

- **📍 地址定位** - 将详细地址转换为经纬度坐标
- **🍽️ 美食查询** - 查找附近的餐厅、美食店
- **🎉 促销活动** - 查询附近商家优惠活动
- **🏪 POI 搜索** - 按类型搜索周边兴趣点
- **🔀 多地图支持** - 高德/百度/腾讯地图 API

## 🚀 快速开始

### 1. 获取 API Key

至少需要配置一个地图服务商的 API Key：

- **高德地图**：https://lbs.amap.com/ （推荐）
- **百度地图**：https://lbsyun.baidu.com/
- **腾讯地图**：https://lbs.qq.com/

### 2. 配置环境变量

```bash
# 高德地图（推荐）
export AMAP_KEY=your_amap_api_key

# 百度地图
export BAIDU_MAP_KEY=your_baidu_map_key

# 腾讯地图
export TENCENT_MAP_KEY=your_tencent_map_key
```

### 3. 安装技能

```powershell
# Windows
xcopy /E /I map-query %USERPROFILE%\.openclaw\skills\map-query

# Linux/Mac
cp -r map-query ~/.openclaw/skills/map-query
```

### 4. 重启 OpenClaw

```bash
openclaw restart
```

## 💬 使用示例

### 查询附近美食

**你问：** "帮我查查广州市番禺区上教xx街道47号附近有什么好吃的"

**AI 回答：**
```
📍 地址定位成功：广州市番禺区上教xx街道47号

🍽️ 附近美食推荐（1km内）：

1. 粤香阁 - 粤菜 ⭐4.8分 (280米)
   推荐：招牌烧鹅、白切鸡

2. 老上海馄饨铺 - 小吃 ⭐4.5分 (150米)
   推荐：鲜肉大馄饨

...
```

### 查询促销活动

**你问：** "北京三里屯最近有什么促销活动？"

**AI 回答：**
```
📍 地址定位成功：北京市朝阳区三里屯

🎉 近期促销活动：

1. 太古里春季时尚周 (即日起-4月10日)
   全场春装5折起，满1000减200

2. 星巴克新店开业 (即日起-3月31日)
   饮品买一送一

...
```

## 📁 目录结构

```
map-query/
├── SKILL.md      # 技能定义
├── CLAUDE.md      # 核心指令（自动注入）
├── README.md     # 本文件
├── INSTALL.md    # 详细安装指南
├── EXAMPLES.md   # 使用示例
└── scripts/      # （预留）查询脚本目录
```

## 🛠️ 可用脚本

（后续实现）

- `scripts/geocode.mjs` - 地址解析
- `scripts/search.mjs` - 周边搜索
- `scripts/food.mjs` - 美食查询
- `scripts/promotion.mjs` - 促销查询

## 🔗 参考项目

- 12306 技能：https://github.com/kirorab/12306-skill

---

**新技能已创建完成！** 🎉

📝 审阅提示：
- 请检查技能功能是否符合预期
- API Key 配置需用户自行设置
- 确认无误后再投入正式使用
