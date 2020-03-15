import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

// 商品信息
export class goods {
  constructor(itemInfo,columns,services){
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
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.fans = shopInfo.cFans
    this.sells = shopInfo.cSells
    this.score = shopInfo.score
    this.goodsCount = shopInfo.cGoods
    this.shopUrl = shopInfo.shopUrl
  }
}