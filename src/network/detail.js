import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
  return request({
    url: '/recommend'
  })
}

// 商品信息
export class goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.realPrice = itemInfo.lowNowPrice
    this.disCount = itemInfo.discountDesc
    this.columns = columns
    this.services = services
  }
}

// 店铺信息
export class shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
  }
}

// 商品参数
export class goodsParams {
  constructor(info, rule) {
    this.img = info.img ? info.img : ''
    this.info = info.set
    this.rule = rule.tables[0]
  }
}

// 评论
export class rate {
  constructor(rateCount, rateList) {
    this.count = rateCount
    this.list = rateList
  }
}
