<template>
  <div class="detail-recommend">
    <div class="title">
      <div class="left item">
        用户评论
        <span class="count">{{rateList.count}}</span>
      </div>
      <div class="right">更多</div>
    </div>
    <div class="info" v-for="(item) in rateList.list" :key="item.rateId">
      <div class="top">
        <img :src="item.user.avatar" />
        <div class="name">{{item.user.uname}}</div>
      </div>
      <div class="comment">{{item.content}}</div>
      <div class="comment-info">
        <div class="time">{{item.created | format}}</div>
        <div class="style">{{item.style}}</div>
      </div>
      <div class="comment-imgs">
        <img v-for="img in item.images" :key="img.index" :src="img" alt />
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from '@/utils/index'
export default {
  name: 'DetailRecommend',
  props: {
    rateList: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    format(value) {
      const date = new Date(value * 1000)
      return formatDate(date, 'yyyy-MM-dd')
    }
  }
}
</script>

<style scoped>
.detail-recommend {
  padding: 0.7692rem;
  border-top: 0.7692rem solid #eee;
}

.title {
  display: flex;
  align-items: center;
  font-size: 0.7692rem;
  color: #333;
  margin-bottom: 0.7692rem;
}

.title .item {
  flex: 1;
  font-size: 0.9231rem;
  font-weight: bold;
}

.count {
  font-size: 8px;
  margin: 0 5px;
}

.top {
  display: flex;
  align-items: center;
  font-size: 0.9231rem;
  margin-bottom: 0.3846rem;
}

.top img {
  width: 2.3077rem;
  height: 2.3077rem;
  border-radius: 50%;
  margin-right: 0.7692rem;
}

.comment {
  font-size: 0.7692rem;
  color: #333;
  margin-bottom: 0.3846rem;
}

.comment-info {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 0.6154rem;
}

.time {
  margin-right: 0.7692rem;
}
.comment-imgs{
  padding-top: 0.7692rem;
  overflow: hidden;
  height: 6.1538rem;
}
.comment-imgs img{
  float: left;
  width: 6.1538rem;
  margin-right: 0.7692rem;
}
</style>