<template>
  <div class="check-box">
    <img src="../../../assets/img/cart/tick.svg" :class="{'checked':isChecked}" alt />
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
.check-box {
  width: 15px;
  height: 15px;
}
img {
  width: 100%;
  border-radius: 50%;
  border: 1px solid #666;
}
.checked {
  background-color: #ff8198;
  border: 1px solid #ff8198;
}
</style>