# 股票接口小助手

## 简介

一款聚焦在 股票实时数据 和 周边相关服务的接口小组手。

## 股票数据

| 名称 | 接口名 | 官网 |
| --- | --- | --- |
| 基础示例 | base | 无 |
| 网易财经 | netease | [传送门](https://money.163.com/)

## 安装 

```shell
npm install stock-api
yarn install stock-api
```

## 使用

### 获取股票实时数据

```typescript
import { api } from 'stock-api/stocks/netease';

// 省略 async 相关内容
const stock = await (new api).getStock('SH510500');

// 结果:
// { code: 'SH510500', name: '500ETF', price: 7.253, percent: -0.001102 }
```

### 获取股票组实时数据

```typescript
import { api } from 'stock-api/stocks/netease';

// 省略 async 相关内容
const stock = await (new api).getStocks(['SH510500']);

// 结果:
// [{ code: 'SH510500', name: '500ETF', price: 7.253, percent: -0.001102 }]
```

## 一起成长

> 韭菜小猪也有暴富梦~

* 在困惑的城市里总少不了并肩同行的 伙伴 让我们一起成长。
* 如果您想让更多人看到文章可以点个 点赞。
* 如果您想激励小二可以到 Github 给个 小星星。