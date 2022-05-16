<template>
  <div>
    <!-- <hello-world>
      <p>寒雨连江夜入吴,</p>
      <p>平明送客楚山孤。</p>
      <p>洛阳亲友如相问，</p>
      <p>一片冰心在玉壶。</p>
    </hello-world> -->
    <hello-world>
      <template>
        <div slot="title">
          <h4>芙蓉楼送辛渐</h4>
        </div>
      </template>
      <template>
        <div slot="contact">
          <p>寒雨连江夜入吴,</p>
          <p>平明送客楚山孤。</p>
          <p>洛阳亲友如相问，</p>
          <p>一片冰心在玉壶。</p>
        </div>
      </template>
    </hello-world>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
export default {
  components: { HelloWorld },
};
</script>

<style lang="less" scoped>
</style>
