#!/usr/bin/env node

import { search } from './search.mjs';

const FOOD_TYPES = {
  amap: '050000',
  baidu: '美食',
  tencent: '美食'
};

const CUISINE_KEYWORDS = {
  sichuan: '川菜',
  cantonese: '粤菜',
  japanese: '日料',
  korean: '韩料',
  western: '西餐',
  hotpot: '火锅',
  barbecue: '烧烤',
  seafood: '海鲜',
  vegetarian: '素食',
  fastfood: '快餐'
};

export async function searchFood(address, options = {}) {
  const provider = options.provider;
  const foodType = FOOD_TYPES[provider] || '美食';
  
  const searchOptions = {
    ...options,
    type: foodType
  };
  
  if (options.cuisine && CUISINE_KEYWORDS[options.cuisine]) {
    searchOptions.keywords = CUISINE_KEYWORDS[options.cuisine];
  }
  
  const result = await search(address, searchOptions);
  
  if (result.success) {
    return {
      ...result,
      searchType: 'food',
      cuisine: options.cuisine || null
    };
  }
  
  return result;
}

async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    console.error('用法: node food.mjs <地址> [选项]');
    console.error('\n选项:');
    console.error('  --cuisine <类型>    菜系类型 (sichuan, cantonese, japanese, korean, western, hotpot, barbecue, seafood, vegetarian, fastfood)');
    console.error('  --radius <米>       搜索半径 (默认: 1000)');
    console.error('  --limit <数量>      最大结果数 (默认: 20)');
    console.error('  --provider <名称>   地图服务商 (amap, baidu, tencent)');
    console.error('\n示例:');
    console.error('  node food.mjs "北京市朝阳区三里屯" --cuisine japanese --radius 2000');
    process.exit(1);
  }
  
  const options = { radius: 1000, limit: 20 };
  let address = '';
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--cuisine' && args[i + 1]) {
      options.cuisine = args[i + 1].toLowerCase();
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
    const result = await searchFood(address, options);
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.error('错误:', error.message);
    process.exit(1);
  }
}

main();
