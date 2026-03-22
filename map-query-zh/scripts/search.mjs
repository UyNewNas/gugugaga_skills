#!/usr/bin/env node

import { CONFIG, getFirstEnabledProvider } from '../config.js';
import { geocode } from './geocode.mjs';

async function searchAmap(location, options = {}) {
  const { type = '', keywords = '', radius = 1000, limit = 20 } = options;
  const url = new URL(`${CONFIG.amap.baseUrl}/place/around`);
  
  url.searchParams.set('key', CONFIG.amap.key);
  url.searchParams.set('location', `${location.lng},${location.lat}`);
  url.searchParams.set('radius', radius.toString());
  url.searchParams.set('offset', limit.toString());
  
  if (type) url.searchParams.set('types', type);
  if (keywords) url.searchParams.set('keywords', keywords);
  
  const response = await fetch(url.toString());
  const data = await response.json();
  
  if (data.status === '1' && data.pois) {
    return {
      success: true,
      provider: 'amap',
      count: data.pois.length,
      pois: data.pois.map(poi => ({
        id: poi.id,
        name: poi.name,
        type: poi.type,
        address: poi.address,
        location: poi.location ? poi.location.split(',').map(Number) : null,
        distance: poi.distance,
        tel: poi.tel,
        rating: poi.biz_ext?.rating
      }))
    };
  }
  return { success: false, provider: 'amap', error: data.info || '搜索失败' };
}

async function searchBaidu(location, options = {}) {
  const { type = '', keywords = '', radius = 1000, limit = 20 } = options;
  const url = new URL(`${CONFIG.baidu.baseUrl}/place/v2/search`);
  
  url.searchParams.set('ak', CONFIG.baidu.key);
  url.searchParams.set('location', `${location.lat},${location.lng}`);
  url.searchParams.set('radius', radius.toString());
  url.searchParams.set('output', 'json');
  url.searchParams.set('page_size', limit.toString());
  
  if (keywords) url.searchParams.set('query', keywords);
  if (type) url.searchParams.set('tag', type);
  
  const response = await fetch(url.toString());
  const data = await response.json();
  
  if (data.status === 0 && data.results) {
    return {
      success: true,
      provider: 'baidu',
      count: data.results.length,
      pois: data.results.map(poi => ({
        id: poi.uid,
        name: poi.name,
        type: poi.detail_info?.tag,
        address: poi.address,
        location: poi.location,
        distance: poi.detail_info?.distance,
        tel: poi.telephone,
        rating: poi.detail_info?.overall_rating
      }))
    };
  }
  return { success: false, provider: 'baidu', error: data.message || '搜索失败' };
}

async function searchTencent(location, options = {}) {
  const { type = '', keywords = '', radius = 1000, limit = 20 } = options;
  const url = new URL(`${CONFIG.tencent.baseUrl}/ws/place/v1/explore`);
  
  url.searchParams.set('key', CONFIG.tencent.key);
  url.searchParams.set('boundary', `nearby(${location.lat},${location.lng},${radius})`);
  url.searchParams.set('page_size', limit.toString());
  
  if (keywords) url.searchParams.set('keyword', keywords);
  if (type) url.searchParams.set('category', type);
  
  const response = await fetch(url.toString());
  const data = await response.json();
  
  if (data.status === 0 && data.data) {
    return {
      success: true,
      provider: 'tencent',
      count: data.data.length,
      pois: data.data.map(poi => ({
        id: poi.id,
        name: poi.title,
        type: poi.category,
        address: poi.address,
        location: poi.location,
        distance: poi._distance,
        tel: poi.tel
      }))
    };
  }
  return { success: false, provider: 'tencent', error: data.message || '搜索失败' };
}

export async function search(addressOrLocation, options = {}) {
  const provider = options.provider || getFirstEnabledProvider();
  
  if (!provider) {
    throw new Error('未配置地图服务商。请设置 AMAP_KEY、BAIDU_MAP_KEY 或 TENCENT_MAP_KEY 环境变量。');
  }
  
  let location = addressOrLocation;
  if (typeof addressOrLocation === 'string') {
    const geoResult = await geocode(addressOrLocation, provider);
    if (!geoResult.success) {
      return geoResult;
    }
    location = geoResult.location;
  }
  
  switch (provider) {
    case 'amap':
      return searchAmap(location, options);
    case 'baidu':
      return searchBaidu(location, options);
    case 'tencent':
      return searchTencent(location, options);
    default:
      throw new Error(`未知的地图服务商: ${provider}`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('用法: node search.mjs <地址> [选项]');
    console.error('\n选项:');
    console.error('  --type <类型>       POI类型 (美食、酒店、银行等)');
    console.error('  --keywords <关键词> 搜索关键词');
    console.error('  --radius <米>       搜索半径 (默认: 1000)');
    console.error('  --limit <数量>      最大结果数 (默认: 20)');
    console.error('  --provider <名称>   地图服务商 (amap, baidu, tencent)');
    console.error('\n示例:');
    console.error('  node search.mjs "北京市朝阳区三里屯" --type 美食 --radius 2000');
    process.exit(1);
  }
  
  const options = { radius: 1000, limit: 20 };
  let address = '';
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--type' && args[i + 1]) {
      options.type = args[i + 1];
      i++;
    } else if (args[i] === '--keywords' && args[i + 1]) {
      options.keywords = args[i + 1];
      i++;
    } else if (args[i] === '--radius' && args[i + 1]) {
      options.radius = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--limit' && args[i + 1]) {
      options.limit = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--provider' && args[i + 1]) {
      options.provider = args[i + 1];
      i++;
    } else {
      address += (address ? ' ' : '') + args[i];
    }
  }
  
  try {
    const result = await search(address, options);
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('错误:', error.message);
    process.exit(1);
  }
}

main();
