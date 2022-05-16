<template>
  <div>
    <div style="width: 400px">
      <div class="title">
        <!-- <h4>芙蓉楼送辛渐</h4> -->
        <slot name="title"></slot>
        <button @click="isShow = !isShow">
          {{ msg }}
          {{ isShow ? "展开" : "收起" }}
        </button>
      </div>
      <div class="container" v-show="!isShow">
        <slot name="contact"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
};
</script>

<style lang="less" scoped>
</style>