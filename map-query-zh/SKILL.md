
---
name: map-query
description: 地图查询技能 - 通过地址定位查询附近美食、促销活动，支持高德/百度/腾讯地图
metadata:
  version: 1.0.0
  author: uynewnas
  category: location-services
  tags: [map, poi, food, location, amap, baidu, tencent]
---

# 地图查询技能

通过具体地址定位，查询附近的美食、商店、促销活动等 POI 信息。

## 核心功能

- **地址解析**：将详细地址转换为经纬度坐标
- **周边搜索**：查询指定位置周边的 POI（兴趣点）
- **多地图支持**：集成高德地图、百度地图、腾讯地图 API
- **美食查询**：专门查找附近的餐厅、美食店
- **促销活动**：查询附近的商家促销信息

## 支持的地图服务商

| 服务商 | 功能 | 备注 |
|-------|------|------|
| 高德地图 (AMap) | ✅ 地址解析、POI搜索、美食查询 | 需要 API Key |
| 百度地图 | ✅ 地址解析、POI搜索、美食查询 | 需要 API Key |
| 腾讯地图 | ✅ 地址解析、POI搜索、美食查询 | 需要 API Key |

## 主要功能

### 1. 地址定位
- 支持详细地址：如"广州市番禺区上教xx街道47号"
- 支持城市+地标：如"北京 天安门"
- 自动解析，返回经纬度坐标

### 2. 周边搜索
- 按类型搜索：美食、酒店、银行、加油站等
- 按距离筛选：1km、2km、5km 等
- 按评分排序：优先显示高评分商家
- 按距离排序：优先显示附近商家

### 3. 美食查询
- 菜系筛选：川菜、粤菜、日料等
- 价格区间：人均消费范围
- 营业时间筛选
- 用户评价筛选

### 4. 促销活动
- 查找附近商家优惠
- 新店开业信息
- 限时折扣活动

## 依赖

- Node.js &gt;= 18
- 地图服务商 API Key（至少配置一个）

## 快速开始

```bash
# 配置 API Key
export AMAP_KEY=your_amap_api_key
export BAIDU_MAP_KEY=your_baidu_map_key
export TENCENT_MAP_KEY=your_tencent_map_key

# 查询地址附近的美食
node scripts/search.mjs "北京市朝阳区三里屯" --type food

# 查询促销活动
node scripts/search.mjs "北京市朝阳区三里屯" --type promotion
```

---

## 相关参考

- 12306 技能：https://github.com/kirorab/12306-skill
- 高德地图 API：https://lbs.amap.com/
- 百度地图 API：https://lbsyun.baidu.com/
- 腾讯地图 API：https://lbs.qq.com/
