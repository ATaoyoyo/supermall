<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navbar'
}
</script>
<style scoped>
.nav-bar {
  display: flex;
  line-height: 44px;
  text-align: center;
}
.left,
.right {
  width: 60px;
}
.left,
.right,
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.center {
  flex: 1;
}
</style>